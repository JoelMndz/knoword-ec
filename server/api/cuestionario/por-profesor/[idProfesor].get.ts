
export default defineEventHandler(async(event)=>{
  const {idProfesor} = event.context.params!
  if(!idProfesor){
    throw createError({status: 400, statusMessage: 'Debe enviar el profesor'})
  } 
  const data = await CuestionarioSchema.find({
    _profesor: idProfesor
  }).populate('_profesor')
  return data
})