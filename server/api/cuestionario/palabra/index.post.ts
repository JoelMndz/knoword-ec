
interface IBody{
  _cuestionario: string
  palabra: string
  definicion: string
  tipo: string
}

export default defineEventHandler(async(event)=>{
  const body:IBody = await readBody(event)
  const cuestionario:any = await CuestionarioSchema.findById(body._cuestionario)
  cuestionario.palabras.push({
    palabra: body.palabra,
    definicion: body.definicion,
    tipo: body.tipo
  })
  await cuestionario.save()
  return await CuestionarioSchema.findById(body._cuestionario)
})