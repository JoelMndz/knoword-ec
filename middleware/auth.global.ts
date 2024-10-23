import type { Session } from "next-auth";
import type { SessionType } from "~/server/api/auth/[...]";


export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuth()
  const data = auth.data.value as SessionType
  if(!to.fullPath.startsWith('/api')){

    if(to.fullPath === '/' && data)
      return navigateTo(`/app/${data.rol}`)
    
    if(to.fullPath.startsWith('/app') && !data)
      return navigateTo('/')
  
    if(data){
      if(!to.fullPath.startsWith(`/app/${data.rol}`))
        return navigateTo(`/app/${data.rol}`)
    }
  }
})
