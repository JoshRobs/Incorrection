<template>
  <div class="mb-8">
    <div class="flex justify-between items-center mb-3">
      <h2 class="text-white text-xl font-semibold">{{ title }}</h2>
      <RouterLink :to="moreLink" class="text-sm text-blue-400 hover:underline">
        Show all
      </RouterLink>
    </div>

    <div class="relative">
      <!-- Scrollable row -->
      <div
        ref="scrollContainer"
        class="flex gap-4 overflow-visible no-scrollbar scroll-smooth pr-10"
        @mousedown="startDrag"
        @mousemove="onDrag"
        @mouseup="stopDrag"
        @mouseleave="stopDrag"
      >
        <PlaylistCard v-for="item in limitedItems" :key="item.id" :playlist="item" />

        <!-- Show All Card -->
        <RouterLink
          :to="moreLink"
          class="flex items-center justify-center min-w-[150px] aspect-square bg-gray-800 text-white text-sm rounded-xl hover:scale-105 border border-gray-700 hover:border-yellow-400 transition-all duration-200 shrink-0"
        >
          Show All →
        </RouterLink>
      </div>

      <!-- Navigation Arrow -->
      <button
        class="absolute right-0 top-1/2 -translate-y-1/2 px-2 py-2 bg-black/50 hover:bg-black/70 text-white rounded-full z-10"
        @click="scrollRight"
      >
        ▶
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PlaylistCard from './PlaylistCard.vue'

const props = defineProps({
  title: String,
  items: Array,
  moreLink: String,
})

const scrollContainer = ref(null)
const limitedItems = computed(() => props.items.slice(0, 14)) // 14 + Show All = 15

// Scroll button
function scrollRight() {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' })
  }
}

// Drag scroll
let isDragging = false
let startX = 0
let scrollStart = 0

function startDrag(e) {
  isDragging = true
  startX = e.pageX
  scrollStart = scrollContainer.value.scrollLeft
}

function onDrag(e) {
  if (!isDragging) return
  const dx = e.pageX - startX
  scrollContainer.value.scrollLeft = scrollStart - dx
}

function stopDrag() {
  isDragging = false
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
