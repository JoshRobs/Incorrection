<template>
  <div class="flex">
    <Splitpanes vertical>
      <Pane size="18" min-size="15" max-size="40" class="p-2 pt-4">
        <!-- Left Panel: Source Navigation -->

        <!-- Header -->
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-bold">Your Library</h2>
          <button
            class="cursor-pointer px-3 py-1 rounded-full bg-gray-300 dark:bg-gray-800 text-sm font-medium hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-200"
            @click="onCreatePlaylist"
          >
            + Create
          </button>
        </div>

        <!-- Search -->
        <input
          type="text"
          v-model="search"
          placeholder="Search playlists..."
          class="w-full px-3 py-2 mb-3 text-sm rounded bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <!-- Sort Dropdown -->
        <div class="mb-4">
          <select
            v-model="sortOption"
            class="w-full px-3 py-2 text-sm rounded bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Playlists</option>
            <option value="created">Created by Me</option>
            <option value="added">Added to Library</option>
          </select>
        </div>

        <!-- All Trivia (Pinned Playlist) -->
        <div
          class="flex items-center rounded space-x-3 cursor-pointer hover:bg-gray-800 p-2"
          @click="selectPlaylist(allTriviaPlaylist)"
        >
          <img :src="allTriviaPlaylist.image" alt="cover" class="w-12 h-12 rounded object-cover" />
          <div class="flex flex-col">
            <span class="text-sm font-medium truncate">{{ allTriviaPlaylist.name }}</span>
            <span class="text-xs text-gray-400 truncate">{{ allTriviaPlaylist.creator }}</span>
          </div>
        </div>

        <!-- Playlist List -->
        <div class="flex-1 overflow-y-auto">
          <div
            v-for="playlist in filteredPlaylists"
            :key="playlist.id"
            class="flex items-center rounded space-x-3 cursor-pointer hover:bg-gray-800 p-2"
            @click="selectPlaylist(playlist)"
          >
            <img :src="playlist.image" alt="cover" class="w-12 h-12 rounded object-cover" />
            <div class="flex flex-col">
              <span class="text-sm font-medium truncate">{{ playlist.name }}</span>
              <span class="text-xs text-gray-400 truncate">by {{ playlist.creator }}</span>
            </div>
          </div>
        </div>
      </Pane>

      <Pane class="p-4 bg-gray-800 text-white relative">
        <PlaylistLibraryHeader />

        <!-- Draggable Grid -->
        <div class="grid grid-cols-4 gap-4 relative">
          <draggable
            v-model="playlistItems"
            tag="transition-group"
            :component-data="{
              tag: 'div',
              type: 'transition-group',
              name: !drag ? 'flip-list' : null,
            }"
            class="contents"
            :animation="200"
            :ghost-class="'drag-ghost'"
            :chosen-class="'drag-chosen'"
            :drag-class="'drag-dragging'"
            @start="drag = true"
            @end="handleDragEnd"
          >
            <template #item="{ element, index }">
              <LibraryTriviaCard
                @click="onCardClick(element)"
                :element="element"
                :index="index"
                :drag="drag"
                :hovered-id="hoveredId"
                :openEditModal="openEditModal"
                :openDeleteModal="openDeleteModal"
              />
            </template>
          </draggable>

          <!-- Add Trivia Card -->
          <div
            @click="openAddTriviaModal"
            class="flex items-center justify-center bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors border-2 border-dashed border-gray-500"
          >
            <span class="text-lg font-semibold">Add Trivia +</span>
          </div>
        </div>
      </Pane>
    </Splitpanes>
    <!-- Edit Modal -->
    <div
      v-if="showEditModal"
      class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div class="bg-gray-800 p-6 rounded-md w-96">
        <h2 class="text-white font-bold text-lg mb-4">Edit Trivia</h2>
        <!-- Placeholder content -->
        <p class="text-sm text-gray-300">Edit modal content goes here.</p>
        <div class="flex justify-end mt-4">
          <button
            class="px-3 py-1 bg-gray-600 text-white rounded mr-2"
            @click="showEditModal = false"
          >
            Close
          </button>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div
      v-if="showDeleteModal"
      class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div class="bg-gray-800 p-6 rounded-md w-96">
        <h2 class="text-white font-bold text-lg mb-2">Delete Trivia</h2>
        <p class="text-sm text-gray-300 mb-4">
          Are you sure you want to remove this trivia from the playlist?
        </p>
        <div class="flex justify-end space-x-3">
          <button class="px-3 py-1 bg-gray-600 text-white rounded" @click="cancelDelete">
            Cancel
          </button>
          <button class="px-3 py-1 bg-red-600 text-white rounded" @click="confirmDelete">
            Delete
          </button>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <!-- Modal with Transition -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="openPlaylistModal"
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
                <label class="block mb-1">Title</label>
                <input
                  v-model="playlistCreateForm.title"
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
              <input
                v-model="playlistCreateForm.private"
                type="checkbox"
                id="private"
                class="mr-2"
              />
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
                  <input type="checkbox" :value="medium" v-model="playlistCreateForm.mediums" />
                  <span>{{ medium }}</span>
                </label>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex justify-end space-x-3">
              <button
                @click="openPlaylistModal = false"
                class="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
              >
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
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { Splitpanes, Pane } from 'splitpanes'
import LibraryTriviaCard from '@/components/LibraryTriviaCard.vue'
import draggable from 'vuedraggable'
import 'splitpanes/dist/splitpanes.css'
import PlaylistLibraryHeader from '@/components/Playlists/PlaylistLibraryHeader.vue'
import defaultPlaylistImage from '@/assets/images/DefaultPlaylistImage.png'

