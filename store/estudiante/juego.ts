import { defineStore } from "pinia";

interface IState{
  cuestionarioActual: ICuestionario | null
  respuestas: boolean[]
  inicio: string | null
  fin: string | null
  
}

export const useJuegoEstudiante = defineStore('juegoEstudianteStore',{
  state:():IState=>({
    cuestionarioActual: null,
    respuestas: [],
    inicio: null,
    fin: null
  })
})