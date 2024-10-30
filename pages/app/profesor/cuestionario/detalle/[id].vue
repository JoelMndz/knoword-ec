<template>
  <VContainer>
    <h2 class="text-h3 text-center">{{ cuestionario.nombre }}</h2>
    <VRow class="mt-5">
      <VCol>
        <VTextField 
          prepend-inner-icon="mdi-magnify"
          clearable
        />
      </VCol>
      <VCol cols="auto">
        <VBtn
          @click="mostrarFormularioPalabra=true"
        >
          <VIcon
            icon="mdi-plus"
          />
          Agregar palabra
        </VBtn>
      </VCol>
    </VRow>
    <VRow>
      <TransitionGroup name="palabras">
        <VCol 
          v-for="(i, indice) in cuestionario.palabras"
          cols="12"
          :key="indice">
          <VCard 
            :title="i.palabra"
            :subtitle="i.definicion"
          >
            <template #append>
              <VBtn 
                icon="mdi-delete"
                variant="text"
                color="error"
                @click="eliminarPalabra(i)"
              />
            </template>
          </VCard>
        </VCol>
      </TransitionGroup>
    </VRow>
    <VDialog
      max-width="600"
      v-model="mostrarFormularioPalabra"
    >
      <FormPalabraCuestionario 
        @procesar-formulario="agregarPalabra"
      />
    </VDialog>
  </VContainer>
</template>

<script setup lang="ts">

const {data} = await useFetch('/api/cuestionario/por-id/'+useRoute().params.id)
const cuestionario = ref<ICuestionario>(data.value as ICuestionario)
const mostrarFormularioPalabra = ref(false)

const agregarPalabra = (palabra:{palabra:string, definicion: string, tipo: string})=>{
  cuestionario.value.palabras.push(palabra)
  mostrarFormularioPalabra.value = false
}

const eliminarPalabra = async(i: {_id?: string})=>{
  cuestionario.value.palabras = cuestionario.value.palabras.filter((x) => x._id !== i._id)
  await useFetch('/api/cuestionario/palabra/eliminar',{
    method:'PUT',
    body:{
      _cuestionario: cuestionario.value._id,
      _palabra: i._id
    }
  })
}
</script>

<style scoped>
.palabras-enter-active,
.palabras-leave-active {
  transition: all 0.5s ease;
}
.palabras-enter-from,
.palabras-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>