// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules:[
    '@pinia/nuxt',
    '@sidebase/nuxt-auth',
    'nuxt-mongoose'
  ],
  imports:{
    dirs:['store']
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: ['vuetify']
  },
  runtimeConfig:{
    TOKEN_CHATGPT: process.env.TOKEN_CHATGPT,
    EMAIL_USER: process.env.EMAIL_USER, 
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD
  },
  auth:{
    baseURL: process.env.DOMAIN
  },
  mongoose:{
    uri: process.env.MONGO_URI,
    devtools: true
  }
})
