<template>
    <VRow>
      <VCol>
        <div class="d-flex align-center justify-center">
          <p class="text-h6 me-3">Límite de tiempo</p>
          <VSwitch 
            color="primary" 
            hide-details
            :model-value="tiempo != null"
            @update:model-value="(x) => tiempo = x ? 90 : null"
          />
        </div>
        <div class="d-flex justify-center align-center">
          <template v-if="tiempo != null">
            <VBtn 
              icon="mdi-minus"
              variant="text"
              color="error"
              :disabled="tiempo == 90"
              @click="tiempo -= 30"
            />
            <p class="text-h2">{{ formatearTiempo }}</p>
            <VBtn 
              icon="mdi-plus"
              variant="text"
              :disabled="tiempo == (60*5)"
              @click="tiempo += 30"
            />
          </template>
          <template v-else>
            <p class="text-h2">Ninguno</p>
          </template>
        </div>
        <VRow class="ma-0 pa-0" justify="center">
          <VCol cols="auto" class="d-flex align-center">
          </VCol>
        </VRow>
        <VRow class="text-center mt-5" justify="space-between" align="center">
          <VCol cols="4" lg="5">
            <p  class="text-h6 mb-1">Modo de juego</p>
            <p class="text-md-h2 text-h3 mb-1 d-flex justify-center align-center">Clásico
              <img class="ms-1" height="40" src="/ninoFeliz.png" >
            </p>
            <p>Adivina la palabra basándote en su definición y primera letra.</p>
          </VCol>
          <VCol cols="4" md="3" lg="2">
            <CardCuestionario 
              :cuestionario="cuestionario"
            />
          </VCol>
          <VCol cols="4" lg="5">
            <VCard 
              class="py-10"
              variant="text"
              @click="empezarJuego">
              <p class="text-md-h2 text-h3 mb-2">Comenzar juego</p>
              <p>Presiona <VBtn color="grey" size="x-small" text="enter"/></p>
            </VCard>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
    <v-fab
      icon="mdi-arrow-left"
      class="ms-4 mb-4"
      location="top start"
      size="64"
      @click="navigateTo('/')"
      absolute
      app
    />
</template>

<script setup lang="ts">

const juegoStore = useJuegoEstudiante()
const {data} = await useFetch('/api/cuestionario/por-id/'+useRoute().params.id)
const cuestionario = ref<ICuestionario>(data.value as ICuestionario)
const tiempo = ref<number | null>(90)

const formatearTiempo = computed(()=>{
  if(!tiempo.value) return ""
  const minuto = tiempo.value / 60
  const segundos = tiempo.value % 60
  return `${Math.trunc(minuto)}:${segundos == 0 ? '00':segundos}`
})

const empezarJuego = ()=>{
  juegoStore.empezarJuego({
    cuestionario: cuestionario.value,
    tiempo: tiempo.value
  })
}

const escucharEventoEnter = (e:KeyboardEvent)=>{
  if (e.key === 'Enter')
    empezarJuego()
}

onMounted(()=>{
  window.addEventListener('keypress', escucharEventoEnter)
})

onUnmounted(()=>{
  window.removeEventListener('keypress', escucharEventoEnter)
})
</script>


<style scoped>

</style>