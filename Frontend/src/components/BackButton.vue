<template>
  <button
    @click="goBack"
    class="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-sm text-gray-800 dark:text-white hover:bg-amber-400 dark:hover:bg-amber-500 transition"
  >
    <span class="text-lg">←</span>
    Back
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/') // fallback route
  }
}
</script>
