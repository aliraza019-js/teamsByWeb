import { defineStore } from 'pinia'

const defaultState = {
  isLoggedIn: false,
  email: undefined,
  accessToken: undefined,
  uid: undefined
}

export const useUsersStore = defineStore('user', {
  state: () => ({ ...defaultState }),
  getters: {
    status: state => state.isLoggedIn
  },
  actions: {
    reset() {
      Object.assign(this, defaultState)
    },
    setUser(user) {
      this.isLoggedIn = true
      this.email = user.email
      this.accessToken = user.accessToken,
        this.uid = user.uid
    }
  }
})