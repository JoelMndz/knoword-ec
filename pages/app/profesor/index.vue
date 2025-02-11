<template>
  <VContainer>
    <h1 class="text-h3 text-center">Published questionnaries</h1>
    <VRow class="mt-5">
      <VCol cols="auto">
        <VBtn
          icon="mdi-plus"
          to="/app/profesor/cuestionario/nuevo"
        />
      </VCol>
      <VCol>
        <VTextField
          v-model="filtro"
          clearable
          prepend-inner-icon="mdi-magnify"
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="6" sm="4" md="3" 
        v-for="i in !filtro ? cuestionarios : cuestionarios.filter(x => x.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase()))">
        <CardCuestionario 
          :cuestionario="i"
        >
          <template #opcionesMenu>
            <v-list-item 
              link 
              :to="`/app/profesor/cuestionario/detalle/${i._id}`">
              <v-list-item-title>Details</v-list-item-title>
            </v-list-item>
            <VDialog
              max-width="650"
            >
              <template #activator="{props}">
                <v-list-item 
                  v-bind="props">
                  <v-list-item-title>Results</v-list-item-title>
                </v-list-item>
              </template>
              <CardRespuestasCuestionario 
                :cuestionario="i"
              />
            </VDialog>
            <VDialog
              max-width="450"
            >
              <template #activator="{props}">
                <v-list-item 
                  v-bind="props">
                  <v-list-item-title>Delete</v-list-item-title>
                </v-list-item>
              </template>
              <template #default={isActive}>
                <VCard
                  title="Delete pack"
                  :text="`Are you sure you want to delete?`"
                >
                  <VCardActions>

                    <VBtn 
                      text="Cancel"
                      color="error"
                      @click="isActive.value = false"
                      variant="tonal"
                    />
                    <VBtn 
                      text="Save"
                      @click="eliminarCuestionario(i._id!, isActive.value)"
                      variant="tonal"
                    />
                  </VCardActions>
                </VCard>
              </template>
            </VDialog>
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
const filtro = ref('')

const eliminarCuestionario = (id: string, active: boolean)=>{
  cuestionarioStore.eliminarCuestionario(id)
  active = false
}

await cuestionarioStore.obtenerCuestionarios()

</script>

<style scoped>

</style>