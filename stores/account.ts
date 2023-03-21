import { useUsersStore } from '~~/stores/users';
import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', {
  state: () => ({
    loading: false,
    fetchedData: {}
  }),
  getters: {
    isLoading: state => state.loading,
    account: state => state.fetchedData
  },
  actions: {
    async fetchData() {
      const res: any = await myFetch('/users', {
        method: 'GET'
      })
      this.fetchedData = res
    },
    updateFetchedData(obj: any) {
      this.fetchData = obj
    }
  }
})