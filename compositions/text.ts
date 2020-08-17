import { watch, ref } from '@nuxtjs/composition-api'
import { Accessor } from '~/@types/store'

export function useText($accessor: Accessor) {
  const text = ref('')

  watch(
    () => $accessor.user.name,
    (userName) => {
      text.value = userName
    },
    {
      immediate: true
    }
  )

  return {
    text
  }
}
