
export default defineEventHandler(async(event)=>{
  const {idCuestionario} = event.context.params!
  if(!idCuestionario){
    throw createError({status: 400, statusMessage: 'Debe enviar el profesor'})
  } 
  const data = await JuegoSchema.find({
    _cuestionario: idCuestionario
  }).populate('_estudiante')
  return data
})