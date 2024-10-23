
export default defineEventHandler(async(event)=>{
  const data = await CuestionarioSchema.find().populate('_profesor')
  return data
})