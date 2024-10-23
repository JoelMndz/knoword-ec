import type { SessionType } from "~/server/api/auth/[...]"


interface IState{
  cuestionarios: ICuestionario[]
}

export const useCuestionarioProfesorStore = defineStore('cuestionarioProfesorStore',{
  state:():IState=>({
    cuestionarios: []
  }),
  actions:{
    async crearCuestionario(body: ICuestionario){
      const data = await $fetch('/api/cuestionario/',{
        method:'post',
        body
      })
      this.cuestionarios.push(data as ICuestionario)
      navigateTo('/app/profesor')
    },
    async obtenerCuestionarios(){
      const data = await $fetch('/api/cuestionario/por-profesor/'+(useAuth().data.value as SessionType)._id)
      this.cuestionarios = data as ICuestionario[]
    }
  },
})
