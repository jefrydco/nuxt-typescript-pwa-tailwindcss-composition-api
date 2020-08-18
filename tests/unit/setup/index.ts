import { config } from '@vue/test-utils'
import { Context as NuxtContext } from '@nuxt/types'

const mockNuxtContext: Partial<NuxtContext> = {
  redirect: jest.fn()
}

config.mocks = {
  $nuxt: {
    context: mockNuxtContext
  }
}
