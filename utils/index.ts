export const formatearTiempo = (tiempo:number)=>{
  const minuto = tiempo / 60
  const segundos = tiempo % 60
  
  return `${Math.trunc(minuto)}:${segundos == 0 ? '00':segundos < 10 ? '0'+segundos : segundos}`
}