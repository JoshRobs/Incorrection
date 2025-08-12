<template>
  <div
    class="w-60 relative rounded-xl p-4 cursor-pointer group overflow-hidden transition-all duration-200 transform hover:scale-105 border-2 border-gray-700 hover:border-yellow-400"
    :style="{
      background: backgroundGradient,
      aspectRatio: '1 / 0.9',
    }"
    @click="handleClick"
  >
    <div
      class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"
    ></div>

    <div class="relative z-10 h-full flex flex-col justify-between">
      <div>
        <h3 class="text-white font-semibold text-lg leading-tight mb-1">
          {{ playlist.title }}
        </h3>
        <p class="text-sm text-gray-200">{{ playlist.topic }}</p>
      </div>

      <button
        v-if="mode"
        class="mt-4 py-1.5 px-4 text-sm font-medium rounded bg-white/10 text-white border border-white/20 hover:bg-white/20 transition"
        @click.stop="handleClick"
      >
        {{ mode === 'solo' ? 'Play' : 'Select' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  playlist: Object,
  mode: String, // optional: 'solo' | 'multi'
})

const router = useRouter()

const backgroundGradient = computed(() => {
  // Generate a random gradient from playlist ID
  const gradients = [
    'linear-gradient(135deg, #667eea, #764ba2)',
    'linear-gradient(135deg, #ff758c, #ff7eb3)',
    'linear-gradient(135deg, #43cea2, #185a9d)',
    'linear-gradient(135deg, #f7971e, #ffd200)',
    'linear-gradient(135deg, #00c6ff, #0072ff)',
  ]
  const index = props.playlist.id % gradients.length
  return gradients[index]
})

function handleClick() {
  if (props.mode) {
    router.push(`/play/${props.playlist.id}?mode=${props.mode}`)
  } else {
    router.push(`/playlist/${props.playlist.id}`)
  }
}
</script>

<style scoped></style>
