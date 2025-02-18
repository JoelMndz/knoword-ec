<template>
  <VContainer>
    <h1 class="text-h4 text-center">Dictionary</h1>
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
        v-for="i in palabras" :key="i._id">
        <VCard
          :title="i.nombre"
          :subtitle="`${moment(i.createdAt).format('DD-mm-yyyy')}`"
          :text="i.definicion"
          elevation="5"
        >
          <VCardActions>
            <VDialog max-width="450">
              <template #activator="{props}">
                <VBtn 
                  v-bind="props"
                  icon="mdi-delete"
                  color="error"
                  variant="tonal"
                  size="small"
                />
              </template>
              <template #default="{isActive}">
                <VCard
                  title="Delete word"
                  :text="`Are you sure you want to delete?`"
                >
                  <VCardActions>
                    <VBtn 
                      text="Cancel"
                      color="error"
                      @click="isActive.value = false"
                      variant="tonal"
                    />
                    <VBtn 
                      text="Delete"
                      @click="eliminarPalabra(i._id, isActive.value)"
                      variant="tonal"
                    />
                  </VCardActions>
                </VCard>
              </template>
            </VDialog>
            <VSpacer />
            <VBtn 
              text="Play" 
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
import moment from 'moment';
import type { IPalabraDiccionario } from '~/store/diccionario';


const diccionarioStore = useDiccionarioStore()
const {mostrarFormulario, palabras} = storeToRefs(diccionarioStore)

const reproducirPalabra = (palabra: IPalabraDiccionario)=>{
  const speechSynthesis = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(palabra.nombre);
  utterance.lang = 'en-US';
  speechSynthesis.speak(utterance);
}

const eliminarPalabra = async(_id: string, active: boolean)=>{
  active = false
  await diccionarioStore.eliminarPalabra(_id)
}

await diccionarioStore.obtenerPalabras()

</script>

<style scoped>

</style>