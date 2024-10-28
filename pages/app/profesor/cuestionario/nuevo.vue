<template>
  <VContainer>
    <h1 class="text-center mb-4 text-h4">Crear cuestionario</h1>
    <VRow>
      <VSpacer />
      <VCol cols="auto">
        <VBtn 
          text="Cancelar"
          to="/app/profesor"
          color="error"
          :readonly="cargando"
          variant="tonal"
        />
      </VCol>
      <VCol cols="auto">
        <VBtn 
          text="Guardar cuestionario"
          :disabled="campos.palabras.length === 0 || !campos.nombre || !campos.categoria"
          :loading="cargando"
          @click="procesarFormulario"
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="8">
        <VTextField 
          label="Nombre"
          v-model="campos.nombre"
          :rules="campoRequerido"
        /> 
      </VCol>
      <VCol cols="4">
        <VSelect 
          label="Categoria"
          :items="['Arte 🎭']"
          v-model="campos.categoria"
          :rules="campoRequerido"
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol>
        <VTextField 
          prepend-inner-icon="mdi-magnify"
          clearable
        />
      </VCol>
      <VCol cols="auto">
        <VBtn
          :readonly="cargando"
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
          v-for="(i, indice) in campos.palabras"
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
                :readonly="cargando"
                @click="eliminarPalabra(indice)"
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
import type { SessionType } from '~/server/api/auth/[...]';
import { useCuestionarioProfesorStore } from '~/store/profesor/cuestionario';


interface IPalabra{
  palabra: string
  definicion: string
  tipo: string
}

const cuestionarStore = useCuestionarioProfesorStore()
const mostrarFormularioPalabra = ref(false)
const cargando = ref(false)
const campos = reactive<{
  nombre: string
  categoria: string | null
  palabras: IPalabra[]
}>({
  nombre: '',
  categoria: null,
  palabras: [
    {
      palabra: 'Test1',
      definicion:" es un trest?",
      tipo:"noun"
    }
  ]
})

const campoRequerido = [
  (v: string) => !!v || 'Campo requerido!'
]

const procesarFormulario = ()=>{
  cargando.value = true
  cuestionarStore.crearCuestionario({
    ...campos,
    _profesor: (useAuth().data.value as SessionType)._id! as any,
    categoria: campos.categoria!
  })
  cargando.value = false
}

const agregarPalabra = (palabra:{palabra:string, definicion: string, tipo: string})=>{
  campos.palabras.push(palabra)
  mostrarFormularioPalabra.value = false
}

const eliminarPalabra = (indice: number)=>{
  campos.palabras = campos.palabras.filter((i,index) => index !== indice)
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