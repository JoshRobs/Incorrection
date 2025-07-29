import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SinglePlayerPage from '@/views/SinglePlayerPage.vue'
import FavouritesPage from '@/views/FavouritesPage.vue'
import PlaylistSelectionPage from '@/views/PlaylistSelectionPage.vue'
import PlayRandomPage from '@/views/PlayRandomPage.vue'
import { useAuthStore } from '@/stores/authStore'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/play',
    name: 'SinglePlayer',
    component: SinglePlayerPage,
  },
  {
    path: '/play/random',
    name: 'PlayRandom',
    component: PlayRandomPage,
  },
  {
    path: '/play/playlists',
    name: 'PlaylistSelection',
    component: PlaylistSelectionPage,
  },
  {
    path: '/favorites',
    component: FavouritesPage,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (!auth.user) auth.loadUserFromStorage()

  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
