import { defineStore } from 'pinia'
import api from '../utils/axios'
import { supabase } from '../utils/supabase'
import type { Category, Trivia, Visibility, Hint } from '@project/types'

export const useTriviaStore = defineStore('trivia', {
  state: () => ({
    trivia: {} as Record<number, Trivia>,
  }),

  getters: {},

  actions: {
    async fetchUserTrivia(userId: number) {
      const response = await api.get(`/api/trivia/${userId}`)
      this.trivia[userId] = response.data
      return response.data
    },

    async createTrivia(triviaData: {
      userId: number
      category: Category
      title: string
      incorrectStatement: string
      highlightStart: number
      highlightEnd: number
      correction: string
      visibility: Visibility
      tags: string[]
      comment: string
      hint: Hint | null
    }) {
      const token = (await supabase.auth.getSession()).data.session?.access_token

      const result = await api.post(
        '/api/trivia',
        {
          userId: triviaData.userId,
          category: triviaData.category,
          title: triviaData.title,
          incorrectStatement: triviaData.incorrectStatement,
          highlightStart: triviaData.highlightStart,
          highlightEnd: triviaData.highlightEnd,
          correction: triviaData.correction,
          visibility: triviaData.visibility,
          tags: triviaData.tags,
          comment: triviaData.comment,
          hint: triviaData.hint,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      this.trivia[triviaData.userId] = result.data
      console.log('Created Trivia', result.data)
      return result.data
    },
  },
})
