<template>
  <VContainer>
    <VRow style="height: 90vh;" justify="center" align="center">
      <VCol cols="9" md="7" lg="5">
        <VCard class="pa-5">
          <VCardTitle class="text-h4">Create account</VCardTitle>
          <VCardText>
            <VForm
              ref="formulario"
              @submit.prevent="procesarFormulario"
              :readonly="cargando"
              >
              <ErrorAlert
                v-if="error"
                :texto="error"
                class="mb-3"
              />
              <label>Name:</label>
              <VTextField 
                v-model.trim="campos.nombre"
                type="text"
                class="mt-2"
                :rules="reglas.nombre"
                placeholder="Enter your name"
              />
              <label>Email:</label>
              <VTextField 
                v-model.trim="campos.email"
                type="email"
                class="mt-2"
                :rules="reglas.email"
                placeholder="Enter your email"
              />
              <label>Password:</label>
              <InputPassword 
                v-model:model.trim="campos.password"
                class="mt-2"
                placeholder="Enter your email"
                :rules="reglas.password"
              />
              <label>I am a:</label>
              <VSelect 
                v-model="campos.rol"
                :items="[{value:Rol.Estudiante,label:'Student'},{value:Rol.Profesor,label:'Teacher'}]"
                class="mt-2"
                item-title="label"
                item-value="value"
              />
              <VBtn 
                text="Sign up"
                class="py-6"
                block
                type="submit"
                :loading="cargando"
              />
              <VBtn
                text="Already have an account?"
                to="/"
                block
                class="mt-3"
                variant="outlined"
              />
            </VForm>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">
import type { VForm } from 'vuetify/components';
import { Rol } from '~/server/constants';

const formulario = ref<VForm | null>(null)
const error = ref<string|null>(null)
const campos = reactive({
  nombre: '',
  email: '',
  password: '',
  rol: Rol.Estudiante
})
const cargando = ref(false)
const reglas = {
  nombre: [
    (v: string) => v.length >= 4 || 'Minimum 4 characters'
  ],
  email: [
    (v: string) => /.+@.+\..+/.test(v) || 'The email is not in the correct format!'
  ],
  password: [
    (v: string) => v.length >= 8 || 'Minimum 8 characters'
  ]
}


const procesarFormulario = async()=>{
  const {valid} = await formulario.value!.validate()
  if(!valid) return;
  cargando.value = true
  const respuesta = await useFetch('/api/autenticacion/registro',{
    method:'POST',
    body: campos
  })
  cargando.value = false
  if(respuesta.error.value){
    error.value = respuesta.error.value.statusMessage as string
  }else{
    navigateTo('/')
  }
}
</script>

<style scoped>

</style>