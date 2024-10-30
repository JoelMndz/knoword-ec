import { PalabraSchema } from "~/server/models/palabra"

export default defineEventHandler(async(event)=>{
  const {id} = event.context.params!
  if(!id){
    throw createError({status: 400, statusMessage: 'Debe enviar el id'})
  }
  const data = await PalabraSchema.findByIdAndDelete(id)
  return data
})