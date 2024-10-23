import Creadentials from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'
import { compare } from 'bcrypt'
import { Session } from 'next-auth'

export interface SessionType extends Session{
  _id?: string,
  rol?: string,
  email?: string,
  nombre: string
}

export default NuxtAuthHandler({
  secret: 'SECRETO',
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    Creadentials.default({
      async authorize(credentials: {email: string, password: string}, req: any) {
        const usuario = await login(credentials.email, credentials.password)
        
        if(!usuario) return null;
        return {
          id: usuario._id,
          name: usuario.nombre,
          email: usuario.email,
        }
      },
    }),
  ],
  callbacks:{
    async session({session}){
      if(session?.user){
        const usuario = await UsuarioSchema.findOne({email: session.user?.email})
        
        session = Object.assign(session, {
          email: usuario?.email,
          rol: usuario?.rol,
          _id: usuario?._id,
          nombre: usuario?.nombre
        })
      }
      return session
    }
  }
})

const login = async(email: string, password: string)=>{
  const usuario = await UsuarioSchema.findOne({email: email.toLowerCase()})
  if(!usuario) return null;
  if (!(await compare(password, usuario.password.toString()))) return null
  return usuario
}