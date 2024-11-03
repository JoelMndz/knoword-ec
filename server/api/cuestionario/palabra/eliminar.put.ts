
interface IBody{
  _cuestionario: string
  _palabra: string
}

export default defineEventHandler(async(event)=>{
  const body:IBody = await readBody(event)
  const cuestionario:any = await CuestionarioSchema.findById(body._cuestionario)
  cuestionario.palabras = cuestionario.palabras.filter((x:any) => x?._id.toString() !== body._palabra)
  return await cuestionario.save()
})