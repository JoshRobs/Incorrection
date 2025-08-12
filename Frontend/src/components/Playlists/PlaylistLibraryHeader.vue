<template>
  <div class="p-4 border-b border-gray-700 flex gap-4 items-center">
    <!-- Playlist Cover -->
    <div class="flex-shrink-0">
      <img
        :src="playlist.image || 'https://via.placeholder.com/100x100?text=🎵'"
        alt="Playlist Cover"
        class="w-24 h-24 object-cover rounded"
      />
    </div>

    <!-- Playlist Info -->
    <div class="flex-1">
      <!-- Editable Name -->
      <input
        v-if="editingName"
        v-model="playlist.name"
        @blur="saveName"
        class="bg-transparent border-b border-gray-500 text-2xl font-bold outline-none w-full"
      />
      <h2
        v-else
        class="text-2xl font-bold cursor-pointer"
        @click="startEditing"
      >
        {{ playlist.name }}
      </h2>

      <!-- Creator -->
      <p class="text-gray-400">By {{ playlist.creator }}</p>

      <!-- Action Buttons -->
      <div class="flex gap-2 mt-3">
        <button class="px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded">Share</button>
        <button class="px-3 py-1 bg-green-600 hover:bg-green-500 rounded">Add Trivia</button>
        <button class="px-3 py-1 bg-red-600 hover:bg-red-500 rounded">Delete</button>
        <button
          class="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded"
          @click="togglePublic"
        >
          {{ playlist.isPublic ? 'Public' : 'Private' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const editingName = ref(false)
const playlist = ref({
  name: 'New Playlist',
  creator: 'Josh Roberts',
  image: '',
  isPublic: true
})

function startEditing() {
  editingName.value = true
}
function saveName() {
  editingName.value = false
  // TODO: save playlist name to backend
}
function togglePublic() {
  playlist.value.isPublic = !playlist.value.isPublic
  // TODO: save public/private state to backend
}
</script>