<template>
  <nav
    class="bg-background text-gray-900 dark:text-white shadow shadow-white/10 px-6 py-4 flex justify-between items-center transition duration-300"
  >
    <RouterLink
      to="/"
      class="text-2xl mt-test font-bold h-max text-amber-500 hover:text-amber-400 transition duration-300"
    >
      Incorrection
    </RouterLink>

    <ul class="flex flex-wrap gap-3 text-sm items-center">
      <li>
        <RouterLink
          to="/"
          class="inline-block px-3 py-2 rounded-md bg-gray-300 dark:bg-gray-800 text-sm font-medium hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-200"
        >
          Play
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/library"
          class="px-3 py-2 rounded-md bg-gray-300 dark:bg-gray-800 text-sm font-medium hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-200"
          >Library</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/how-to-play"
          class="px-3 py-2 rounded-md bg-gray-300 dark:bg-gray-800 text-sm font-medium hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-200"
          >How to Play</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/contact"
          class="px-3 py-2 rounded-md bg-gray-300 dark:bg-gray-800 text-sm font-medium hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-200"
          >Contact</RouterLink
        >
      </li>
      <li>
        <template v-if="authStore.user">
          <div class="flex items-center space-x-3">
            <img
              :src="authStore.user.user_metadata.avatar_url || 'https://i.pravatar.cc/40'"
              alt="Profile"
              class="w-8 h-8 rounded-full border"
            />
            <span class="text-sm">{{ authStore.user.email }}</span>
            <button
              @click="handleLogout"
              class="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-sm font-medium hover:bg-red-400 hover:text-white dark:hover:bg-gray-600 transition-all duration-200"
            >
              Log out
            </button>
          </div>
        </template>
        <template v-else>
          <RouterLink
            to="/login"
            class="px-3 py-2 rounded-md bg-amber-600 text-white font-medium hover:bg-amber-500 transition-all duration-200"
          >
            Sign In
          </RouterLink>
        </template>
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
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

const isDark = ref(false)
const authStore = useAuthStore()
const router = useRouter()

// On mount: read from localStorage or fallback to system preference
onMounted(async () => {
  // Fetch user on page load
  await authStore.fetchUser()

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

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('darkMode', isDark.value ? 'true' : 'false')
}

const handleLogout = async () => {
  await authStore.logout()
  router.push('/')
}
</script>
