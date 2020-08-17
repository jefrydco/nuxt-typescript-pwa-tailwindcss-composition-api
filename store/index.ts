import {
  getAccessorType,
  getterTree,
  mutationTree,
  actionTree
} from 'nuxt-typed-vuex'
import * as sidebar from './sidebar'

export type UserPayload = {
  user: {
    name: string
    age: number
  }
}

export type TokenPayload = {
  token: string
}

export const state = () => ({
  user: {
    name: '',
    age: 0
  },
  token: ''
})

export const getters = getterTree(state, {
  getUserName(state) {
    return state.user.name
  },
  getUserAge(state) {
    return state.user.age
  }
})

export const mutations = mutationTree(state, {
  SET_USER(state, { user }: UserPayload) {
    state.user = user
  },
  RESET_USER(state) {
    state.user = {
      name: '',
      age: 0
    }
  },
  SET_TOKEN(state, { token }: TokenPayload) {
    state.token = token
  }
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async GET_USER() {
      await this.app.$accessor.SET_USER({
        user: {
          name: 'jefrydco',
          age: 22
        }
      })
    },
    async GET_TOKEN() {
      await this.app.$accessor.SET_TOKEN({
        token: 'lorem-ipsum'
      })
    }
  }
)

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    sidebar
  }
})