let lastMouseX = 0
let lastMouseY = 0

// Playlist creationg modal
const openPlaylistModal = ref(false)
const fileInput = ref(null)

const onCreatePlaylist = () => {
  openPlaylistModal.value = true
}
const playlistCreateForm = ref({
  imageFile: null,
  imagePreview: null,
  title: '',
  description: '',
  private: false,
  mediums: [],
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
  // TODO: Send to backend via API
  openPlaylistModal.value = false
}

//Handle hover on draggable cards
window.addEventListener('mousemove', (e) => {
  lastMouseX = e.clientX
  lastMouseY = e.clientY
})
const drag = ref(false)
function handleDragEnd() {
  drag.value = false

  // Step 1: Get the real element under the mouse
  const el = document.elementFromPoint(lastMouseX, lastMouseY)
  if (el) {
    const leaveEvent = new MouseEvent('mouseleave', {
      bubbles: true,
      cancelable: true,
    })
    el.dispatchEvent(leaveEvent)
  }

  // Step 2: Force a DOM reflow to guarantee layout state resets
  void document.body.offsetHeight // Classic hack to force reflow
}

// Side bar
const search = ref('')

// Mock "real" playlists from backend
const playlists = ref([
  {
    id: 1,
    name: 'Gaming Trivia Vol. 1',
    creator: 'Josh Roberts',
    image: defaultPlaylistImage,
  },
  {
    id: 2,
    name: 'Sci-Fi & Fantasy',
    creator: 'Emily Ray',
    image: defaultPlaylistImage,
  },
  {
    id: 3,
    name: 'Anime Picks',
    creator: 'Kenta Yamada',
    image: defaultPlaylistImage,
  },
])

const filteredPlaylists = computed(() => {
  const query = search.value.toLowerCase()

  let list = playlists.value.filter(
    (p) => p.name.toLowerCase().includes(query) || p.creator.toLowerCase().includes(query),
  )

  if (sortOption.value === 'created') {
    list = list.filter((p) => p.creator === 'Josh Roberts') // Replace with logged-in user
  } else if (sortOption.value === 'added') {
    list = list.filter((p) => p.creator !== 'Josh Roberts')
  }

  return list
})

// Sample playlist items
const playlistItems = ref([
  {
    id: 1,
    statement: 'What is the capital of France?',
    work: 'World Geography 101',
  },
  {
    id: 2,
    statement: 'Who wrote "To Kill a Mockingbird"?',
    work: 'Classic Novels',
  },
  {
    id: 3,
    statement: 'What year did the Titanic sink?',
    work: 'History Trivia',
  },
])

const sortOption = ref('all')

// Pinned "All Trivia" playlist
const allTriviaPlaylist = {
  id: 'all-trivia',
  name: 'All Trivia',
  creator: 'You',
  image: defaultPlaylistImage,
}

async function selectPlaylist(playlist) {
  selectedPlaylist.value = playlist
  if (playlist.virtual) {
    // Virtual "All Trivia" — fetch favorited trivia
    const { data } = await axios.get('/api/trivia/favorites')
    playlistItems.value = data
  } else {
    // Normal playlist — fetch its trivia
    const { data } = await axios.get(`/api/playlists/${playlist.id}/trivia`)
    playlistItems.value = data
  }
}

// Modal state
const showEditModal = ref(false)
const showDeleteModal = ref(false)
const selectedTrivia = ref(null)

function openEditModal(item) {
  selectedTrivia.value = item
  showEditModal.value = true
}

function openDeleteModal(item) {
  selectedTrivia.value = item
  showDeleteModal.value = true
}

function confirmDelete() {
  const idToDelete = selectedTrivia.value?.id
  const index = playlistItems.value.findIndex((item) => item.id === idToDelete)
  if (index !== -1) playlistItems.value.splice(index, 1)
  showDeleteModal.value = false
  selectedTrivia.value = null
}

function cancelDelete() {
  showDeleteModal.value = false
  selectedTrivia.value = null
}

const hoveredId = ref(null)

function updateHoveredCard(e) {
  const el = e.target.closest('[data-card-id]')
  hoveredId.value = el?.dataset?.cardId || null
}

window.addEventListener('mousemove', updateHoveredCard)

onUnmounted(() => {
  window.removeEventListener('mousemove', updateHoveredCard)
})
</script>

<style>
/* Target the splitter (the draggable divider) */
.splitpanes--vertical > .splitpanes__splitter {
  background-color: var(--color-secondary);
  min-width: 6px; /* Increase thickness (for vertical split) */
  cursor: col-resize;
  transition: background-color 0.2s;
}

/* Optional: On hover */
.splitpanes__splitter:hover {
  background-color: #3b82f6; /* Tailwind blue-500 or any accent */
}

/* The item that's being dragged */
.drag-dragging {
  opacity: 1 !important;
  transform: scale(1.05);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
  z-index: 50;
}

.drag-ghost * {
  opacity: 0.15 !important;
  border-radius: 0.5rem; /* Same as rounded-md */
  color: transparent; /* Hide text */
  background-color: rgb(115, 118, 134);
  pointer-events: none !important;
  transition: none !important; /* 🚫 Kill all fades */
}

/* The chosen item (original spot while dragging) */
.drag-chosen {
  opacity: 0.5;
}

.flip-list-move {
  transition: transform 0.3s ease;
}
</style>
