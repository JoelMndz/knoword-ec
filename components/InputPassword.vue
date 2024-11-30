<template>
  <VTextField 
    :type="mostrarPassword ? 'text':'password'"
    v-model="model"
  >
    <template #append-inner>
      <VIcon 
        :icon="mostrarPassword ? 'mdi-eye-off':'mdi-eye'" 
        @click="mostrarPassword=!mostrarPassword"
      />
    </template>
  </VTextField>
</template>

<script setup lang="ts">
const model = defineModel('model',{
  required: true
})

const mostrarPassword = ref(false)

</script>

<style scoped>

</style>