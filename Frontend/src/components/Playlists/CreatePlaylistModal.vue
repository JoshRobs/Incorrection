<!-- Modal with Transition -->
<template>
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="props.open"
      class="fixed inset-0 flex items-center justify-center z-50 bg-black/70 transition-opacity"
    >
      <div class="bg-gray-800 text-white rounded-lg shadow-lg w-full max-w-xl p-6">
        <h2 class="text-xl font-bold mb-4">Create Playlist</h2>

        <!-- Grid Layout: 2 columns, 2 rows -->
        <div class="grid grid-cols-2 grid-rows-[auto_auto] gap-4">
          <!-- Left column, first row: Image Preview -->
          <div
            class="relative w-full h-48 bg-gray-700 rounded-lg cursor-pointer overflow-hidden"
            @click="triggerFileInput"
          >
            <input
              ref="fileInput"
              type="file"
              accept="image/*"
              class="hidden"
              @change="onPlaylistImageUpload"
            />
            <img
              v-if="playlistCreateForm.imagePreview"
              :src="playlistCreateForm.imagePreview"
              alt="Preview"
              class="w-full h-full object-cover"
            />
            <div
              v-if="!playlistCreateForm.imagePreview"
              class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-gray-300 text-sm font-semibold"
            >
              Choose Image
            </div>
          </div>

          <!-- Right column, first row: Title + Description -->
          <div class="flex flex-col w-full h-48">
            <!-- Title -->
            <div>
              <label class="block mb-1">Name</label>
              <input
                v-model="playlistCreateForm.name"
                type="text"
                class="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 outline-none"
              />
            </div>

            <!-- Description -->
            <div class="mb-4">
              <label class="block my-1">Description</label>
              <textarea
                v-model="playlistCreateForm.description"
                rows="3"
                class="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 outline-none"
              ></textarea>
            </div>
          </div>
        </div>

        <!-- Second row, full width -->
        <div class="col-span-2 flex flex-col gap-4">
          <!-- Private Checkbox -->
          <div class="mb-4 flex items-center">
            <input v-model="playlistCreateForm.private" type="checkbox" id="private" class="mr-2" />
            <label for="private">Private Playlist</label>
          </div>

          <!-- Mediums Multiselect -->
          <div class="mb-4">
            <label class="block mb-2">Mediums</label>
            <div class="flex flex-wrap gap-2">
              <label
                v-for="medium in mediums"
                :key="medium"
                class="flex items-center space-x-2 bg-gray-700 px-3 py-1 rounded cursor-pointer select-none"
              >
                <input type="checkbox" :value="medium" v-model="playlistCreateForm.mediaTags" />
                <span>{{ medium }}</span>
              </label>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex justify-end space-x-3">
            <button @click="closeModal" class="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500">
              Cancel
            </button>
            <button @click="submitForm" class="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'
import { usePlaylistStore } from '/src/stores/playlistStore'
import { useAuthStore } from '/src/stores/authStore'

const playlistStore = usePlaylistStore()
const authStore = useAuthStore()

const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
})
const emit = defineEmits(['close'])

const fileInput = ref(null)
const playlistCreateForm = ref({
  imageFile: null,
  imagePreview: null,
  name: '',
  description: '',
  private: false,
  mediaTags: [],
})

function onPlaylistImageUpload(event) {
  const file = event.target.files[0]
  if (file) {
    playlistCreateForm.value.imageFile = file
    playlistCreateForm.value.imagePreview = URL.createObjectURL(file)
  }
}
// Trigger hidden file input on preview click
function triggerFileInput() {
  fileInput.value.click()
}

function submitForm() {
  console.log('Playlist Data:', playlistCreateForm.value)
  // Send to backend via API
  playlistStore.createPlaylist({
    name: playlistCreateForm.value.name,
    description: playlistCreateForm.value.description,
    image: playlistCreateForm.value.imageFile,
    status: 'PRIVATE',
    mediaTags: playlistCreateForm.value.mediaTags,
    userId: authStore.appUser.id,
  })
  closeModal()
}
function closeModal() {
  //emit false to close modal
  emit('close')
}
</script>
