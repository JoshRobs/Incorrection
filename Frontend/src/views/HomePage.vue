<template>
  <div class="text-white flex flex-col">
    <main class="flex-grow flex flex-col items-center justify-center text-center px-4">
      <h1 class="text-4xl font-bold mb-8 text-amber-400">Welcome to Incorrection</h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        <ModeCard
          to="/play"
          title="Single Player"
          description="Play at your own pace and test your knowledge against incorrect trivia."
          icon="🧠"
        />

        <ModeCard
          title="Multiplayer"
          description="Challenge your friends or host a game session together."
          disabledMessage="Coming Soon"
          icon="🎉"
          disabled
        />
        <ModeCard
          to="/library"
          title="Library"
          description="Create new trivia questions and playlists for you and others to enjoy."
          icon=""
        />
        <ModeCard
          to="/discover"
          title="Discover"
          description="Discover new trivia playlists created by the community."
          icon=""
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import ModeCard from '@/components/ModeCard.vue'
</script>
