<template>
  <VApp>
    <VAppBar
      :color="usuario?.rol === Rol.Profesor ? 'primary' : undefined"
    >
      <VBtn
        @click="navigateTo('/')"
        class="text-h5"
        variant="text"
        :color="usuario?.rol === Rol.Profesor ? 'onPrimary' : 'black'"
      >Learning Words</VBtn>
      <template v-if="usuario?.rol === Rol.Estudiante">
        <VBtn 
          @click="navigateTo('/app/estudiante')"
          text="Packs"
          variant="text"
          color="black"
        />
        <VBtn 
          @click="navigateTo('/app/estudiante/diccionario')"
          text="Dictionary"
          variant="text"
          class="mx-3"
          color="black"
        />
        <VBtn 
          @click="navigateTo('/app/estudiante/juego-oraciones')"
          text="Sentences"
          variant="text"
          class="mx-3"
          color="black"
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
          variant="elevated"/>
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