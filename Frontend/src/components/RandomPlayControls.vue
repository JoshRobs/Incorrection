<template>
  <div
    class="w-full max-w-2xl mx-auto mt-4 px-4 py-3 border rounded-xl bg-yellow-100 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex flex-wrap justify-between items-center gap-2">
      <!-- Hint & Mark Correct -->
      <div class="flex gap-2">
        <button
          @click="$emit('show-hint')"
          class="text-sm text-yellow-600 hover:underline dark:text-yellow-300"
        >
          💡 Show Hint
        </button>
        <button
          @click="$emit('mark-correct')"
          class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm dark:bg-green-400 dark:hover:bg-green-300"
        >
          ✅ I Got This Right
        </button>
      </div>

      <!-- Like / Dislike / Favourite -->
      <div class="flex gap-2">
        <button @click="$emit('favourite')" class="text-red-500 hover:text-red-600 text-xl">
          ❤️
        </button>
        <button @click="$emit('like')" class="text-green-500 hover:text-green-600 text-xl">
          👍
        </button>
        <button @click="$emit('dislike')" class="text-red-400 hover:text-red-500 text-xl">
          👎
        </button>
      </div>
    </div>

    <!-- Stat Line -->
    <div class="text-center text-xs text-gray-600 mt-3 dark:text-gray-400">
      👥 {{ correctPercent }} users got this correct
    </div>
  </div>
</template>

<script setup>
defineProps({
  correctPercent: {
    type: Number,
    default: 68,
  },
})

defineEmits(['back', 'next', 'favourite', 'like', 'dislike', 'mark-correct', 'show-hint'])
</script>
