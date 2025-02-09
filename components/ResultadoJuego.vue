<template>
  <VContainer class="text-center">
    <VRow 
      class="py-10"
      style="background-color: #F6F6F6;">
      <VCol>
        <h2 class="text-h5">{{ cuestionarioActual?.nombre }}</h2>
        <div>
          <h1 class="text-h2 mt-3">GOOD TRY</h1>
          <VBtn 
            text="Go to home"
            color="error"
            class="mt-4"
            @click="$router.push('/')"
          />
          <VBtn 
            text="Play again"
            color="secondary"
            class="text-black mt-4 ms-2"
            @click="juegoStore.restablecerValores()"
          />
          
        </div>
      </VCol>
    </VRow>
    <VRow class="mt-5"justify="center">
      <VCol cols="8">
        <VCard
          elevation="10"
        >
          <VCardText>
            <VRow>
              <VCol>
                <p class="text-grey">Total time</p>
                <p class="text-h4 ">{{formatearTiempo(resultadoJuego.tiempo)}}</p>
              </VCol>
              <VDivider vertical thickness="3" />
              <VCol cols="auto">
                <p class="text-grey">Correct questions</p>
                <p class="text-h4 ">{{resultadoJuego.respuestasCorrectas}}/{{ cuestionarioActual?.palabras.length }}</p>
              </VCol>
              <VDivider vertical thickness="3" />
              <VCol>
                <p class="text-grey">Score</p>
                <p class="text-h4 d-flex align-center justify-center">{{resultadoJuego.puntaje}} <span class="text-h5">💎</span></p>
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">

const juegoStore = useJuegoEstudiante()
const {resultadoJuego, cuestionarioActual} = storeToRefs(juegoStore)
</script>

<style scoped>

</style>