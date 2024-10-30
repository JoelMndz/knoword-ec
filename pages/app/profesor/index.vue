<template>
  <VContainer>
    <h1 class="text-h3 text-center">Cuestionarios</h1>
    <VRow class="mt-5">
      <VCol cols="auto">
        <VBtn 
          icon="mdi-plus"
          to="/app/profesor/cuestionario/nuevo"
        />
      </VCol>
      <VCol>
        <VTextField 
          prepend-inner-icon="mdi-magnify"
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="6" sm="4" md="3" v-for="i in cuestionarios">
        <CardCuestionario 
          :cuestionario="i"
        >
          <template #opcionesMenu>
            <v-list-item 
              link 
              :to="`/app/profesor/cuestionario/detalle/${i._id}`">
              <v-list-item-title>Ver detalle</v-list-item-title>
            </v-list-item>
          </template>
        </CardCuestionario>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">
import { useCuestionarioProfesorStore } from '~/store/profesor/cuestionario';


const cuestionarioStore = useCuestionarioProfesorStore()
const {cuestionarios} = storeToRefs(cuestionarioStore)

await cuestionarioStore.obtenerCuestionarios()

</script>

<style scoped>

</style>