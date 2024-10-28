<template>
  <VContainer>
    <h2 class="text-h5">Cuestionarios disponibles</h2>
    <VRow class="mt-5">
      <VCol cols="6" sm="4" md="3"v-for="i in (data as ICuestionario[])">
        <CardCuestionario
          :cuestionario="i"
          @ejecutar-accion="navigateTo('/app/estudiante/juego/'+i._id)"
        >

        </CardCuestionario>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">

const {data} = await useFetch('/api/cuestionario')

</script>

<style scoped>

</style>