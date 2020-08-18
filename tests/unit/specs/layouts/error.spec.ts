import { shallowMount } from '@vue/test-utils'
import ErrorLayout from '~/layouts/error.vue'

describe('error layout', () => {
  it('renders to snapshot', () => {
    expect.assertions(1)
    const wrapper = shallowMount(ErrorLayout)
    expect(wrapper).toMatchInlineSnapshot(`<div></div>`)
  })
})
