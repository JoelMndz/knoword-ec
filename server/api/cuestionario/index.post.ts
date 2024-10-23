
interface IBody{
  nombre: string
  _profesor: string
  categoria: string
  palabras:{
    palabra: string
    definicion: string
    tipo: string
  }[]
}

export default defineEventHandler(async(event)=>{
  const body:IBody = await readBody(event)
  const cuestionario = new CuestionarioSchema({
    nombre: body.nombre,
    _profesor: body._profesor,
    categoria: body.categoria,
    palabras: body.palabras,
  })
  await cuestionario.save()
  return cuestionario
})