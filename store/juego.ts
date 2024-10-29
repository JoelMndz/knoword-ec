import moment, { type Moment } from "moment";
import { defineStore } from "pinia";

interface IState{
  cuestionarioActual: ICuestionario | null
  respuestas: boolean[]
  inicio: Moment | null
  fin: Moment | null
  tiempo: number | null
  estado: EstadosJuego
  indicePreguntaActual: number
  respuestasCorrectasSeguidas: number
}

export const useJuegoEstudiante = defineStore('juegoEstudianteStore',{
  state:():IState=>({
    cuestionarioActual: null,
    respuestas: [],
    inicio: null,
    fin: null,
    estado: EstadosJuego.Pendiente,
    indicePreguntaActual: 0,
    tiempo: null,
    respuestasCorrectasSeguidas: 0
  }),
  actions:{
    empezarJuego(datos:{cuestionario:ICuestionario, tiempo: number | null}){
      this.cuestionarioActual = datos.cuestionario
      this.inicio = moment()
      this.tiempo = datos.tiempo
      this.estado = EstadosJuego.EnProgreso
    },
    siguientePalabra(correcto?:boolean){ 
      this.respuestas.push(!!correcto)
      if((this.indicePreguntaActual + 1) === this.cuestionarioActual?.palabras.length){
        return this.terminaJuego()
      }
      this.indicePreguntaActual++
    },
    terminaJuego(){
      this.estado = EstadosJuego.Terminado
      this.fin = moment()
      this.guadarJuego()
    },
    restablecerValores(){
      this.inicio = null
      this.estado = EstadosJuego.Pendiente
      this.cuestionarioActual = null
      this.indicePreguntaActual = 0
      this.respuestasCorrectasSeguidas = 0
      this.respuestas = []
    },
    async guadarJuego(){
      await $fetch('/api/juego',{
        method: 'POST',
        body: {
          _cuestionario: this.cuestionarioActual?._id,
          _estudiante: (useAuth().data.value as any)?._id,
          inicio: this.inicio,
          fin: this.fin,
          respuestas: this.cuestionarioActual?.palabras.map((x,i) =>{
            return {
              _palabra: x._id, 
              correcta: i < this.respuestas.length ? this.respuestas[i] : false
            }
          })
        }
      })
    }
  },
  getters:{
    palabraActual(state){
      if(!state.cuestionarioActual) return
      return state.cuestionarioActual?.palabras[state.indicePreguntaActual]
    },
    resultadoJuego(state){
      return {
        puntaje: state.respuestas.filter(x => x).length * 10,
        respuestasCorrectas: state.respuestas.filter(x => x).length,
        tiempo: moment(moment(state.fin).diff(state.inicio)).seconds()
      }
    }
  }
})

export enum EstadosJuego{
  Pendiente="Pendiente",
  EnProgreso="En progreso",
  Terminado="Terminado"
}