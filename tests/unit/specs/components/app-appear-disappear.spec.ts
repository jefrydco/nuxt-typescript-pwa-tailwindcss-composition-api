import { shallowMount } from '@vue/test-utils'
import AppAppearDisappearComponent from '~/components/AppAppearDisappear.vue'

describe('app appear disappear component', () => {
  it('renders to snapshot', () => {
    expect.assertions(1)
    const wrapper = shallowMount(AppAppearDisappearComponent)
    expect(wrapper).toMatchInlineSnapshot(`
      <div class="mb-10">
        <p>
          Disappear in
          10
        </p>
        <blockquote><em>""</em> <small class="block">- </small></blockquote> <button class="mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Reset Timer
        </button>
      </div>
    `)
  })
})
