<template>
  <div class="flex mb-10">
    <nuxt-link
      v-for="item in items"
      :key="item.to"
      :to="item.to"
      class="mr-3 px-2 rounded font-medium py-1 hover:text-green-500 flex items-center justify-between"
      exact-active-class="text-green-500 bg-green-100 hover:text-green-500 dark:bg-green-900"
    >
      {{ item.text }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export type AppLinkItem = {
  to: string
  text: string
}

export type AppLinksProps = {
  items: AppLinkItem[]
}

export default defineComponent<AppLinksProps>({
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup() {}
})
</script>
