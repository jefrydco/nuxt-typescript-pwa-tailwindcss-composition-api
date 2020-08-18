import { shallowMount } from '@vue/test-utils'
import DefaultLayout from '~/layouts/default.vue'

describe('default layout', () => {
  it('renders to snapshot', () => {
    expect.assertions(1)
    const wrapper = shallowMount(DefaultLayout)
    expect(wrapper).toMatchInlineSnapshot(`
      <main class="container mx-auto px-4 lg:px-8 pt-4">
        <app-appear-disappear-stub></app-appear-disappear-stub>
        <app-links-stub items="[object Object],[object Object]"></app-links-stub>
        <div class="flex flex-wrap relative">
          <nuxt-stub class="w-full lg:w-4/5"></nuxt-stub>
        </div>
        <app-switch-theme-stub></app-switch-theme-stub>
      </main>
    `)
  })
})
