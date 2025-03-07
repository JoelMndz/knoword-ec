
import { genSalt, hash } from "bcrypt"
import { UsuarioSchema } from "~/server/models/usuario"

export default defineEventHandler(async (event) =>{
  const body = await readBody(event)
  const user = await UsuarioSchema.findOne({_id: body?._id})
  if(!user){
    throw createError({status:400, statusText:'Ocurrio un error!'})
  }
  user.password =  (await encriptarPassword(body?.password)) as any
  await user.save()
  return user
})


const encriptarPassword = async (password: string)=>{
  const salt = await genSalt(10)
  return await hash(password, salt) 
}