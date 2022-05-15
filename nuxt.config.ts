import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [],
      script: [],
    },
  },
  typescript: {
    strict: true,
  },
  build: {
    loaders: {
      sass: {},
      scss: {},
    },
  },
});
