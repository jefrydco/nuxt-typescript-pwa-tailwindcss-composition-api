import { shallowMount } from '@vue/test-utils'
import AppSwitchThemeComponent from '~/components/AppSwitchTheme.vue'

describe('app switch theme component', () => {
  it('renders to snapshot', () => {
    expect.assertions(1)
    const wrapper = shallowMount(AppSwitchThemeComponent)
    expect(wrapper).toMatchInlineSnapshot(`
      <div class="mt-10"><select class="block bg-transparent pl-2 pr-8 py-1 font-medium text-base focus:outline-none focus:text-gray-800">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select></div>
    `)
  })
})
