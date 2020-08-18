import { Context } from '@nuxt/types'

export const mockNuxtContext: Partial<Context> = {
  redirect: jest.fn()
}
