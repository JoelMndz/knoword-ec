
import { genSalt, hash } from "bcrypt"
import { generate } from "generate-password"
import { UsuarioSchema } from "~/server/models/usuario"

export default defineEventHandler(async (event) =>{
  const body = await readBody(event)
  const user = await UsuarioSchema.findOne({email: body?.email?.toLocaleLowerCase()})
  if(!user){
    throw createError({status:400, statusText:' Email not found!'})
  }
  const password = generate({length: 8})
  user.password =  (await encriptarPassword(password)) as any
  await user.save()
  await sendEmail({
    subject:'New Password - Learning Words',
    to: user.email.toString(),
    html: `
      <h2>Email: ${user.email}</h2>
      <h2>Contraseña: ${password}</h2>
    `
  })
  return body
})


const encriptarPassword = async (password: string)=>{
  const salt = await genSalt(10)
  return await hash(password, salt) 
}