<template>
  <VContainer>
    <VRow style="height: 90vh;" justify="center" align="center">
      <VCol cols="9" md="7" lg="5">
        <VCard class="pa-5">
          <VCardTitle class="text-h4">Login</VCardTitle>
          <VCardText>
            <VForm
              @submit.prevent="procesarFormulario"
              :readonly="cargando"
            >
              <label>Email:</label>
              <VTextField 
                v-model="campos.email"
                type="email"
                class="mt-2"
                placeholder="Ingresa tu email"
                
              />
              <label>Password:</label>
              <VTextField 
                v-model="campos.password"
                label="Password"
                type="password"
                class="mt-2"
              />
              <VBtn 
                text="Ingresar"
                class="py-6"
                block
                type="submit"
                :loading="cargando"
              />
              <VBtn
                text="Crear cuenta"
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



const {data, signIn} = useAuth()
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
  })
  cargando.value = false
  if(data.value){
    navigateTo('/app/'+(data.value as SessionType).rol)
  }
}

onMounted(()=>{
})
</script>

<style scoped>

</style>