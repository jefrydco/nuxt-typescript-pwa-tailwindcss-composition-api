import { shallowMount } from '@vue/test-utils'
import AppLinksComponent from '~/components/AppLinks.vue'

describe('app links component', () => {
  it('renders to snapshot', () => {
    expect.assertions(1)
    const wrapper = shallowMount(AppLinksComponent)
    expect(wrapper).toMatchInlineSnapshot(`<div class="flex mb-10"></div>`)
  })
})
