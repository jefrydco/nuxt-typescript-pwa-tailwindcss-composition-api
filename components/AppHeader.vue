<template>
  <div class="my-10">
    This is header that receive props and reversed it: {{ reversed }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'

export type AppHeaderProps = {
  name: string
}

export default defineComponent<AppHeaderProps>({
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const reversed = computed(() => props.name.split('').reverse().join(''))

    return {
      reversed
    }
  }
})
</script>
