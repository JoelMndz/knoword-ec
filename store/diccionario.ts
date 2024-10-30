import { defineStore } from "pinia";
import type { SessionType } from "~/server/api/auth/[...]";

interface IState{
  palabras: IPalabraDiccionario[]
  mostrarFormulario: boolean
}

export const useDiccionarioStore = defineStore('diccionarioStore',{
  state:():IState=>({
    palabras: [],
    mostrarFormulario: false
  }),
  actions:{
    async obtenerPalabras(){
      const respuesta = await $fetch('/api/diccionario/'+(useAuth().data.value as SessionType)._id)
      this.palabras = respuesta as IPalabraDiccionario[]
    },
    async guardarPalabra(body:{nombre: string, definicion: string}){
      const palabra = await $fetch('/api/diccionario',{
        method:'POST',
        body:{
          ...body,
          _estudiante: (useAuth().data.value as SessionType)._id
        }
      })
      this.palabras.push(palabra as IPalabraDiccionario)
    },
    abrirFormulario(){
      this.mostrarFormulario = true
    },
    cerrarFormulario(){
      this.mostrarFormulario = false
    }
  }
})

export interface IPalabraDiccionario{
  _id: string
  nombre: string
  definicion: string
  createdAt: string
}