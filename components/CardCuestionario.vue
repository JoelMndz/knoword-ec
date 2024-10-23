<template>
  <VCard
    class="text-white"
    color="primary"
  >
    <VImg
      src="../libro.png"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
      max-height="250"
      cover
    >
      <VCardText>
        <VRow>
          <VCol>
            <h1 class="text-h4">
              {{ cuestionario?.nombre }}
            </h1>
          </VCol>
          <VCol cols="auto" v-if="$slots.opcionesMenu">
            <v-menu>
              <template v-slot:activator="{ props }">
                <VBtn
                  v-bind="props"
                  icon="mdi-dots-horizontal"
                  class="rounded-circle"
                  size="small"
                />
              </template>
              <v-list>
                <slot name="opcionesMenu">
                </slot>
              </v-list>
            </v-menu>
          </VCol>
        </VRow>
        <VFab 
          :text="`${cuestionario?.palabras.length}`"
          size="small"
          location="bottom end"
          absolute
          app
          class="pa-10 text-red"
        />
      </VCardText>
    </VImg>
    <VCardActions>
      <VAvatar 
        :text="cuestionario._profesor.nombre[0]"
        color="white"
        class="text-overline ms-1"
        size="25"
      /> 
      {{ cuestionario._profesor.nombre }}
    </VCardActions>
  </VCard>
</template>

<script setup lang="ts">

defineProps({
  cuestionario:{
    type: Object as ()=> ICuestionario,
    required: true
  },
})
</script>

<style scoped>

</style>