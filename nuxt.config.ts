// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  devtools: { enabled: false },
  ssr: true,
  app: {
    buildAssetsDir: 'nuxt',
  },
  ui: {
    icons: ['mdi', 'fluent', 'solar', 'ri', 'heroicons'],
  },
})
