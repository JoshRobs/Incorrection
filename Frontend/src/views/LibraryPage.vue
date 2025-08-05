<template>
  <div class="flex">
    <Splitpanes>
      <Pane size="15" min-size="12" max-size="40" class="p-2 pt-4">
        <!-- Left Panel: Source Navigation -->
        <!-- Header -->
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-bold">Your Library</h2>
          <button
            class="cursor-pointer px-3 py-1 rounded-full bg-gray-300 dark:bg-gray-800 text-sm font-medium hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-200"
            @click="onCreate"
          >
            + Create
          </button>
        </div>

        <!-- Search -->
        <input
          type="text"
          v-model="search"
          placeholder="Search playlists..."
          class="w-full px-3 py-2 mb-4 text-sm rounded bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <!-- Playlist List -->
        <div class="flex-1 overflow-y-auto">
          <div
            v-for="playlist in filteredPlaylists"
            :key="playlist.id"
            class="flex items-center rounded space-x-3 cursor-pointer hover:bg-gray-800 p-2"
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
        <!-- Locked Title -->
        <div class="sticky top-0 z-10 bg-gray-800 pb-2">
          <h2 class="text-lg font-bold border-b border-gray-700 pb-2 mb-4">Playlist Preview</h2>
        </div>

        <!-- Draggable Grid -->
        <draggable
          v-model="playlistItems"
          tag="transition-group"
          :component-data="{
            tag: 'div',
            type: 'transition-group',
            name: !drag ? 'flip-list' : null,
          }"
          class="grid grid-cols-4 gap-4 relative"
          :animation="200"
          :ghost-class="'drag-ghost'"
          :chosen-class="'drag-chosen'"
          :drag-class="'drag-dragging'"
          @start="drag = true"
          @end="handleDragEnd"
        >
          <template #item="{ element, index }">
            <PlaylistCard
              :element="element"
              :index="index"
              :drag="drag"
              :openEditModal="openEditModal"
              :openDeleteModal="openDeleteModal"
            />
          </template>
        </draggable>
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
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Splitpanes, Pane } from 'splitpanes'
import PlaylistCard from '@/components/PlaylistCard.vue'
import draggable from 'vuedraggable'
import 'splitpanes/dist/splitpanes.css'

let lastMouseX = 0
let lastMouseY = 0

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
const onCreate = () => {
  alert('Open create playlist modal or route')
}

// Mock data — replace with real playlists from backend
const playlists = ref([
  {
    id: 1,
    name: 'Gaming Trivia Vol. 1',
    creator: 'Josh Roberts',
    image: 'https://via.placeholder.com/100x100?text=🎮',
  },
  {
    id: 2,
    name: 'Sci-Fi & Fantasy',
    creator: 'Emily Ray',
    image: 'https://via.placeholder.com/100x100?text=📚',
  },
  {
    id: 3,
    name: 'Anime Picks',
    creator: 'Kenta Yamada',
    image: 'https://via.placeholder.com/100x100?text=🍥',
  },
])

const filteredPlaylists = computed(() => {
  const query = search.value.toLowerCase()
  return playlists.value.filter(
    (p) => p.name.toLowerCase().includes(query) || p.creator.toLowerCase().includes(query),
  )
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
}

/* The chosen item (original spot while dragging) */
.drag-chosen {
  opacity: 0.5;
}

.flip-list-move {
  transition: transform 0.3s ease;
}
</style>
