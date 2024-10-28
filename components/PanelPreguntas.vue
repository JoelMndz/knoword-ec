<template>
  <VRow
    style="height: 55vh;"
    align="center"
    justify="center"
    class="text-h3 text-md-h2"
  >
    <VCol cols="auto">
      <p>{{ palabraActual?.definicion }}</p>
    </VCol>
  </VRow>
  <div class="progress-container">
    <VProgressCircular
      class="text-h4 progress-circular"
      size="100"
      rotate="360"
      :model-value="medirPorcentajeTiempo.porcentaje"
      :color="medirPorcentajeTiempo.color"
      width="5"
    >
      <span color="red">{{ formatearTiempo }}</span>
    </VProgressCircular>
    <VProgressLinear
      :color="medirPorcentajeAcierto.error ? '#DC2626':'green'"
      :model-value="medirPorcentajeAcierto.porcentaje"
      class="progress-linear"
      />
  </div>
  <VRow 
    class="px-md-5 mt-16"
    style="height: 20vh;" align="center">
    <VCol cols="8" md="9" class="d-flex">
      <div style="width: 100%;">
        <input 
          v-model="respuesta"
          :placeholder="`Empieza con ${palabraActual?.palabra[0]}`"
          autofocus
          type="text">
      </div>
    </VCol>
    <VCol cols="4" md="3">
      <VBtn
        text="Siguiente"
        block
        variant="tonal"
        size="x-large"
        @click="saltarPregunta"
      />
    </VCol>
  </VRow>
</template>

<script setup lang="ts">
import confetti from 'canvas-confetti';

const juegoStore = useJuegoEstudiante()
const { tiempo, palabraActual } = storeToRefs(juegoStore)
const respuesta = ref('')

const tiempoRestante = ref(0)
const idIntervalo = ref<any>(null)

const formatearTiempo = computed(()=>{
  const minuto = tiempoRestante.value / 60
  const segundos = tiempoRestante.value % 60
  
  if(minuto >= 1)
    return `${Math.trunc(minuto)}:${segundos == 0 ? '00':segundos < 10 ? '0'+segundos : segundos}`
  else(minuto)
    return segundos
})

const medirPorcentajeAcierto = computed(()=>{
  const caracteresInput = respuesta.value.toLocaleLowerCase().split('')
  const caracteresPalabra = palabraActual.value?.palabra.toLocaleLowerCase().split('') ?? []
  
  let aciertos = 0
  let error = false
  for (let i = 0; i < caracteresInput.length; i++) {
    if(caracteresPalabra[i] === caracteresInput[i])
      aciertos++
    else{
      error = true
      aciertos = 0
      break
    }
  }
  return {
    porcentaje: error? 100 : aciertos / caracteresPalabra.length * 100,
    error
  }
})

const lanzarConfeti = ()=>{
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.5 },
      colors: ['#ff0', '#0ff', '#f0f'] // Colores personalizables
    });
  }

const medirPorcentajeTiempo = computed(()=>{
  const resultado = {porcentaje: 100, color:'green'}
  if(!tiempo.value) return resultado
  resultado.porcentaje = tiempoRestante.value / tiempo.value * 100
  resultado.color = 'green'
  return resultado
})

const saltarPregunta = ()=>{
  juegoStore.siguientePalabra(false)
  respuesta.value = ''
}

watch(respuesta,(nuevo,anterior)=>{
  if(nuevo.toLocaleLowerCase() === palabraActual.value?.palabra.toLocaleLowerCase()){
    lanzarConfeti()
    juegoStore.siguientePalabra(true)
    respuesta.value = ''
  }
})

const empezarConteo  = ()=>{
  if(!tiempo.value) return
  tiempoRestante.value = tiempo.value
  idIntervalo.value = setInterval(()=>{
    if(tiempoRestante.value == 0){
      juegoStore.terminaJuego()
      detenerConteo()
      return
    }
    tiempoRestante.value--;
  }, 1000)
}

const detenerConteo = ()=>{
  clearInterval(idIntervalo.value)
}

onMounted(()=>{
  empezarConteo()
})

onUnmounted(()=>{
  detenerConteo()
})
</script>

<style scoped>
input{
  font-size: 45px;
  border: none;
  display: block;
  width: 100%;
  text-align: center;
  outline: none;
}

.progress-container {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-linear {
  width: 100%;
}

.progress-circular {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);
}
</style>