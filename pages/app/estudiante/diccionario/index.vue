<template>
  <VContainer>
    <h1 class="text-h4 text-center">Diccionario</h1>
    <VRow>
      <VCol>
        <VBtn 
          icon="mdi-plus"
          class="rounded-circle" 
          @click="diccionarioStore.abrirFormulario()"
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol 
        cols="12"
        sm="6"
        md="3"
        v-for="i in palabras">
        <VCard
          :title="i.nombre"
          :subtitle="`${new Date(i.createdAt).toLocaleString()}`"
          :text="i.definicion"
          elevation="5"
        >
          <VCardActions>
            <VSpacer />
            <VBtn 
              text="Reproducir" 
              variant="tonal"
              append-icon="mdi-music"
              @click="reproducirPalabra(i)"
              />
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
  <VDialog
    v-model:model-value="mostrarFormulario"
    max-width="450"
  >
    <FormPalabraDiccionario />
  </VDialog>
</template>

<script setup lang="ts">
import type { IPalabraDiccionario } from '~/store/diccionario';


const diccionarioStore = useDiccionarioStore()
const {mostrarFormulario, palabras} = storeToRefs(diccionarioStore)

const reproducirPalabra = (palabra: IPalabraDiccionario)=>{
  console.log('La palabra es '+palabra.nombre);
  
}
await diccionarioStore.obtenerPalabras()
</script>

<style scoped>

</style>