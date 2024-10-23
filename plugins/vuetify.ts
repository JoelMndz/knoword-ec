import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    theme: {
      themes:{
        light:{
          dark: false,
          colors:{
            primary:'#4F36E8',
            "on-primary":'#fff',
            secondary:'#FF5818',
            background: '#fff',
          }
        }
      },
    },
    defaults:{
      VTextField:{
        density:"comfortable",
        variant:"solo-filled",
      },
      VTextArea:{
        density:"comfortable",
        variant:"solo-filled",
      },
      VSelect:{
        density:"comfortable",
        variant:"solo-filled",
      },
      VBtn:{
        color:'primary',
        class: 'rounded-lg'
      },
      VCard:{
        class: "rounded-lg"
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})