<template>
  <main class="container mx-auto px-4 lg:px-8 pt-4">
    <app-appear-disappear />
    <app-links :items="links" />
    <div class="flex flex-wrap relative">
      <nuxt class="w-full lg:w-4/5" />
    </div>
    <app-switch-theme />
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import AppAppearDisappear from '~/components/AppAppearDisappear.vue'
import AppLinks, { AppLinkItem } from '~/components/AppLinks.vue'
import AppSwitchTheme from '~/components/AppSwitchTheme.vue'

export default defineComponent({
  components: {
    AppAppearDisappear,
    AppLinks,
    AppSwitchTheme
  },
  setup() {
    const links = ref<AppLinkItem[]>([
      { to: '/', text: 'Home' },
      { to: '/random-image', text: 'Random Image' }
    ])
    return {
      links
    }
  },
  head() {
    return {
      bodyAttrs: {
        class:
          'antialiased text-gray-700 leading-normal bg-white dark:bg-gray-900 dark:text-gray-300'
      }
    }
  }
})
</script>
