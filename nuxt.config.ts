import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Pastikan modul ini sudah diinstal
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  pages: true,
  devtools: { enabled: true },

  vite: {
    assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'] // Pastikan format file ini sesuai dengan kebutuhan Anda
  },

  alias: {
    'images': '/img' // Pastikan path ini sesuai dengan struktur direktori Anda
  },

  app: {
    // Konfigurasi aplikasi tambahan bisa ditambahkan di sini
  },

  compatibilityDate: '2024-08-06',

})