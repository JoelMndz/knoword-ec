<template>
  <VContainer>
    <VRow style="height: 90vh;" justify="center" align="center">
      <VCol cols="9" md="7" lg="5">
        <VCard class="pa-5" elevation="5">
          <VCardText>
            <VImg 
              class="mx-auto"
              src="/logoUnesumPrincipal.jpg"
              cover
              width="200"
              />
            <p class="text-h4 mb-2">Login</p>
            <VForm
              @submit.prevent="procesarFormulario"
              :readonly="cargando"
            >
              <ErrorAlert
                v-if="error"
                :texto="error"
                class="mb-3"
              />
              <label>Email:</label>
              <VTextField 
                v-model="campos.email"
                type="email"
                class="mt-2"
                placeholder="Enter your email"
                
              />
              <label>Password:</label>
              <InputPassword 
                v-model:model.trim="campos.password"
                class="mt-2"
                placeholder="Enter your password"
              />
              <VRow justify="end" class="mb-3">
                <NuxtLink to="/recuperarPassword">¿Olvidó su contraseña?</NuxtLink>
              </VRow>
              <VBtn 
                text="Login"
                class="py-6"
                block
                type="submit"
                :loading="cargando"
              />
              <VBtn
                text="Create account"
                to="/registro"
                block
                class="mt-3"
                variant="outlined"
                :readonly="cargando"
              />
            </VForm>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">
import type { SessionType } from '~/server/api/auth/[...]';

const {data, signIn, signOut} = useAuth()
const error = ref<string | null>(null)
const campos = reactive({
  email: '',
  password: ''
})
const cargando = ref(false)

const procesarFormulario = async()=>{
  cargando.value = true
  await signIn('credentials',{
    ...campos,
    redirect: false
  }).catch(()=>{
    console.log('ERROR');
    
  })
  cargando.value = false
  if(data.value){
    navigateTo('/app/'+(data.value as SessionType).rol)
  }else{
    error.value = 'Incorrect credentials!'
  }
}

</script>

<style scoped>

</style>