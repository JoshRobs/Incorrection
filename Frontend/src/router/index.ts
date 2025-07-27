import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'
import About from '../pages/AboutPage.vue'
import Projects from '../pages/ProjectsPage.vue'
import Contact from '../pages/ContactPage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
})

export default router
