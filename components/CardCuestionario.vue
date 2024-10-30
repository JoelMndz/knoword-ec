<template>
  <VCard
    class="text-white"
    color="primary"
    @click="$emit('ejecutarAccion')"
  >
    <VImg
      src="/libro.png"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
      max-height="250"
      cover
    >
      <VCardText>
        <div class="container">
          <h1 class="text-h4 text-start">
            {{ cuestionario?.nombre }}
          </h1>
          <div class="menu" v-if="$slots.opcionesMenu">
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
          </div>
        </div>
        <VFab 
          :text="`${cuestionario?.palabras.length} terms`"
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
        :text="cuestionario?._profesor.nombre[0]"
        color="white"
        class="text-overline ms-1"
        size="25"
      /> 
      {{ cuestionario?._profesor.nombre }}
    </VCardActions>
  </VCard>
</template>

<script setup lang="ts">

defineEmits(['ejecutarAccion'])

defineProps({
  cuestionario:{
    type: Object as ()=> ICuestionario,
    required: true
  },
})
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu {
  position: absolute;
  top: -10%;
  right: -5%;
}
</style>