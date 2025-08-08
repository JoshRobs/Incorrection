<template>
  <nav
    class="grid grid-cols-3 bg-background text-white shadow shadow-white/10 px-6 py-4 flex justify-between items-center transition duration-300"
  >
    <div class="flex items-center">
      <RouterLink
        to="/"
        class="text-2xl mt-test font-bold h-max text-gold hover:text-gold-highlight transition duration-300"
      >
        Incorrection
      </RouterLink>

      <RouterLink
        to="/"
        class="ml-5 inline-block px-3 py-2 rounded-md bg-gray-300 dark:bg-gray-800 text-sm font-medium hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-200"
      >
        Play
      </RouterLink>
    </div>
    <!-- Center: Search Area -->
    <div class="flex justify-center gap-2">
      <!-- Home Button -->
      <RouterLink
        to="/"
        class="w-10 h-10 aspect-square rounded-full bg-secondary flex items-center justify-center text-gray-400 hover:text-white hover:bg-secondary-light transition"
      >
        <i class="fas fa-home text-lg align-middle" />
      </RouterLink>
      <!-- Search Bar -->
      <div
        class="flex items-center bg-secondary px-3 py-2 rounded-full w-full max-w-md gap-2 hover:bg-tertiary transition focus-within:ring-2 focus-within:ring-white"
      >
        <!-- Search Icon -->
        <button
          @click="handleSearchIconClick"
          class="text-gray-400 hover:text-white cursor-pointer transition"
        >
          <i class="fas fa-search" />
        </button>

        <!-- Search Input -->
        <input
          ref="inputRef"
          v-model="searchQuery"
          @keyup.enter="goToSearch"
          placeholder="Search playlists, trivia..."
          class="bg-transparent outline-none text-sm w-full"
        />

        <!-- Divider -->
        <div class="h-4 w-px bg-gray-400/50" />

        <!-- Browse Button -->
        <RouterLink to="/discover" class="relative group text-blue-300 hover:text-white transition">
          <i class="fas fa-compass text-lg align-middle relative top-[1px]" />

          <!-- Tooltip -->
          <span
            class="absolute top-full mb-1 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap"
          >
            Browse
          </span>
        </RouterLink>
      </div>
    </div>

    <div class="flex justify-end items-center gap-3 flex-wrap text-sm">
      <ul class="flex flex-wrap gap-3 text-sm items-center">
        <li>
          <RouterLink
            to="/library"
            class="px-3 py-2 rounded-md bg-gray-300 dark:bg-gray-800 text-sm font-medium hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-200"
            >Library</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/discover"
            class="px-3 py-2 rounded-md bg-gray-300 dark:bg-gray-800 text-sm font-medium hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-200"
            >Discover</RouterLink
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
              class="px-3 py-2 rounded-md bg-tertiary hover:bg-slate-600 text-white font-medium hover:text-gold transition-all duration-200"
            >
              Sign In
            </RouterLink>
          </template>
        </li>
        <li>
          <div class="flex items-center space-x-2 ml-4">
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                class="sr-only peer"
                v-model="isDark"
                @change="toggleDarkMode"
              />
              <div
                class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gold dark:bg-gray-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"
              ></div>
            </label>
            <span class="text-sm">{{ isDark ? 'Dark 🌙' : 'Light 🌞' }}</span>
          </div>
        </li>
      </ul>
    </div>
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

const searchQuery = ref('')

function goToSearch() {
  if (searchQuery.value.trim()) {
    router.push(`/discover?q=${encodeURIComponent(searchQuery.value.trim())}`)
  }
}

const inputRef = ref(null)

function handleSearchIconClick() {
  if (searchQuery.value.trim()) {
    goToSearch()
  } else {
    inputRef.value?.focus()
  }
}
</script>
