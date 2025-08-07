<template>
  <div class="px-6 py-8 space-y-10">
    <!-- Browse Categories -->
    <section v-if="!isSearching">
      <h2 class="text-xl font-semibold mb-4 text-white">Browse Categories</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <RouterLink
          v-for="cat in categories"
          :key="cat.slug"
          :to="`/category/${cat.slug}`"
          class="rounded-md p-4 bg-gradient-to-br from-indigo-500 to-purple-600 hover:scale-105 transition transform text-white font-bold text-center"
        >
          {{ cat.name }}
        </RouterLink>
      </div>
    </section>

    <!-- Search Results -->
    <section v-if="isSearching">
      <div v-if="loading" class="text-white text-center">Loading...</div>

      <div v-else>
        <h2 class="text-xl font-semibold mb-4 text-white">Results for "{{ query }}"</h2>

        <!-- Tabs -->
        <div class="flex gap-4 text-white border-b border-gray-600 mb-4">
          <button
            v-for="tab in ['all', 'playlists', 'trivia']"
            :key="tab"
            @click="activeTab = tab"
            :class="[
              'py-2 px-4 capitalize',
              activeTab === tab ? 'border-b-2 border-white font-semibold' : 'text-gray-400',
            ]"
          >
            {{ tab }}
          </button>
        </div>

        <!-- Playlists -->
        <div v-if="activeTab === 'all' || activeTab === 'playlists'">
          <h3 class="text-lg font-medium text-white mb-2">Playlists</h3>
          <div
            v-if="playlists.length"
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6"
          >
            <div
              v-for="p in playlists"
              :key="p.id"
              class="bg-gray-700 rounded-md p-4 text-white hover:bg-gray-600 cursor-pointer"
            >
              <div class="font-semibold">{{ p.title }}</div>
              <div class="text-sm text-gray-300">{{ p.topic }}</div>
            </div>
          </div>
          <div v-else class="text-gray-400">No playlists found.</div>
        </div>

        <!-- Trivia Questions -->
        <div v-if="activeTab === 'all' || activeTab === 'trivia'">
          <h3 class="text-lg font-medium text-white mb-2">Trivia Questions</h3>
          <div v-if="trivia.length" class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="t in trivia" :key="t.id" class="bg-gray-700 rounded-md p-4 text-white">
              <p class="font-medium">{{ t.statement }}</p>
              <p class="text-sm text-gray-300">{{ t.work }}</p>
            </div>
          </div>
          <div v-else class="text-gray-400">No trivia questions found.</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const query = computed(() => route.query.q?.toString() || '')
const isSearching = computed(() => !!query.value)

const loading = ref(false)
const playlists = ref([])
const trivia = ref([])
const activeTab = ref('all')

const categories = [
  { name: 'Anime', slug: 'anime' },
  { name: 'Books', slug: 'books' },
  { name: 'Movies', slug: 'movies' },
  { name: 'TV Shows', slug: 'tv' },
  { name: '90s', slug: '90s' },
  { name: '2000s', slug: '2000s' },
  { name: 'Fantasy', slug: 'fantasy' },
  { name: 'Nintendo', slug: 'nintendo' },
  { name: 'Comics', slug: 'comics' },
  { name: 'Science', slug: 'science' },
]

watchEffect(async () => {
  if (!isSearching.value) return
  loading.value = true

  try {
    const res = await fetch(`/api/search?q=${encodeURIComponent(query.value)}`)
    const data = await res.json()
    playlists.value = data.playlists
    trivia.value = data.trivia
  } catch (err) {
    console.error('Search failed:', err)
  } finally {
    loading.value = false
  }
})
</script>
