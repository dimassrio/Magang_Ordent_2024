import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Pastikan modul ini sudah diinstal
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  pages: true,
  devtools: { enabled: true },
  vite: {
    assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'] 
  },

  alias: {
    'images': '/img' 
  },

  app: {

  },

  compatibilityDate: '2024-08-06',
  routeRules: {
    '/**': { cache: false }
  }
})