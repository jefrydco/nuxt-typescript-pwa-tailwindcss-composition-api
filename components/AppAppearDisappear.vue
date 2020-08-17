<template>
  <div class="mb-10">
    <p>
      {{ $accessor.sidebar.isDisplay ? 'Disappear' : 'Appear' }} in
      {{ timer / 1000 }}
    </p>
    <blockquote v-if="$accessor.sidebar.isDisplay">
      <em>"{{ quotes }}"</em>
      <small class="block">- {{ author }}</small>
    </blockquote>
    <p v-else>I've disappear</p>
    <button
      class="mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      @click="onReset"
    >
      Reset Timer
    </button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  useFetch,
  ref
} from '@nuxtjs/composition-api'
import { useTimer } from '~/compositions'

type ApiResponse = {
  _id: string
  en: string
  author: string
  id: string
}

export default defineComponent({
  setup() {
    const {
      $http,
      app: { $accessor }
    } = useContext()

    const quotes = ref('')
    const author = ref('')
    const { fetch } = useFetch(async () => {
      const memeResponse = await $http.$get<ApiResponse>(
        'https://programming-quotes-api.herokuapp.com/quotes/random'
      )
      quotes.value = memeResponse.en
      author.value = memeResponse.author
    })

    const { timer, reset } = useTimer($accessor, fetch)

    function onReset() {
      reset()
      fetch()
    }

    return {
      quotes,
      author,
      timer,
      onReset
    }
  }
})
</script>
