<template>
  <nav
    class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow px-6 py-4 flex justify-between items-center transition duration-300"
  >
    <RouterLink
      to="/"
      class="text-2xl font-bold h-max text-amber-500 hover:text-amber-400 transition duration-300"
    >
      Incorrection
    </RouterLink>

    <ul class="flex space-x-3 text-sm items-center">
      <li>
        <RouterLink
          to="/"
          class="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-sm font-medium hover:bg-amber-400 hover:text-white dark:hover:bg-gray-600 transition-all duration-200"
        >
          Play
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/albums"
          class="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-sm font-medium hover:bg-amber-400 hover:text-white dark:hover:bg-gray-600 transition-all duration-200"
          >Albums</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/how-to-play"
          class="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-sm font-medium hover:bg-amber-400 hover:text-white dark:hover:bg-gray-600 transition-all duration-200"
          >How to Play</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/contact"
          class="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-sm font-medium hover:bg-amber-400 hover:text-white dark:hover:bg-gray-600 transition-all duration-200"
          >Contact</RouterLink
        >
      </li>
      <li>
        <div class="flex items-center space-x-2 ml-4">
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" class="sr-only peer" v-model="isDark" @change="toggleDarkMode" />
            <div
              class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-amber-400 dark:bg-gray-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"
            ></div>
          </label>
          <span class="text-sm">{{ isDark ? 'Dark 🌙' : 'Light 🌞' }}</span>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('darkMode', isDark.value ? 'true' : 'false')
}

// On mount: read from localStorage or fallback to system preference
onMounted(() => {
  const stored = localStorage.getItem('darkMode')
  if (stored === 'true') {
    isDark.value = true
  } else if (stored === 'false') {
    isDark.value = false
  } else {
    // Fallback to system preference
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  toggleDarkMode()
})
</script>
