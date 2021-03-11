<template>
  <div>
    <label for="input" class="block mb-3">Input</label>
    <input
      id="input"
      class="block w-full pl-3 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-transparent text-gray-700 dark:text-white dark-focus:text-white focus:border-gray-300 dark-focus:border-gray-700 rounded-md focus:outline-none focus:bg-white dark-focus:bg-gray-900 bg-gray-200 dark:bg-gray-800"
      type="text"
      :value="value"
      @input="onInput"
    />
    <span class="block mt-3 text-red-500 dark:text-red-400">{{
      errors[0]
    }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from '@nuxtjs/composition-api'

export type AppInputProps = {
  value: string
  errors: string[]
}

export default defineComponent<AppInputProps>({
  props: {
    value: {
      type: String,
      default: ''
    },
    errors: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup() {
    const vm = getCurrentInstance()

    function onInput(event: InputEvent) {
      vm?.emit('input', (event.target as HTMLInputElement).value)
    }

    return {
      onInput
    }
  }
})
</script>
