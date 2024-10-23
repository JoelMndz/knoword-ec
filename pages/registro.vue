<template>
  <VContainer>
    <VRow style="height: 90vh;" justify="center" align="center">
      <VCol cols="9" md="7" lg="5">
        <VCard class="pa-5">
          <VCardTitle class="text-h4">Crear cuenta</VCardTitle>
          <VCardText>
            <VForm
              ref="formulario"
              @submit.prevent="procesarFormulario"
              :readonly="cargando"
              >
              <label>Nombre:</label>
              <VTextField 
                v-model.trim="campos.nombre"
                type="text"
                class="mt-2"
                :rules="reglas.nombre"
                placeholder="Ingresa tu nombre"
              />
              <label>Email:</label>
              <VTextField 
                v-model.trim="campos.email"
                type="email"
                class="mt-2"
                :rules="reglas.email"
                placeholder="Ingresa tu email"
              />
              <label>Password:</label>
              <VTextField 
                v-model.trim="campos.password"
                label="Password"
                type="password"
                class="mt-2"
                :rules="reglas.password"
              />
              <label>Eres un:</label>
              <VSelect 
                v-model="campos.rol"
                :items="Object.values(Rol)"
                class="mt-2"
              />
              <VBtn 
                text="Registrarse"
                class="py-6"
                block
                type="submit"
                :loading="cargando"
              />
              <VBtn
                text="¿Ya tienes cuenta?"
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
const campos = reactive({
  nombre: '',
  email: '',
  password: '',
  rol: Rol.Estudiante
})
const cargando = ref(false)
const reglas = {
  nombre: [
    (v: string) => v.length >= 4 || 'Mínimo 4 caracteres'
  ],
  email: [
    (v: string) => /.+@.+\..+/.test(v) || 'El email no tiene el formato correcto!'
  ],
  password: [
    (v: string) => v.length >= 8 || 'Mínimo 8 caracteres'
  ]
}


const procesarFormulario = async()=>{
  const {valid} = await formulario.value!.validate()
  if(!valid) return;
  cargando.value = true
  const {data,error} = await useFetch('/api/autenticacion/registro',{
    method:'POST',
    body: campos
  })
  cargando.value = false
  navigateTo('/')
}
</script>

<style scoped>

</style>