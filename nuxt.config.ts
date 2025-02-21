// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  plugins: [{ src: '~/plugins/vue-scroll-reveal.client.js', mode: 'client' }],
  devtools: { enabled: false },
  server: {
    port: 3000, // Define the port for your app
  },
});
