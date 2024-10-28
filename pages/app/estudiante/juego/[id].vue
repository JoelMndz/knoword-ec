<template>
  <VContainer fluid>
    <template 
      v-if="estado === EstadosJuego.Pendiente"
      >
      <LobbyJuego />
    </template>
    <template v-else-if="estado === EstadosJuego.EnProgreso">
      <PanelPreguntas />
    </template>
    <VRow v-else>
      <ResultadoJuego />
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">
const juegoStore = useJuegoEstudiante()
const { estado } = storeToRefs(juegoStore)

onUnmounted(()=>{
  juegoStore.restablecerValores()
})
</script>


<style scoped>

</style>