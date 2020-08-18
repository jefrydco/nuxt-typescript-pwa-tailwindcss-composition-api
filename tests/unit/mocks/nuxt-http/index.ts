import { NuxtHTTPInstance } from '@nuxt/http'

export const mockNuxtHttp: Partial<NuxtHTTPInstance> = {
  $get: jest.fn()
}
