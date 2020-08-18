<template>
  <div>
    <img
      :src="randomUrl"
      alt="Random Image"
      width="500"
      height="400"
      class="img__random rounded shadow-lg"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onBeforeUnmount
} from '@nuxtjs/composition-api'

function getRandomImageUrl() {
  const randomUrlList = [
    'https://picsum.photos/500/400',
    'https://source.unsplash.com/random/500x400'
  ]
  return randomUrlList[~~(Math.random() * randomUrlList.length)]
}

export default defineComponent({
  setup() {
    const randomUrl = ref('')
    randomUrl.value =
      process.env.NODE_ENV !== 'test'
        ? getRandomImageUrl()
        : 'https://source.unsplash.com/random/500x400'
    let intervalId: unknown

    onMounted(() => {
      intervalId = setInterval(() => {
        randomUrl.value = getRandomImageUrl()
      }, 5000)
    })

    onBeforeUnmount(() => {
      clearInterval(intervalId as number)
    })

    return {
      randomUrl
    }
  },
  head() {
    return {
      title: 'Random Image'
    }
  }
})
</script>
