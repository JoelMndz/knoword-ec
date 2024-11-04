export {}

declare global{
  interface ICuestionario{
    _id?: string
    nombre: string
    _profesor: {
      _id: string
      nombre: string
      email: string
    }
    palabras:{
      _id?: string
      palabra: string
      definicion: string
      tipo: string
    }[]
    createdAt?: string
    updatedAt?: string
  }
}