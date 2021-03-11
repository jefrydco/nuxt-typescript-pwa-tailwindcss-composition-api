import { NuxtOptions } from '@nuxt/types'
import DotEnv from 'dotenv'

DotEnv.config()

export default {
  // https://nuxtjs.org/guides/configuration-glossary/configuration-target
  target: 'static',

  // https://nuxtjs.org/guides/configuration-glossary/configuration-head
  head: {
    titleTemplate(pageTitle) {
      if (pageTitle) {
        return `${pageTitle} - Nuxt Typescript PWA TailwindCSS Composition API`
      }
      return 'Nuxt Typescript PWA TailwindCSS Composition API'
    }
  },

  // https://nuxtjs.org/guides/configuration-glossary/configuration-plugins
  plugins: [],

  // https://nuxtjs.org/guides/configuration-glossary/configuration-css
  css: ['~/assets/styles/app'],

  // https://nuxtjs.org/guides/configuration-glossary/configuration-modules
  modules: [
    // https://http.nuxtjs.org/
    '@nuxt/http',

    // https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',

    // https://github.com/nuxt-community/modules/tree/master/packages/browserconfig
    '@nuxtjs/browserconfig'

    // TODO: Uncomment this line to use sentry and google analytics
    // // https://github.com/nuxt-community/sentry-module
    // '@nuxtjs/sentry',

    // // https://github.com/nuxt-community/analytics-module
    // [
    //   '@nuxtjs/google-analytics',
    //   {
    //     // TODO: Change this id to your Google Analytics ID
    //     id: process.env.GOOGLE_ANALYTICS
    //   }
    // ]
  ],

  // https://nuxtjs.org/guides/configuration-glossary/configuration-modules#buildmodules
  buildModules: [
    // https://typescript.nuxtjs.org/guide/setup.html#installation
    '@nuxt/typescript-build',

    // https://composition-api.nuxtjs.org/
    '@nuxtjs/composition-api',

    // https://nuxt-typed-vuex.roe.dev/
    'nuxt-typed-vuex',

    // https://tailwindcss.nuxtjs.org/
    '@nuxtjs/tailwindcss',

    // https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',

    // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',

    // https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode'
  ],

  // https://typescript.nuxtjs.org/guide/lint.html
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,vue}'
      }
    }
  },

  // https://github.com/nuxt-community/eslint-module
  eslint: {
    fix: true
  },

  // https://github.com/nuxt-community/stylelint-module
  stylelint: {
    fix: true
  },

  // https://tailwindcss.nuxtjs.org/
  tailwindcss: {
    viewer: false
  },

  // https://pwa.nuxtjs.org
  pwa: {
    // https://pwa.nuxtjs.org/modules/meta.html
    meta: {
      name: 'Nuxt Typescript PWA TailwindCSS Composition API',
      description: 'Nuxt Typescript PWA TailwindCSS Composition API Starter',
      lang: 'id',
      ogHost:
        'https://nuxt-typescript-pwa-tailwindcss-composition-api-starter.netlify.app',
      twitterCard: 'summary_large_image',
      twitterSite: '@jefrydco',
      twitterCreator: '@jefrydco'
    },

    // https://pwa.nuxtjs.org/modules/manifest.html
    manifest: {
      name: 'Nuxt Typescript PWA TailwindCSS Composition API',
      short_name: 'Nuxt Typescript PWA TailwindCSS Composition API',
      description: 'Nuxt Typescript PWA TailwindCSS Composition API Starter',
      lang: 'id',
      theme_color: '#4299E1'
    },

    // https://pwa.nuxtjs.org/modules/workbox.html
    workbox: {
      offlineAnalytics: true,
      runtimeCaching: [
        {
          urlPattern: 'https://ajax.cloudflare.com/.*',
          handler: 'staleWhileRevalidate'
        },
        {
          urlPattern: 'https://fonts.gstatic.com/.*',
          handler: 'staleWhileRevalidate'
        },
        {
          urlPattern: 'https://www.google.com/.*',
          handler: 'staleWhileRevalidate'
        },
        {
          urlPattern: 'https://www.gstatic.com/.*',
          handler: 'staleWhileRevalidate'
        }
      ]
    }
  },

  browserconfig: {
    TileColor: '#4299E1'
  },

  // https://nuxtjs.org/guides/configuration-glossary/configuration-generate
  generate: {
    // choose to suit your project
    interval: 3000
  },

  // https://nuxtjs.org/api/configuration-build
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {}
      }
    },
    transpile: [/typed-vuex/, 'vee-validate/dist/rules']
  }
} as Partial<NuxtOptions>
