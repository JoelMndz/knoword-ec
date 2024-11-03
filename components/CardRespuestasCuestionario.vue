<template>
  <VCard
    :title="`Resultados - ${cuestionario.nombre}`"
  >
    <VCardText>
      <VDataTable
        :headers="cabecera"
        no-data-text="No hay datos"
        :items="resultados"
      >
        <template #item.estudiante="{item}">
          {{ item._estudiante.nombre }}
        </template>
        <template #item.fecha="{item}">
          {{ new Date(item.createdAt).toLocaleDateString() }}
        </template>
        <template #item.aciertos="{item}">
          {{ item.respuestas.filter(x => x.correcta).length}} / {{ item.respuestas.length }}
        </template>
        <template #item.tiempo="{item}">
          {{ formatearTiempo(moment((moment(item.fin).diff(moment(item.inicio)))).seconds()) }}
        </template>
        
      </VDataTable>
    </VCardText>
  </VCard>
</template>

<script setup lang="ts">
import moment from 'moment';


interface IResultado{
  _estudiante: {
    nombre: string
    email: string
  }
  inicio: string
  fin: string
  respuestas: {
      _palabra: string
      correcta: boolean
    }[]
  createdAt: string
}

const {cuestionario} = defineProps({
  cuestionario: {
    type: Object as ()=> ICuestionario,
    required: true
  }
})
const resultados = ref<IResultado[]>([])
const cabecera = [
  {title:'Estudiante', key: 'estudiante'},
  {title:'Fecha', key: 'fecha'},
  {title:'Aciertos', key: 'aciertos'},
  {title:'Tiempo', key: 'tiempo'},
]

onMounted(async()=>{
  resultados.value = await $fetch('/api/juego/resultados/'+cuestionario._id)
})
</script>

<style scoped>

</style>