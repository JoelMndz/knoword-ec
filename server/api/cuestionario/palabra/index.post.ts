
interface IBody{
  _cuestionario: string
  palabra: string
  definicion: string
  tipo: string
}

export default defineEventHandler(async(event)=>{
  const body:IBody = await readBody(event)
  const cuestionario:any = await CuestionarioSchema.findById(body._cuestionario)
  cuestionario!.palabras = cuestionario.palabras.map((x:any) =>{
    if(x?._id === body._palabra){
      x.palabra = body.palabra
      x.definicion = body.definicion
      x.tipo = body.tipo
    }
    return x
  })
  await cuestionario.save()
  return await CuestionarioSchema.findById(body._cuestionario)
})