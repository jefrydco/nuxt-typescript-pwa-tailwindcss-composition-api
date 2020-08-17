import { accessorType } from '~/store'

export type Accessor = typeof accessorType

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: Accessor
  }
}

declare module '@nuxt/types/app' {
  interface NuxtAppOptions {
    $accessor: Accessor
  }
}
