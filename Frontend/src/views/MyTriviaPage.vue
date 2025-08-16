<script setup>
import { ref } from 'vue'

// Example list of trivia (replace with API fetch)
const myTrivia = ref([
  { id: 1, title: 'Trivia 1' },
  { id: 2, title: 'Trivia 2' },
])
</script>

<template>
  <div class="p-8 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold mb-6">My Trivia</h1>
    <ul class="space-y-3">
      <li
        v-for="trivia in myTrivia"
        :key="trivia.id"
        class="border border-gray-300 rounded p-4 hover:bg-gray-50 cursor-pointer"
      >
        {{ trivia.title }}
      </li>
    </ul>
  </div>
</template>
