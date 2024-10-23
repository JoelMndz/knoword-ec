import {defineStore} from "pinia";

interface IState{
  mensaje: string | null
}

export const useErrorStore = defineStore('errorStore',{
  state:():IState=>({
    mensaje: null
  }),
  actions:{
    manejarError(error: string | any){
      this.mensaje = error
    }
  }
})