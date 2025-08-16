<template>
  <div class="py-4 mb-4 border-b border-gray-700 flex gap-4 items-center">
    <!-- Playlist Cover -->
    <div class="flex-shrink-0">
      <img
        :src="playlist.image || defaultPlaylistImage"
        alt="Playlist Cover"
        class="w-60 h-60 object-cover rounded"
      />
    </div>

    <!-- Playlist Info -->
    <div class="flex-1">
      <!-- Editable Name -->
      <div class="flex items-center gap-2">
        <!-- Input mode -->
        <div v-if="editingName" class="relative w-full">
          <input
            ref="nameInputRef"
            v-model="playlist.name"
            @keydown="handleKeydown"
            @blur="saveName"
            class="bg-transparent border-b border-gray-500 text-3xl font-bold outline-none w-full pr-12"
          />
          <!-- Icons aligned with text -->
          <div class="absolute right-0 top-1/2 -translate-y-1/2 flex gap-2">
            <button @click="saveName" class="text-green-500 hover:text-green-700">
              <i class="fas fa-check fa-lg"></i>
            </button>
            <button @click="cancelEditing" class="text-red-500 hover:text-red-700">
              <i class="fas fa-times fa-lg"></i>
            </button>
          </div>
        </div>

        <!-- View mode -->
        <h2
          v-else
          class="text-3xl font-bold cursor-pointer align-middle flex items-center gap-3"
          @click="startEditing"
        >
          {{ playlist.name }}
          <!-- Pencil icon -->
          <i
            class="fas fa-pencil-alt text-gray-400 text-lg opacity-50 hover:opacity-100 transition-opacity"
          ></i>
        </h2>
      </div>

      <!-- Creator -->
      <p class="text-gray-400">By {{ playlist.creator }}</p>

      <!-- Action Buttons -->
      <div class="flex gap-2 mt-3">
        <button class="px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded">Share</button>
        <button class="px-3 py-1 bg-green-600 hover:bg-green-500 rounded">Add Trivia</button>
        <button class="px-3 py-1 bg-red-600 hover:bg-red-500 rounded">Delete</button>
        <button class="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded" @click="togglePublic">
          {{ playlist.isPublic ? 'Public' : 'Private' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import defaultPlaylistImage from '@/assets/images/DefaultPlaylistImage.png'

const editingName = ref(false)
const nameInputRef = ref(null)
let originalName = ''

function startEditing() {
  originalName = playlist.value.name
  editingName.value = true
  nextTick(() => {
    nameInputRef.value.focus()
    nameInputRef.value.select()
  })
}

function saveName() {
  editingName.value = false
  // Backend save logic here if needed
}

function cancelEditing() {
  playlist.value.name = originalName
  editingName.value = false
}

function handleKeydown(e) {
  if (e.key === 'Enter') saveName()
  if (e.key === 'Escape') cancelEditing()
}

const playlist = ref({
  name: 'New Playlist',
  creator: 'Josh Roberts',
  image: '',
  isPublic: true,
})

function togglePublic() {
  playlist.value.isPublic = !playlist.value.isPublic
  // TODO: save public/private state to backend
}
</script>
