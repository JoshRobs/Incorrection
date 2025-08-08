<template>
  <div class="px-6 py-8 space-y-10">
    <SectionRow
      title="Recently Played"
      :items="recentlyPlayed"
      moreLink="/search?type=playlists&filter=recent"
    />

    <SectionRow
      title="Your Favourites"
      :items="favourites"
      moreLink="/search?type=playlists&filter=favourites"
    />

    <SectionRow
      title="Trending"
      :items="trending"
      moreLink="/search?type=playlists&filter=trending"
    />

    <div v-for="category in categories" :key="category.slug">
      <SectionRow
        :title="category.name"
        :items="category.playlists"
        :moreLink="`/search?type=playlists&category=${category.slug}`"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SectionRow from '@/components/SectionRow.vue'

const recentlyPlayed = ref([])
const favourites = ref([])
const trending = ref([])
const categories = ref([])

onMounted(async () => {
  // Mocked data — replace with real API calls
  recentlyPlayed.value = await fetchRecentlyPlayed()
  favourites.value = await fetchFavourites()
  trending.value = await fetchTrending()
  categories.value = await fetchPlaylistCategories()
})

async function fetchRecentlyPlayed() {
  return [
    { id: 1, title: 'Nostalgia Hits', topic: '2000s' },
    { id: 2, title: 'Studio Ghibli Trivia', topic: 'Anime' },
  ]
}

async function fetchFavourites() {
  return [
    { id: 3, title: 'Fantasy Realms', topic: 'Fantasy' },
    { id: 4, title: 'Marvel Showdown', topic: 'Comics' },
  ]
}

async function fetchTrending() {
  return [
    { id: 5, title: 'Legendary TV', topic: 'TV Shows' },
    { id: 6, title: 'Epic Books Quiz', topic: 'Books' },
  ]
}

async function fetchPlaylistCategories() {
  return [
    {
      name: 'Anime',
      slug: 'anime',
      playlists: [
        { id: 7, title: 'Naruto vs Bleach', topic: 'Anime' },
        { id: 8, title: 'Sailor Moon Stars', topic: 'Anime' },
      ],
    },
    {
      name: 'Books',
      slug: 'books',
      playlists: [
        { id: 9, title: 'Harry Potter Facts', topic: 'Books' },
        { id: 10, title: 'Literary Legends', topic: 'Books' },
      ],
    },
    // Add more categories here...
  ]
}
</script>

<style scoped></style>
