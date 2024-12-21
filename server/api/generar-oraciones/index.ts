
const TEMAS = [
  "Rutinas diarias",
  "Viajes y vacaciones",
  "Comida y cocina",
  "Pasatiempos e intereses",
  "Deportes y ejercicio",
  "Música e instrumentos",
  "Películas y programas de televisión",
  "Libros y literatura",
  "Tecnología y gadgets",
  "Trabajos y carreras",
  "Educación y aprendizaje",
  "Familia y relaciones",
  "Salud y bienestar",
  "Compras y moda",
  "Clima y estaciones",
  "Animales y mascotas",
  "Medio ambiente y naturaleza",
  "Fiestas y celebraciones",
  "Arte y creatividad",
  "Historia y cultura",
  "Ciencia y experimentos",
  "Superhéroes y villanos",
  "Sueños y metas",
  "Amistad y confianza",
  "Transporte y vehículos",
  "Ciudades y lugares emblemáticos",
  "Misterios y detectives",
  "Cuentos de hadas y mitos",
  "Colecciones y hobbies",
  "Emociones y sentimientos"
];


export default defineEventHandler(async(event)=>{
  const {TOKEN_CHATGPT} = useRuntimeConfig()
  
  const response:IRespuestaIA = await $fetch('https://api.openai.com/v1/chat/completions',{
    method:'POST',
    headers:{
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN_CHATGPT}`
    },
    body: {
      "model": "gpt-3.5-turbo",
      "messages": [{
        role: 'user', 
        content: `
          Genera un array en formato json con 10 oraciones unicas en ingles, debe ser un ingles básico A1. 
          El tema debe ser: ${TEMAS[Math.floor(Math.random()*TEMAS.length)]}
          Las oraciones no mas de 7 palabras
          Basate en esta marca de tiempo para dar una oracion unica: ${Date.now()}
          La respuesta de ser algo asi: ["Oracion 1", "Oracion enn ingles 2"]`
      }],
      "temperature": 0
    }
  })
  
  return JSON.parse(response.choices[0].message.content)
})

interface IRespuestaIA{
  choices: [{
    message:{
      content: string
      role:  'assistant'
    }
  }]
}