<script lang="ts">
import { h, defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { redirect } = useContext()
    redirect('/')

    return h('div')
  }
})
</script>
