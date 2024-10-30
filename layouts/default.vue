<template>
  <VApp>
    <VAppBar>
      <template #title>
        <VBtn
          @click="navigateTo('/')"
          to="/"
          variant="text"
        >Knoword EC</VBtn>
      </template>
      <template v-if="usuario?.rol === Rol.Estudiante">
        <VBtn 
          to="/app/estudiante"
          text="Cuestionario"
          variant="text"
        />
        <VBtn 
          to="/app/estudiante/diccionario"
          text="Diccionario"
          variant="text"
          class="mx-3"
        />
      </template>
      <template #append>
        <VBtn 
          v-if="data"
          color="error"
          class="me-3"
          text="Salir"
          @click="signOut()"
          variant="tonal"/>
      </template>
    </VAppBar>
    <VMain>
      <slot></slot>
    </VMain>
  </VApp>
</template>

<script setup lang="ts">
import { VApp } from 'vuetify/components';
import type { SessionType } from '~/server/api/auth/[...]';
import { Rol } from '~/server/constants';

const {signOut, data} = useAuth()
const usuario:any= computed(() => data.value)
</script>

<style scoped>

</style>