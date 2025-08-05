import { defineStore } from 'pinia'
import { supabase } from '../utils/supabase.js'
import type { User } from '@supabase/supabase-js'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
  }),

  getters: {
    isLoggedIn: (state) => !!state.user,
  },

  actions: {
    async fetchUser() {
      const { data } = await supabase.auth.getUser()
      this.user = data.user
    },

    async logout() {
      await supabase.auth.signOut()
      this.user = null
    },
  },
})
