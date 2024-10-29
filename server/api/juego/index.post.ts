
interface IBody{
  _cuestionario: string
  _estudiante: string
  inicio: string
  fin: string
  respuestas:{
    _palabra: string
    correcta: Boolean
  }[]
}


export default defineEventHandler(async(event)=>{
  const body:IBody = await readBody(event)
  const juego = new JuegoSchema({
    nombre: body._cuestionario,
    _estudiante: body._estudiante,
    inicio: body.inicio,
    fin: body.fin,
    respuestas: body.respuestas
  })
  await juego.save()
  return juego
})