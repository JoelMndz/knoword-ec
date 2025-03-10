
export default defineEventHandler(async(event)=>{
  const {id} = event.context.params!
  if(!id){
    throw createError({status: 400, statusMessage: 'You must send the id'})
  } 
  const data = await CuestionarioSchema.findByIdAndDelete(id)
  return data
})