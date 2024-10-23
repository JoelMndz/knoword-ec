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
  auth:{
    baseURL: process.env.DOMAIN,   
  },
  mongoose:{
    uri: process.env.MONGO_URI,
    devtools: true
  }
})
