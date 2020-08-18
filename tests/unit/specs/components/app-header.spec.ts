import { shallowMount } from '@vue/test-utils'
import AppHeaderComponent from '~/components/AppHeader.vue'

describe('app header component', () => {
  it('renders to snapshot', () => {
    expect.assertions(1)
    const wrapper = shallowMount(AppHeaderComponent)
    expect(wrapper).toMatchInlineSnapshot(`
      <div class="my-10">
        This is header that receive props and reversed it:
      </div>
    `)
  })
})
