import { config, RouterLinkStub } from '@vue/test-utils'
import {
  mockNuxtColorMode,
  mockNuxtContext,
  mockNuxtHttp,
  mockAccessor
} from '~/tests/unit/mocks'

config.stubs = {
  nuxt: true,
  'no-ssr': true,
  'nuxt-link': RouterLinkStub
}

config.mocks = {
  $accessor: mockAccessor,
  $colorMode: mockNuxtColorMode,
  $nuxt: {
    context: {
      ...mockNuxtContext,
      $http: mockNuxtHttp,
      app: {
        $accessor: mockAccessor
      }
    }
  }
}
