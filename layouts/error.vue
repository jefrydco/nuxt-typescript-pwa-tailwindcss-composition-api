<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { redirect } = useContext()
    redirect('/')
  },
  render(h) {
    return h('div')
  }
})
</script>
