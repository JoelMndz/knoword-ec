<template>
  <VContainer>
    <h2 class="text-h3 text-center">{{ cuestionario.nombre }}</h2>
    <VRow class="mt-5">
      <VCol>
        <VTextField 
          v-model.trim="filtro"
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
          Add word
        </VBtn>
      </VCol>
    </VRow>
    <VRow>
      <TransitionGroup name="palabras">
        <VCol 
          v-if="cuestionario.palabras.length > 0"
          v-for="(i, indice) in cuestionario.palabras.filter(x => x.palabra.toLocaleLowerCase().includes(filtro.toLocaleLowerCase()))"
          cols="12"
          :key="indice">
          <VCard 
            :title="i.palabra"
            :subtitle="i.definicion"
          >
            <template #append>
              <VDialog>
                <template #activator="{props}">
                  <VBtn 
                    v-bind="props"
                    icon="mdi-delete"
                    variant="text"
                    color="error"
                  />
                </template>
                <template #default="{isActive}">
                  <VCard
                    title="Delete word"
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
                        @click="eliminarPalabra(indice,i, isActive.value)"
                        variant="tonal"
                      />
                    </VCardActions>
                  </VCard>
                </template>
              </VDialog>
            </template>
          </VCard>
        </VCol>
        <VCol v-else>
          <p>No questions</p>
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
const filtro = ref('')

const agregarPalabra = async (palabra:{palabra:string, definicion: string, tipo: string})=>{
  mostrarFormularioPalabra.value = false
  cuestionario.value.palabras.push(palabra)
  const respuesta:ICuestionario = await $fetch('/api/cuestionario/palabra',{
    method:'POST',
    body: {
      ...palabra,
      _cuestionario: cuestionario.value!._id
    }
  })
  cuestionario.value.palabras = respuesta?.palabras
}

const eliminarPalabra = async(indice: number,i: {_id?: string}, isActive:boolean)=>{
  isActive = false
  cuestionario.value.palabras = cuestionario.value.palabras.filter((x,index) => x._id && x._id !== i._id || index !== indice)
  if(i._id)
    await $fetch('/api/cuestionario/palabra/eliminar',{
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