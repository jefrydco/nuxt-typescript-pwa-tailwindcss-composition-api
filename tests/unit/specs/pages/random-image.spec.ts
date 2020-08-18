import { shallowMount } from '@vue/test-utils'
import RandomImagePage from '~/pages/random-image.vue'

describe('random image page', () => {
  it('renders to snapshot', () => {
    expect.assertions(1)
    const wrapper = shallowMount(RandomImagePage)
    expect(wrapper).toMatchInlineSnapshot(
      `<div><img src="https://source.unsplash.com/random/500x400" alt="Random Image" width="500" height="400" class="img__random rounded shadow-lg"></div>`
    )
  })
})
