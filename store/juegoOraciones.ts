import confetti from 'canvas-confetti';

interface IState{
  oraciones: string[]
  cargandoOraciones: boolean,
  palabrasPorCompletar: IPalabraPorCompletar[]
  respuestas: IPalabraPorCompletar[] | null[]
  puntaje: number
  estado: EstadosJuegoRapido
}

export const useJuegoOracionesStore = defineStore('juegoOracionesStore',{
  state:():IState=>({
    oraciones: [],
    cargandoOraciones: false,
    palabrasPorCompletar: [],
    respuestas: [],
    puntaje: 0,
    estado: EstadosJuegoRapido.Pendiente
  }),
  actions:{
    async generarOracionesConIA(){
      this.cargandoOraciones = true
      this.oraciones = await $fetch('/api/generar-oraciones')
      this.respuestas = Array.from({length: this.oraciones.length}).map(x => null)
      this.palabrasPorCompletar = []
      this.oraciones.forEach((oracion, i) =>{
        const palabras = oracion.split(' ')
        let posicionAleatoria = 0
        do {
          posicionAleatoria = Math.floor(Math.random() * palabras.length)
        } while (this.palabrasPorCompletar.find(x =>  x.palabra.toLocaleLowerCase().replace('.','') === palabras[posicionAleatoria].toLocaleLowerCase().replace('.','')));
        this.palabrasPorCompletar.push({palabra: palabras[posicionAleatoria], posicion: posicionAleatoria, indiceOracion: i})
      })
      this.palabrasPorCompletar.sort(()=> Math.random() - 0.5)
      if(this.estado === EstadosJuegoRapido.Pendiente){
        this.puntaje = 0
        this.estado = EstadosJuegoRapido.Progreso
      }
      this.cargandoOraciones = false
    },
    agregarRespuesta(indiceOracion: number, palabraArrastrada: IPalabraPorCompletar){
      this.respuestas = (this.respuestas.map(x =>
          x?.indiceOracion === palabraArrastrada.indiceOracion && 
          x.palabra === palabraArrastrada.palabra && 
          x.posicion === palabraArrastrada.posicion ?
            null : x
      ) as IPalabraPorCompletar[] | null[])
      this.respuestas[indiceOracion] = {...palabraArrastrada!}
      if(this.respuestas.find(x => !x) === undefined){
        if(this.respuestas.filter((x,i) => x?.indiceOracion !== i).length === 0){
          this.puntaje += 10
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#ff0', '#0ff', '#f0f'] // Colores personalizables
          });
          new Promise((resolve) =>{
            setTimeout(()=>{
              resolve(()=>{
              })
            }, 1500)
          }).then(()=> this.generarOracionesConIA())
        }else{
          this.estado = EstadosJuegoRapido.Perdio
        }
      }
    },
    terminarJuego(){
      this.estado = EstadosJuegoRapido.Pendiente
    }
  },
  getters:{
    
  }
})


export interface IPalabraPorCompletar{
  posicion: number
  palabra: string
  indiceOracion: number
}

export enum EstadosJuegoRapido{
  Pendiente,
  Progreso,
  Perdio
}