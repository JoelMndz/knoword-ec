<template>
  <VContainer>
    <template v-if="estado === EstadosJuegoRapido.Pendiente">
      <VRow style="height: 90vh;" justify="center" align="center">
        <VCol cols="8" lg="5">
          <VCard 
            class="py-10"
            variant="tonal"
            @click="generarOracionesConIA()">
            <p class="text-md-h2 text-center text-h3 mb-2">Comenzar juego</p>
          </VCard>
        </VCol>
      </VRow>
    </template>
    <template v-else-if="estado === EstadosJuegoRapido.Progreso">
      <VRow justify="center">
        <VCol cols="12" sm="10" md="9" lg="8">
          <VCard 
            v-if="palabrasPorCompletar.length"
            class="px-5 py-3"  
          >
            <VCardTitle>
              <VRow align="center">
                <VCol>
                  Completa las oraciones
                </VCol>
                <VSpacer />
                <VCol cols="auto">
                  <VBtn 
                    class="puntaje"
                    :text="`${puntaje} PTS`"
                    color="green"
                    variant="tonal"
                  />
                </VCol>
              </VRow>
            </VCardTitle>
            <VDivider 
              class="mb-3"
            />
            <VCardText>
              <template v-for="(i, indice) in oraciones">
                <p class="d-flex mb-2" style="font-size: 18px;">
                  {{ indice+1 }}.
                  <template v-for="(palabra, posicion) in i.split(' ')">
                    <template v-if="palabrasPorCompletar.find(x => x.indiceOracion===indice)!.posicion == posicion">
                      <input 
                        :style="{display:'inline', width: `120px`, height: '25px', border: '1px solid'}"
                        class="px-2 mx-2"
                        @dragover.prevent
                        @drop="soltarPalabraEnLaCasilla(indice)"
                        :value="respuestas[indice]?.palabra"
                        disabled
                        type="text">
                    </template>
                    <template v-else>
                      {{ `${palabra} ` }}
                    </template>
                  </template>
                </p>
              </template>
            </VCardText>
            <VDivider />
            <VCardActions>
              <VRow>
                <VCol>
                  <VChip 
                    tag="buttom"
                    v-for="(i, indice) in palabrasPorCompletar"
                    :key="i.indiceOracion"
                    style="cursor: pointer;"
                    :text="i.palabra.replace('.','')"
                    variant="tonal"
                    color="primary"
                    class="ma-2 text-body-1"
                    :class="respuestas.find(x => x?.indiceOracion === i.indiceOracion) ? 'text-decoration-line-through':undefined"
                    :draggable="!respuestas.find(x => x?.indiceOracion === i.indiceOracion)"
                    @dragstart="empezarArrastrarPalabra(i)"
                  />
                </VCol>
              </VRow>
            </VCardActions>
            <VFab 
              app
              appear
              color="error"
              position="relative"
              location="bottom left"
              text="Terminar Juego"
              @click="juegoOracionesStore.terminarJuego()"
            />
          </VCard>
        </VCol>
      </VRow>
    </template>
  </VContainer>

  <VDialog
    :model-value="cargandoOraciones"
    persistent
    max-width="450"
  >
    <VList
      elevation="5"
    >
      <VListItem
        prepend-icon="mdi-robot-happy-outline"
        title="Generando Oraciones..."
      />
    </VList>
  </VDialog>

  <VDialog
    :model-value="estado === EstadosJuegoRapido.Perdio"
    persistent
    max-width="350"
  >
    <VCard>
      <VCardTitle>
        Perdiste
      </VCardTitle>
      <VCardText>
        Lograste {{ puntaje }} puntos!
      </VCardText>
      <VCardActions>
        <VBtn 
          variant="tonal"
          color="error"
          text="Cerrar"
          @click="juegoOracionesStore.terminarJuego()"
        />
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup lang="ts">
import type { IPalabraPorCompletar } from '~/store/juegoOraciones';


const juegoOracionesStore = useJuegoOracionesStore()
const {oraciones, palabrasPorCompletar, puntaje, estado, respuestas, cargandoOraciones} = storeToRefs(juegoOracionesStore)
const palabraArrastrada = ref<IPalabraPorCompletar|null>(null)

const generarOracionesConIA = async()=>{
  await juegoOracionesStore.generarOracionesConIA()
}

const empezarArrastrarPalabra = (palabra:IPalabraPorCompletar)=>{
  palabraArrastrada.value = {...palabra, palabra:palabra.palabra.replace('.','')}
}

const soltarPalabraEnLaCasilla = (indiceOracion: number)=>{
  juegoOracionesStore.agregarRespuesta(indiceOracion, {...palabraArrastrada.value!})
  palabraArrastrada.value = null
}

</script>

<style scoped>

</style>