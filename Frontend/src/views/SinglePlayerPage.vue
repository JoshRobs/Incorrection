<template>
  <div class="w-full px-4 py-8">
    <BackButton />
    <h1 class="text-4xl font-bold mb-8 text-center text-amber-400">Single Player</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <ModeCard
        to="/play/random"
        title="Quick Play"
        description="Jump straight into a random trivia playlist."
        icon="🎲"
      />

      <ModeCard
        to="/play/playlists"
        title="Select Playlist"
        description="Choose a curated playlist from our community built library."
        icon="📚"
      />

      <ModeCard
        to="/play/trending"
        title="Trending"
        description="Play what’s hot in the community right now."
        icon="🔥"
      />

      <ModeCard
        to="/play/favorites"
        title="Favorites"
        description="Access playlists you've saved for later."
        icon="❤️"
        disabledMessage="Account required"
        :disabled="!auth.isLoggedIn"
      />
    </div>
  </div>
</template>

<script setup>
import ModeCard from '@/components/ModeCard.vue'
import BackButton from '@/components/BackButton.vue'
import { useAuthStore } from '@/stores/authStore'

const auth = useAuthStore()
</script>
