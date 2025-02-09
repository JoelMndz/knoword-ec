<template>
  <VCard
    title="Add word to dictionary"
  >
    <VCardText>
      <VForm
        @submit.prevent="procesarFormulario"
        ref="formulario"
      >
        <label>Word:</label>
        <VTextField 
          v-model="campos.nombre"
          :rules="reglas.campoObligatorio"
          class="mt-2"
        />
        <label>Definition:</label>
        <VTextarea 
          v-model="campos.definicion"
          :rules="reglas.campoObligatorio"
          rows="2"
          class="mt-2"
        />
        <VRow class="mt-5">
          <VSpacer />
          <VCol cols="auto">
            <VBtn 
              text="Save"
              type="submit"
              :loading="cargando"
            />
          </VCol>
        </VRow>
      </VForm>
    </VCardText>
  </VCard>
</template>

<script setup lang="ts">
import type { VForm } from 'vuetify/components';

const diccionarioStore = useDiccionarioStore()
const formulario = ref<VForm | null>(null)
const cargando = ref(false)
const campos = reactive({
  nombre: '',
  definicion: '',
})

const reglas = {
  campoObligatorio: [
    (v: string) => !!v || 'required!'
  ]
}

const procesarFormulario = async()=>{
  const {valid} = await formulario.value!.validate()
  if(!valid) return;
  cargando.value = true
  await diccionarioStore.guardarPalabra(campos)
  cargando.value = false
  diccionarioStore.cerrarFormulario()
}

onUnmounted(()=>{
  diccionarioStore.cerrarFormulario()
})
</script>

<style scoped>

</style>