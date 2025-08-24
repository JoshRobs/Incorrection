<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div class="bg-white w-full max-w-4xl rounded-2xl shadow-lg overflow-hidden flex flex-col">
      <!-- Header -->
      <div class="p-4 border-b flex justify-between items-center">
        <h2 class="text-xl font-semibold text-gray-600">Add Trivia to Playlist</h2>
        <button @click="$emit('close')" class="">✕</button>
      </div>

      <!-- Tabs -->
      <div class="border-b flex">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          :class="[
            'flex-1 py-2 text-center font-medium',
            activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500',
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Content Area -->
      <div class="flex-1 overflow-y-auto p-4">
        <!-- My Trivia -->
        <div v-if="activeTab === 'My Trivia'">
          <div class="flex gap-2 mb-4">
            <button class="px-3 py-1 rounded bg-blue-100 text-blue-700">Created</button>
            <button class="px-3 py-1 rounded bg-gray-100 text-gray-600">Favorited</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AddTriviaModalCard
              v-for="trivia in sampleTrivia"
              :key="trivia.id"
              :trivia="trivia"
              v-model:selected="selectedTrivia"
            />
          </div>
        </div>

        <!-- Search -->
        <div v-if="activeTab === 'Search'">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search trivia..."
            class="w-full mb-4 px-3 py-2 border rounded-lg"
          />
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AddTriviaModalCard
              v-for="trivia in sampleTrivia"
              :key="trivia.id"
              :trivia="trivia"
              v-model:selected="selectedTrivia"
            />
          </div>
        </div>

        <!-- From Playlists -->
        <div v-if="activeTab === 'Playlists'" class="flex gap-4">
          <!-- Playlist selector -->
          <div class="w-1/3 border-r pr-2">
            <ul class="space-y-2">
              <li
                v-for="pl in samplePlaylists"
                :key="pl.id"
                @click="selectedPlaylist = pl.id"
                :class="[
                  'cursor-pointer p-2 rounded',
                  selectedPlaylist === pl.id ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100',
                ]"
              >
                {{ pl.name }}
              </li>
            </ul>
          </div>
          <!-- Trivia in selected playlist -->
          <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            <AddTriviaModalCard
              v-for="trivia in sampleTrivia"
              :key="trivia.id"
              :trivia="trivia"
              v-model:selected="selectedTrivia"
            />
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="p-4 border-t flex justify-between">
        <button @click="$emit('close')" class="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
          Cancel
        </button>
        <button
          @click="addTrivia"
          class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          Add ({{ selectedTrivia.length }})
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AddTriviaModalCard from './AddTriviaModalCard.vue'

defineProps({
  open: Boolean,
  playlistId: Number,
})
const emit = defineEmits(['close', 'add'])

const tabs = ['My Trivia', 'Search', 'From Playlists']
const activeTab = ref('My Trivia')
const searchQuery = ref('')
const selectedTrivia = ref([])

const sampleTrivia = [
  {
    id: 1,
    incorrect: 'The sun is a planet.',
    correction: 'The sun is a star.',
    likes: 134,
    favorites: 67,
  },
  {
    id: 2,
    incorrect: 'Shakespeare wrote The Odyssey.',
    correction: 'It was written by Homer.',
    likes: 98,
    favorites: 23,
  },
]

const samplePlaylists = [
  { id: 101, name: 'Science Playlist' },
  { id: 102, name: 'History Playlist' },
]

const selectedPlaylist = ref(null)

function addTrivia() {
  emit('add', selectedTrivia.value)
  emit('close')
}
</script>
