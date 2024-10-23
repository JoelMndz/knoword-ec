export {}

declare global{
  interface IUsuario{
    nombre: string
    email: string
    rol: 'estudiante'|'profesor'
  }

  
}