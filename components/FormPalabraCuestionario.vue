<template>
  <VCard
    title="Add word"
  >
    <VCardText>
      <VForm
        @submit.prevent="procesarFormulario"
        ref="formulario"
      >
        <label>Word:</label>
        <VTextField 
          v-model="campos.palabra"
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
        <label>Type:</label>
        <VSelect 
          v-model="campos.tipo"
          :rules="reglas.campoObligatorio"
          :items="['noun','adjetive','verbs','simple answer']"
          class="mt-2"
        />
        <VRow class="mt-5">
          <VSpacer />
          <VCol cols="auto">
            <VBtn 
              text="Save"
              type="submit"
            />
          </VCol>
        </VRow>
      </VForm>
    </VCardText>
  </VCard>
</template>

<script setup lang="ts">
import type { VForm } from 'vuetify/components';

const emit = defineEmits(['procesarFormulario'])

const formulario = ref<VForm | null>(null)
const campos = reactive<{
  palabra: string
  definicion: string
  tipo: string | null
}>({
  palabra: '',
  definicion: '',
  tipo: null
})
const reglas = {
  campoObligatorio: [
    (v: string) => !!v || 'required!'
  ]
}

const procesarFormulario = async()=>{
  const {valid} = await formulario.value!.validate()
  if(!valid) return;
  emit('procesarFormulario',{
    ...campos,
    tipo: campos.tipo!
  })
}
</script>

<style scoped>

</style>