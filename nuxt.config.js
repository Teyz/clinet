import { defineNuxtConfig } from "nuxt";
const path = require("path");

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  plugins: ["vue3-slide-up-down"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/_global.scss";',
        },
      },
    },
  },
  modules: ["@vueuse/nuxt", "@intlify/nuxt3"],
  buildModules: [
    // ...
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `usePinia()`
          "defineStore",
          // automatically imports `usePinia()` as `usePiniaStore()`
          ["defineStore", "definePiniaStore"],
        ],
      },
    ],
  ],
  intlify: {
    localeDir: "lang",
    vueI18n: {
      locale: "fr",
      availableLocales: ["en", "fr"],
    },
  },
  css: ["@/assets/style/reset.scss"],
  resolve: {
    alias: [
      {
        find: /^@\/(.+)/,
        replacement: path.resolve(__dirname, "src") + "/$1",
      },
    ],
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      },
    },
  },
  app: {
    head: {
      title: "Château Clinet | Pomerol",
      htmlAttrs: {
        lang: "fr,en",
      },
      meta: [
        {
          name: "title",
          lang: "fr",
          content: "Château Clinet | Pomerol",
        },
        {
          name: "title",
          lang: "en",
          content: "Château Clinet | Pomerol",
        },
        {
          name: "description",
          lang: "fr",
          content:
            "Le Château Clinet est l’un des domaines les plus prestigieux de la région viticole de Pomerol, parmi les plus belles parcelles de ce célèbre plateau.",
        },
        {
          name: "description",
          lang: "en",
          content:
            "Château Clinet is one of the most prestigious estates of the Pomerol wine region, set amongst the finest parcels of this well-known plateau.",
        },
        {
          name: "format-detection",
          content: "telephone=no",
        },
        {
          property: "og:image",
          content: "http://localhost:3000/static/ronan.png",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://ronan-by-clinet.netlify.app/",
        },
        { hid: "t-type", name: "twitter:card", content: "summary_large_image" },
        {
          hid: "t-type",
          name: "twitter:url",
          content: "https://ronan-by-clinet.netlify.app/",
        },
        {
          hid: "t-type",
          name: "twitter:title",
          content: "Ronan by Clinet | Bordeaux AOC Wines",
        },
        {
          hid: "t-type",
          name: "twitter:description",
          content:
            "Ronan by Clinet is a new Bordeaux wine that balanced seduction with precision, produce by Château Clinet, an historic Grand Cru, in partnership with conscientious growers.",
        },
        {
          hid: "t-type",
          name: "twitter:image",
          content: "http://localhost:3000/static/ronan.png",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/static/favicon.ico" },
      ],
    },
  },
});
