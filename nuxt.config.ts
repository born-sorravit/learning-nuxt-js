import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxt/test-utils",
  ],
  app: {
    head: {
      title: "Nuxt", // default fallback title
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      meta: [{ name: "description", content: "Nuxt 3 Minimal Starter" }],
    },
  },
  typescript: {
    strict: false,
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/public/assets/css/main.css"],
  plugins: ["~/plugins/pinia.js"],
  vite: {
    plugins: [tailwindcss()],
  },
});
