import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex'

export type isDisplayPayload = {
  isDisplay: boolean
}

export const state = () => ({
  isDisplay: false
})

export const getters = getterTree(state, {
  getDisplay(state) {
    return state.isDisplay
  }
})

export const mutations = mutationTree(state, {
  SHOW(state) {
    state.isDisplay = true
  },
  HIDE(state) {
    state.isDisplay = false
  }
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async show() {
      await this.app.$accessor.sidebar.SHOW()
    },
    async hide() {
      await this.app.$accessor.sidebar.HIDE()
    }
  }
)
