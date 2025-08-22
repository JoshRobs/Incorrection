import { defineStore } from 'pinia'
import api from '../utils/axios'
import type { Playlist, PlaylistStatus, Category } from '@project/types'
import { supabase } from '../utils/supabase'

export const usePlaylistStore = defineStore('playlist', {
  state: () => ({
    playlists: {} as Record<number, Playlist>,
  }),

  getters: {},

  actions: {
    async fetchUserPlaylists(userId: number) {
      const response = await api.get(`/api/playlists/${userId}`)
      return response.data
    },
    async createPlaylist(playlistData: {
      name: string
      description: string
      image: File
      status: PlaylistStatus
      mediaTags: Category[]
      userId: number
    }) {
      const token = (await supabase.auth.getSession()).data.session?.access_token

      // 1. Upload image first
      const path = `playlists/${playlistData.userId}/${crypto.randomUUID()}-${playlistData.image.name}`
      const { data, error } = await supabase.storage
        .from('playlist-images')
        .upload(path, playlistData.image)

      if (error) throw error

      // 2. Get public URL
      const { data: urlData } = supabase.storage.from('playlist-images').getPublicUrl(data.path)

      const imageUrl = urlData.publicUrl

      await api.post(
        '/api/playlists',
        {
          name: playlistData.name,
          description: playlistData.description,
          imageUrl: imageUrl,
          status: playlistData.status,
          mediaTags: playlistData.mediaTags,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
    },
  },
})
