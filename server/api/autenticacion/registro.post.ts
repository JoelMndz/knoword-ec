import {genSalt, hash} from "bcrypt";

interface IBody{
  email: string
  nombre: string
  password: string
  rol: string
}

export default defineEventHandler(async(event)=>{
  const body:IBody = await readBody(event)
  if(await noExisteEmail(body.email))
    throw createError({status: 400, statusMessage: 'The email is already registered!'})

  const passwordEncriptada = await encriptarPassword(body.password) 
  const usuario = new UsuarioSchema({
    nombre: body.nombre,
    email: body.email,
    password: passwordEncriptada,
    rol: body.rol
  })
  await usuario.save()
  return usuario
})

const noExisteEmail = async (email: string)=>{
  const usuario = await UsuarioSchema.findOne({email: email.toLocaleLowerCase()})
  return !!usuario;
}

const encriptarPassword = async (password: string)=>{
  const salt = await genSalt(10)
  return await hash(password, salt) 
}