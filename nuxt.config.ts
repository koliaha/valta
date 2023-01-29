// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  router: {
    base: "/nuxt-github-pages/", // base: '/<repository>/'
  },
  build: {
    publicPath: "./",
  },
});
