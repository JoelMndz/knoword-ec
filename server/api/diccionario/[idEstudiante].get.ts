import { PalabraSchema } from "~/server/models/palabra"

export default defineEventHandler(async(event)=>{
  const {idEstudiante} = event.context.params!
  if(!idEstudiante){  
    throw createError({status: 400, statusMessage: 'Debe enviar el id'})
  }
  const data = await PalabraSchema.find({
    _estudiante: idEstudiante
  })
  return data
})