<template>
  <div class="flex">
    <Splitpanes vertical>
      <Pane size="18" min-size="15" max-size="40" class="p-2 pt-4">
        <!-- Left Panel: Source Navigation -->

        <!-- Header -->
        <div class="flex justify-between items-center mb-4 relative">
          <h2 class="text-lg font-bold">Your Library</h2>

          <!-- Create button with animated + icon -->
          <div class="relative" ref="dropdownRef">
            <button
              class="flex items-center gap-2 cursor-pointer px-4 py-1.5 rounded-full bg-gray-300 dark:bg-gray-800 text-sm font-medium hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-200"
              @click="openCreateDropdown = !openCreateDropdown"
            >
              <span
                class="relative w-3 h-3 flex items-center justify-center transition-transform duration-200"
                :class="{ 'rotate-45': openCreateDropdown }"
              >
                <!-- Horizontal bar -->
                <span class="absolute w-full h-0.5 bg-current rounded"></span>
                <!-- Vertical bar -->
                <span class="absolute h-full w-0.5 bg-current rounded"></span>
              </span>
              Create
            </button>

            <!-- Dropdown -->
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div
                v-if="openCreateDropdown"
                class="absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 overflow-hidden z-10"
              >
                <button
                  class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  @click="onCreatePlaylist"
                >
                  📂 Playlist
                </button>
                <button
                  class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  @click="onCreateTrivia"
                >
                  ❓ Trivia
                </button>
              </div>
            </transition>
          </div>
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
          <img
            :src="allTriviaPlaylist.imageUrl"
            alt="cover"
            class="w-12 h-12 rounded object-cover"
          />
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
            <img :src="playlist.imageUrl" alt="cover" class="w-12 h-12 rounded object-cover" />
            <div class="flex flex-col">
              <span class="text-sm font-medium truncate">{{ playlist.name }}</span>
              <span class="text-xs text-gray-400 truncate">by {{ playlist.creator }}</span>
            </div>
          </div>
        </div>
      </Pane>

      <Pane class="p-4 bg-gray-800 text-white relative">
        <PlaylistLibraryHeader :playlist="selectedPlaylist" :key="selectedPlaylist.id" />

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
            @click="openAddTriviaModal = true"
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
    <CreatePlaylistModal :open="openPlaylistModal" @close="openPlaylistModal = false" />
    <AddTriviaModal
      :open="openAddTriviaModal"
      @close="openAddTriviaModal = false"
      :playlistId="selectedPlaylist.id"
    />
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted, onMounted } from 'vue'
import { Splitpanes, Pane } from 'splitpanes'
import LibraryTriviaCard from '@/components/LibraryTriviaCard.vue'
import draggable from 'vuedraggable'
import 'splitpanes/dist/splitpanes.css'
import PlaylistLibraryHeader from '@/components/Playlists/PlaylistLibraryHeader.vue'
import defaultPlaylistImage from '@/assets/images/DefaultPlaylistImage.png'
import { usePlaylistStore } from '@/stores/playlistStore.ts'
import { useAuthStore } from '@/stores/authStore'
import CreatePlaylistModal from '@/components/Playlists/CreatePlaylistModal.vue'
import AddTriviaModal from '@/components/Trivia/AddTriviaModal.vue'

let lastMouseX = 0
let lastMouseY = 0

const playlistStore = usePlaylistStore()
const authStore = useAuthStore()

const playlists = ref([])
const openPlaylistModal = ref(false)
const openAddTriviaModal = ref(false)
const openCreateDropdown = ref(false)
const dropdownRef = ref(null)
const search = ref('')

window.addEventListener('mousemove', updateHoveredCard)

onMounted(async () => {
  playlists.value = await playlistStore.fetchUserPlaylists(authStore.appUser.id)

  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateHoveredCard)
  document.removeEventListener('click', handleClickOutside)
})

// Playlist creating modal

function onCreatePlaylist() {
  openCreateDropdown.value = false
  // logic to create a playlist
  openPlaylistModal.value = true
}

function onCreateTrivia() {
  openCreateDropdown.value = false
  // logic to create a trivia
}

function handleClickOutside(e) {
  if (!dropdownRef.value.contains(e.target)) {
    openCreateDropdown.value = false
  }
}

// Side bar
const filteredPlaylists = computed(() => {
  const query = search.value.toLowerCase()

  let list = playlists.value.filter(
    (p) => p.name.toLowerCase().includes(query) || p.creator.toLowerCase().includes(query),
  )

  list = list.map((p) => ({
    ...p,
    imageUrl: p.imageUrl || defaultPlaylistImage, // Fallback to default image
    creator: p.creator === authStore.appUser.displayName ? 'You' : p.creator,
  }))

  if (sortOption.value === 'created') {
    list = list.filter((p) => p.creator === authStore.appUser.displayName) // Replace with logged-in user
  } else if (sortOption.value === 'added') {
    list = list.filter((p) => p.creator !== authStore.appUser.displayName)
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
  imageUrl: defaultPlaylistImage,
}

const selectedPlaylist = ref(allTriviaPlaylist)

async function selectPlaylist(playlist) {
  selectedPlaylist.value = playlist
  if (playlist.virtual) {
    // Virtual "All Trivia" — fetch favorited trivia
  } else {
    // Normal playlist — fetch its trivia
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
