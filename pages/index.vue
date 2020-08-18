<template>
  <div>
    <validation-observer>
      <validation-provider v-slot="{ errors }" name="Input" rules="required">
        <app-input v-model="text" :errors="errors" />
      </validation-provider>
    </validation-observer>
    <app-header :name="text" />
    <ol>
      <li>User: {{ $accessor.user.name }}</li>
      <li>Age: {{ $accessor.user.age }}</li>
    </ol>
    <div class="flex">
      <button
        class="btn__set mt-5 mr-5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        @click="$accessor.GET_USER"
      >
        Set User Store
      </button>
      <button
        class="btn__reset mt-5 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        @click="$accessor.RESET_USER"
      >
        Reset User Store
      </button>
    </div>
    <ul class="mt-10">
      <li>X: {{ coordinateX }}</li>
      <li>Y: {{ coordinateY }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import AppInput from '~/components/AppInput.vue'
import AppHeader from '~/components/AppHeader.vue'
import { useText, useMousePosition } from '~/compositions'

export default defineComponent({
  components: {
    ValidationObserver,
    ValidationProvider,
    AppInput,
    AppHeader
  },
  setup() {
    const {
      app: { $accessor }
    } = useContext()

    useAsync(() => $accessor.GET_USER(), 'get-user')

    const { text } = useText($accessor)

    const { x: coordinateX, y: coordinateY } = useMousePosition()

    extend('required', {
      ...required,
      message: '{_field_} is required'
    })

    return {
      coordinateX,
      coordinateY,
      text
    }
  },
  head() {
    return {
      title: 'Home'
    }
  }
})
</script>
