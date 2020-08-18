# Nuxt Typescript PWA Tailwind CSS Composition API Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/b739d022-860a-4c43-a681-1bde9600ec51/deploy-status)](https://app.netlify.com/sites/nuxt-typescript-pwa-tailwindcss-composition-api/deploys)
[![CircleCI Build Status](https://badgen.net/circleci/github/jefrydco/nuxt-typescript-pwa-tailwindcss-composition-api/master)](https://circleci.com/gh/jefrydco/nuxt-typescript-pwa-tailwindcss-composition-api)
[![Azure Build Status](https://dev.azure.com/jefrydco/jefrydco/_apis/build/status/jefrydco.nuxt-typescript-pwa-tailwindcss-composition-api?branchName=master)](https://dev.azure.com/jefrydco/jefrydco/_build/latest?definitionId=5&branchName=master)
[![Coverage Status](https://badgen.net/codecov/c/github/jefrydco/nuxt-typescript-pwa-tailwindcss-composition-api/master)](https://codecov.io/gh/jefrydco/nuxt-typescript-pwa-tailwindcss-composition-api)

> Nuxt.js + Typescript + PWA + Tailwind CSS + Composition API starter project

**⚠️ Please be aware that this starter project contains experimental composition API features that may subject unstable or changed in the future**

## Languages

Read this description in another languages:

- [Indonesian](./readme-id.md)

## Features

This starter project includes official Nuxt.js modules:

- [Http](https://github.com/nuxt/http)
- [Google Analytics](https://github.com/nuxt-community/analytics-module)
- [PWA](https://github.com/nuxt-community/pwa-module)
- [Sentry](https://github.com/nuxt-community/sentry-module)
- [Nuxt TailwindCSS](https://tailwindcss.nuxtjs.org/)
- [Color Mode](https://github.com/nuxt-community/color-mode-module)
- [Nuxt Composition API](https://composition-api.nuxtjs.org/)

It is also enriched with the best Vue's UI framework:

- [Tailwind CSS](https://tailwindcss.com/)
- [VeeValidate](https://logaretm.github.io/vee-validate)

and for the best typed experience, it also includes:

- [Nuxt Typed Vuex](https://nuxt-typed-vuex.roe.dev/)

## Setup

```bash
# install dependencies
$ yarn # Or npm install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# Run unit test
$ yarn test

# Run E2E test
$ yarn dev
$ yarn test:e2e
```

## Sentry and Google Analytics

To activate Sentry and Google Analytics:

1. Rename `.env.example` to `.env`
2. Change your Sentry DSN and Google Analytics tracking identity config in `.env` file
3. Uncomment the modules configuration code in `nuxt.config.ts`

## More Information

For detailed explanation on how things work, check out the [Nuxt.js](https://nuxtjs.org/) and [Tailwind CSS](https://tailwindcss.com/) documentation.

## License

[MIT License](./license.md)

Copyright (c) Jefry Dewangga ([@jefrydco](https://jefrydco.id))
