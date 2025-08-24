import { defineStore } from 'pinia'
import api from '../utils/axios'
import type { Playlist, Visibility, Category } from '@project/types'
import { supabase } from '../utils/supabase'

interface PlaylistDTO extends Omit<Playlist, 'id' | 'updatedAt'> {
  creator: string
}

export const usePlaylistStore = defineStore('playlist', {
  state: () => ({
    playlists: {} as Record<number, PlaylistDTO>,
  }),

  getters: {},

  actions: {
    async fetchUserPlaylists(userId: number) {
      const response = await api.get(`/api/playlists/${userId}`)
      this.playlists = response.data
      return response.data
    },

    async createPlaylist(playlistData: {
      name: string
      description: string
      image: File
      visibility: Visibility
      mediaTags: Category[]
      userId: number
    }) {
      const token = (await supabase.auth.getSession()).data.session?.access_token
      let imageUrl = null
      // 1. Upload image first
      if (playlistData.image) {
        const path = `playlists/${playlistData.userId}/${crypto.randomUUID()}-${playlistData.image.name}`
        const { data, error } = await supabase.storage
          .from('playlist-images')
          .upload(path, playlistData.image)

        if (error) throw error

        // 2. Get public URL
        const { data: urlData } = supabase.storage.from('playlist-images').getPublicUrl(data.path)

        imageUrl = urlData.publicUrl
      }

      const result = await api.post(
        '/api/playlists',
        {
          name: playlistData.name,
          description: playlistData.description,
          imageUrl: imageUrl,
          visibility: playlistData.visibility,
          mediaTags: playlistData.mediaTags,
          userId: playlistData.userId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      this.playlists = result.data
      console.log('Created playlist', result.data)
      return result.data
    },
    async updatePlaylistName(playlistId: number, newName: string) {
      const token = (await supabase.auth.getSession()).data.session?.access_token

      await api.put(
        `/api/playlists/${playlistId}`,
        { name: newName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
    },
  },
})
