<template>
  <VApp>
    <VAppBar>
      <VBtn
        @click="navigateTo('/')"
        to="/"
        variant="tonal"
      >Knoword EC</VBtn>
      <template v-if="usuario?.rol === Rol.Estudiante">
        <VBtn 
          to="/app/estudiante"
          text="Cuestionario"
          variant="text"
          class="ms-5"
        />
        <VBtn 
          to="/app/estudiante/diccionario"
          text="Diccionario"
          variant="text"
          class="mx-3"
        />
      </template>
      <template v-if="data" #append>
        <VBtn
          class="me-3"
          prepend-icon="mdi-account"
          color="dark"
          :text="(data as SessionType).nombre"
        />
        <VBtn 
          color="error"
          icon="mdi-logout"
          class="me-3"
          size="small"
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

<style>
.v-application{
  /* background-image: url('https://png.pngtree.com/background/20220727/original/pngtree-seamless-pattern-school-supplies-picture-image_1841808.jpg'); */
  background-image: url('https://marketplace.canva.com/EAFftOHllXc/1/0/1600w/canva-fondo-virtual-para-zoom-divertido-blanco-y-negro-pRsyK9xsZR0.jpg');
  /* filter: brightness(0.5); */
  background-size: auto;
}
</style>