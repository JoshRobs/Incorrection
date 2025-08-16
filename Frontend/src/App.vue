<script setup>
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/authStore'

const auth = useAuthStore()
auth.fetchUser()
</script>

<template>
  <div class="h-screen min-h-screen bg-background text-gray-900 dark:text-white flex flex-col">
    <NavBar />
    <div class="flex-grow flex justify-center overflow-hidden">
      <transition name="page" mode="out-in">
        <RouterView :key="$route.fullPath" class="w-full" />
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* Entering */
.page-enter-active {
  transition: all 0.8s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.page-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Leaving */
.page-leave-active {
  transition: all 0.3s ease;
}
.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
