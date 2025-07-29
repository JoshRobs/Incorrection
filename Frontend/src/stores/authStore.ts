import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | { id: string; name: string; email?: string },
  }),

  getters: {
    isLoggedIn: (state) => !!state.user,
  },

  actions: {
    login(userData: any) {
      this.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
    },

    logout() {
      this.user = null
      localStorage.removeItem('user')
    },

    loadUserFromStorage() {
      const data = localStorage.getItem('user')
      if (data) this.user = JSON.parse(data)
    },
  },
})
