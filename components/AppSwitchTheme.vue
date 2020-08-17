<template>
  <div class="mt-10">
    <select
      v-model="$colorMode.preference"
      class="block bg-transparent pl-2 pr-8 py-1 font-medium text-base focus:outline-none focus:text-gray-800"
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>
