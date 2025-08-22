import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SinglePlayerPage from '@/views/SinglePlayerPage.vue'
import FavouritesPage from '@/views/FavouritesPage.vue'
import PlaylistSelectionPage from '@/views/PlaylistSelectionPage.vue'
import PlayRandomPage from '@/views/PlayRandomPage.vue'
import { useAuthStore } from '@/stores/authStore'
import LoginView from '@/components/Authentication/LoginView.vue'
import SignupView from '@/components/Authentication/SignupView.vue'
import LibraryPage from '@/views/LibraryPage.vue'
import DiscoverPage from '@/views/DiscoverPage.vue'
import BrowseCategoriesPage from '@/views/BrowseCategoriesPage.vue'
import MyTriviaPage from '@/views/MyTriviaPage.vue'
import CreateTriviaPage from '@/views/CreateTriviaPage.vue'
import TestPage from '@/views/TestPage.vue'

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
  {
    path: '/login',
    component: LoginView,
  },
  {
    path: '/signup',
    component: SignupView,
  },
  {
    path: '/library',
    component: LibraryPage,
  },
  {
    path: '/discover',
    component: DiscoverPage,
  },
  {
    path: '/browse',
    component: BrowseCategoriesPage,
  },
  {
    path: '/library/my-trivia',
    name: 'MyTrivia',
    component: MyTriviaPage,
  },
  {
    path: '/library/create',
    name: 'CreateTrivia',
    component: CreateTriviaPage,
  },
  {
    path: '/test',
    name: 'Test',
    component: TestPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
