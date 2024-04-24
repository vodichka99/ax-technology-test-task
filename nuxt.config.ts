// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  devtools: { enabled: false },
  typescript: {
    typeCheck: true
  },
  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  },
  css: ['~/assets/css/main.css'],
  components: true,
  modules: ["@nuxt/ui"]
})