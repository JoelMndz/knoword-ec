<template>
  <VContainer class="centerDiv">
    <VCard
      elevation="5"
      class="pa-5">
        <VCardTitle class="text-center text-h4">Recovery password</VCardTitle>
        
        <v-form 
          ref="form"
          @submit.prevent="handleSubmit"
          fast-fail>
          <v-text-field
            class="mt-3"
            variant="outlined"
            v-model="dataForm.email"
            type="email"
            label="Email"
            :rules="rules.email"
            required
            />
            <VRow justify="end" class="mb-2 me-2">
                <NuxtLink to="/">Go to login</NuxtLink>
              </VRow>
            <v-btn
              type="submit"
              variant="tonal"
              class="mt-4"
              color="primary"
              width="400"
              :loading="loading"
              >Restore</v-btn
            >
        </v-form>
      </VCard>
  </VContainer>
</template>

<script setup lang="ts">
import { VForm } from 'vuetify/lib/components/index.mjs';

const form = ref<VForm |null>(null);
const dataForm = reactive({
  email: ""
})
const loading = ref(false);
const rules = {
  email: [
    (value: any) => !!value || "Emais is required!",
    (value: any) => /.+@.+\..+/.test(value) || "Format invalid!"
  ],
}

const handleSubmit = async ()=>{
  loading.value = true;
  const {data, error} = await useFetch('/api/autenticacion/recovery',{method:'POST',body: dataForm})
  if(data.value){
    alert('The new password was sent to the email')
    navigateTo('/')
  }else{
    alert('Email not found!')
  }
  loading.value = false
}
</script>

<style scoped>
.centerDiv {
  display: grid;
  place-items: center;
  height: 80vh;
}
</style>