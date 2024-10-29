import { PalabraSchema } from "~/server/models/palabra"

interface IBody{
  nombre: string
  definicion: string
  _estudiante: string
}

export default defineEventHandler(async(event)=>{
  const body:IBody = await readBody(event)
  const palabra = new PalabraSchema({
    nombre: body.nombre,
    definicion: body.definicion,
    _estudiante: body._estudiante,
  })
  return await palabra.save()
})