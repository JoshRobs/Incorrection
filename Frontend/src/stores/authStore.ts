import { defineStore } from 'pinia'
import { supabase } from '../utils/supabase'
import type { User } from '@supabase/supabase-js'
import { AppUser } from '@project/types'
import api from '../utils/axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    supabaseAuthUser: null as User | null,
    appUser: null as AppUser | null,
  }),

  getters: {
    isLoggedIn: (state) => !!state.supabaseAuthUser,
  },

  actions: {
    async initialize() {
      await this.fetchCurrentUser()
    },
    async fetchCurrentUser() {
      const token = (await supabase.auth.getSession()).data.session?.access_token

      // If no token, skip auth request or call backend with null
      if (!token) {
        this.supabaseAuthUser = null
        this.appUser = null
        console.log('No user signed in yet')
        return
      }

      const res = await api.get('/api/auth', {
        headers: { Authorization: `Bearer ${token}` },
      })

      this.supabaseAuthUser = res.data.supaUser // { supaUser, appUser }
      this.appUser = res.data.appUser
      console.log('Fetched current user')
    },

    async logout() {
      await supabase.auth.signOut()
      this.supabaseAuthUser = null
    },

    async CreateUser(email: string, password: string, displayName: string) {
      console.log('Signing up with', email)
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      })

      // Call your backend to create the AppUser
      if (error) {
        alert(error.message)
        return
      } else {
        const session = data.session
        if (!session) throw new Error('No session returned')

        const res = await api.post(
          '/api/auth',
          {
            email: email,
            supabaseAuthId: data.user?.id,
            displayName: displayName,
          },
          {
            headers: {
              Authorization: `Bearer ${session.access_token}`,
            },
          },
        )
        this.appUser = res.data
      }
    },
  },
})
