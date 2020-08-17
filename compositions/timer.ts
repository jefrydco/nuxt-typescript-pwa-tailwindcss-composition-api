import { onMounted, ref, watch } from '@nuxtjs/composition-api'
import { Accessor } from '~/@types/store'

export function useTimer($accessor: Accessor, callback: Function) {
  const timer = ref(10000)
  const millisecond = 1000
  let intervalDisappearId: unknown
  let intervalAppearId: unknown

  function initAppear() {
    timer.value = 10000
    intervalAppearId = setInterval(() => {
      timer.value -= millisecond
      if (timer.value === 0) {
        $accessor.sidebar.show()
        clearInterval(intervalAppearId as number)
        initDisappear()
      }
    }, millisecond)
  }

  function initDisappear() {
    timer.value = 10000
    $accessor.sidebar.show()
    intervalDisappearId = setInterval(() => {
      timer.value -= millisecond
      if (timer.value === 0) {
        $accessor.sidebar.hide()
        clearInterval(intervalDisappearId as number)
        callback()
        initAppear()
      }
    }, millisecond)
  }

  onMounted(() => {
    initDisappear()
  })

  watch(timer, (newTimer, oldTimer) => {
    console.log({ newTimer, oldTimer })
  })

  function reset() {
    timer.value = 10000
    if (intervalAppearId) {
      clearInterval(intervalAppearId as number)
    }
    if (intervalDisappearId) {
      clearInterval(intervalDisappearId as number)
    }
    initDisappear()
  }

  return {
    timer,
    reset
  }
}
