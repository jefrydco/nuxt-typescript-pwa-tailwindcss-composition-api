import { shallowMount } from '@vue/test-utils'
import AppInputComponent from '~/components/AppInput.vue'

describe('app input component', () => {
  it('renders to snapshot', () => {
    expect.assertions(1)
    const wrapper = shallowMount(AppInputComponent)
    expect(wrapper).toMatchInlineSnapshot(
      `<div><label for="input" class="block mb-3">Input</label> <input id="input" type="text" class="block w-full pl-3 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-transparent text-gray-700 dark:text-white dark-focus:text-white focus:border-gray-300 dark-focus:border-gray-700 rounded-md focus:outline-none focus:bg-white dark-focus:bg-gray-900 bg-gray-200 dark:bg-gray-800"> <span class="block mt-3 text-red-500 dark:text-red-400"></span></div>`
    )
  })
})
