<template>
  <VCard>
    <VCardTitle>Change Password</VCardTitle>
    <VCardText>
      <VForm
        ref="formulario"
        :readonly="cargando"
        @submit.prevent="procesarFormulario"
      >
        <InputPassword 
          v-model:model="campos.password"
          label="New Password"
          :rules="[
            (v:string) => !!v || 'required', 
            (v:string) => v.length >= 8 || 'Min 8 characters'
          ]"
        />
        <InputPassword 
          v-model:model="campos.passwordConfirm"
          label="Confirm Password"
          :rules="[
            (v:string) => v === campos.password || 'Password not equal'
          ]"
        />
        <VBtn 
          text="Guardar"
          type="submit"
          :loading="cargando"
          block
        />
        <VBtn 
          text="Cancelar"
          color="error"
          class="mt-3"
          block
          :readonly="cargando"
          @click="cerrarFormulario()"
        />
      </VForm>
    </VCardText>
  </VCard>
</template>

<script setup lang="ts">
import type { VForm } from 'vuetify/components'


const props = defineProps({
  cerrarFormulario: {
    type: Function,
    required: true
  }
})
const formulario = ref<VForm | null>(null)
const cargando = ref(false)
const campos = reactive({
  password: '',
  passwordConfirm: ''
})
const {data} = useAuth()
const usuario= computed(() => data.value)

const procesarFormulario = async()=>{
  const {valid} = await formulario.value!.validate()
  if(!valid) return;
  cargando.value = true
  console.log((data.value as any)?._id, campos.password);
  const {error} = await useFetch('/api/autenticacion/change-password',{
    method: 'POST',
    body:{
      _id: (data.value as any)?._id,
      password: campos.password
    }
  })
  props.cerrarFormulario()
  cargando.value = false
}
</script>

<style scoped>

</style>