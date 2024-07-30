// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-04-03',
  pages: true,
  devtools: { enabled: true },
  vite: {
    assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif']
  },
  app: {
  },
  alias: {
    'images': '/img'
  }
})