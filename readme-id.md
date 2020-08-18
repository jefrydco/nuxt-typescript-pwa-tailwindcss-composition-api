# Nuxt Typescript PWA TailwindCSS Composition API

[![Netlify Status](https://api.netlify.com/api/v1/badges/b739d022-860a-4c43-a681-1bde9600ec51/deploy-status)](https://app.netlify.com/sites/nuxt-typescript-pwa-tailwindcss-composition-api/deploys)
[![CircleCI Build Status](https://badgen.net/circleci/github/jefrydco/nuxt-typescript-pwa-tailwindcss-composition-api/master)](https://circleci.com/gh/jefrydco/nuxt-typescript-pwa-tailwindcss-composition-api)
[![Azure Build Status](https://dev.azure.com/jefrydco/jefrydco/_apis/build/status/jefrydco.nuxt-typescript-pwa-tailwindcss-composition-api?branchName=master)](https://dev.azure.com/jefrydco/jefrydco/_build/latest?definitionId=5&branchName=master)
[![Coverage Status](https://badgen.net/codecov/c/github/jefrydco/nuxt-typescript-pwa-tailwindcss-composition-api/master)](https://codecov.io/gh/jefrydco/nuxt-typescript-pwa-tailwindcss-composition-api)

> Proyek awalan untuk Nuxt.js + Typescript + PWA + TailwindCSS + Composition API

**⚠️ Perlu diketahui bahwa proyek awalan ini berisi fitur eksperimental _Composition API_ yang mungkin tidak stabil atau berubah di kemudian hari**

## Bahasa

Baca deskripsi ini di bahasa lain:

- [English](./readme.md)

## Fitur

Proyek awalan ini menyertakan beberapa modul resmi Nuxt.js berikut:

- [Http](https://github.com/nuxt/http)
- [Google Analytics](https://github.com/nuxt-community/analytics-module)
- [PWA](https://github.com/nuxt-community/pwa-module)
- [Sentry](https://github.com/nuxt-community/sentry-module)
- [Nuxt TailwindCSS](https://tailwindcss.nuxtjs.org/)
- [Color Mode](https://github.com/nuxt-community/color-mode-module)
- [Nuxt Composition API](https://composition-api.nuxtjs.org/)

juga diperkaya dengan kerangka kerja antarmuka Vue terbaik berikut:

- [Tailwind CSS](https://tailwindcss.com/)
- [VeeValidate](https://logaretm.github.io/vee-validate)

dan untuk pengalaman pengembang terbaik, juga menyertakan:

- [Nuxt Typed Vuex](https://nuxt-typed-vuex.roe.dev/)

## Persiapan

```bash
# memasang dependensi
$ yarn # Atau npm install

# menjalankan dengan _hot reload_ di localhost:3000
$ yarn dev

# _build_ untuk produksi dan meluncurkan peladen
$ yarn build
$ yarn start

# _generate_ untuk proyek statis
$ yarn generate

# Menjalankan tes unit
$ yarn test

# Menjalankan tes E2E
$ yarn dev
$ yarn test:e2e
```

## Sentry dan _Google Analytics_

Untuk mengaktifkan Sentry dan _Google Analytics_:

1. Ganti nama `.env.example` menjadi `.env`
2. Ubah konfigurasi DSN Sentry dan identitas pelacak _Google Analytics_ pada berkas `.env`
3. Hapus komentar pada kode konfigurasi pada berkas `nuxt.config.ts`

## Informasi Lebih Lanjut

Untuk informasi lebih lanjut, silahkan cek dokumentasi resmi [Nuxt.js](https://id.nuxtjs.org/) dan [Tailwind CSS](https://tailwindcss.com/).

## Lisensi

[Lisensi MIT](./license.md)

Hak Cipta (c) Jefry Dewangga ([@jefrydco](https://jefrydco.id))