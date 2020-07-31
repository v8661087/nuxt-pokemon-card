import colors from "vuetify/es5/util/colors";
import fs from "fs";
import path from "path";

const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/nuxt-pokemon-card/"
        }
      }
    : {};
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "nuxt-pokemon-card"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      {
        rel: "preconnect",
        href: "https://v8661087.github.io/nuxt-pokemon-card/pokemon"
      }
    ],
    meta: [
      { name: "google-signin-scope", content: "profile email" },
      {
        name: "google-signin-client_id",
        content:
          "386926783789-jf64i4b80rd3dsks4h3f12aegr097mfd.apps.googleusercontent.com"
      }
    ],
    script: [
      {
        src: "https://apis.google.com/js/platform.js",
        defer: true,
        async: true,
        crossorigin: "anonymous"
      },
      {
        src:
          "https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v7.0&appId=2903396656422404&autoLogAppEvents=1",
        defer: true,
        async: true,
        crossorigin: "anonymous",
        nonce: "9WEpcLMM"
      }
    ]
  },
  server: {
    port: 5500, // default: 3000
    host: "localhost", // default: localhost,
    timing: false,
    https: {
      key: fs.readFileSync(
        path.resolve("C:/Users/fa", "example.com+5-key.pem")
      ),
      cert: fs.readFileSync(path.resolve("C:/Users/fa", "example.com+5.pem"))
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "rgb(4, 153, 153)",
    height: "3px"
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/axios.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    ["@nuxtjs/dotenv", { filename: ".env" }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: { https: true },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  ...routerBase
};
