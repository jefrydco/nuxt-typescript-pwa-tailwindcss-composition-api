import { config, RouterLinkStub } from '@vue/test-utils'
import { Context as NuxtContext } from '@nuxt/types'

const mockNuxtContext: Partial<NuxtContext> = {
  redirect: jest.fn()
}

config.stubs = {
  nuxt: true,
  'no-ssr': true,
  'nuxt-link': RouterLinkStub
}

config.mocks = {
  $nuxt: {
    context: mockNuxtContext
  }
}
