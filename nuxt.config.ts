import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'], // Pastikan modul ini sudah diinstal
  pages: true,
  devtools: { enabled: true },
  plugins: ['~/plugins/my-plugin'],
  vite: {
    assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'] // Pastikan format file ini sesuai dengan kebutuhan Anda
  },
  alias: {
    'images': '/img' // Pastikan path ini sesuai dengan struktur direktori Anda
  },
  app: {
    // Konfigurasi aplikasi tambahan bisa ditambahkan di sini
  }
})
