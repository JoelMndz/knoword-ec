<template>
  <VAlert
    title="Error"
    :text="texto"
    color="error"
    variant="tonal"
  />
</template>

<script setup lang="ts">
defineProps(['texto'])
</script>

<style scoped>

</style>