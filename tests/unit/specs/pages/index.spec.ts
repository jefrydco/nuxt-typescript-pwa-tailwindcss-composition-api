import { shallowMount } from '@vue/test-utils'
import IndexPage from '~/pages/index.vue'

describe('index page', () => {
  it('renders to snapshot', () => {
    expect.assertions(1)
    const wrapper = shallowMount(IndexPage)
    expect(wrapper).toMatchInlineSnapshot(`
      <div>
        <validation-observer-stub tag="span" vid="obs_0">
          <validation-provider-stub vid="" name="Input" mode="aggressive" rules="required" bails="true" skipifempty="true" debounce="0" tag="span" custommessages="[object Object]"></validation-provider-stub>
        </validation-observer-stub>
        <app-header-stub name="jefrydco"></app-header-stub>
        <ol>
          <li>User: jefrydco</li>
          <li>Age: 22</li>
        </ol>
        <div class="flex"><button class="btn__set mt-5 mr-5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Set User Store
          </button> <button class="btn__reset mt-5 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Reset User Store
          </button></div>
        <ul class="mt-10">
          <li>X: 0</li>
          <li>Y: 0</li>
        </ul>
      </div>
    `)
  })
  it('has a query params', () => {
    expect.assertions(1)
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.vm.$route.query).toStrictEqual({ q: 'hello-world' })
  })
})
