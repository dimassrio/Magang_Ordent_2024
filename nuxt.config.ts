import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'], // Pastikan modul ini sudah diinstal
  compatibilityDate: '2024-04-03', // Pastikan ini sesuai dengan versi Nuxt Anda
  pages: true,
  devtools: { enabled: true },
  vite: {
    assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'] // Pastikan format file ini sesuai dengan kebutuhan Anda
  },
  app: {
    // Konfigurasi aplikasi tambahan bisa ditambahkan di sini
  },
  alias: {
    'images': '/img', // Pastikan path ini sesuai dengan struktur direktori Anda
    '#app': '<path_to_nuxt_components>' // Added alias for #app
  }
})