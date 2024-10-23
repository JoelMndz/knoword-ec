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

const {signOut, data} = useAuth()

</script>

<style scoped>

</style>