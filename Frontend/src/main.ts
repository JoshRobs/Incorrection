import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { useAuthStore } from './stores/authStore'
// main.js

const app = createApp(App)

app.use(router)
app.use(createPinia())

const authStore = useAuthStore()

// wait for initialization
authStore.initialize().then(() => {
  app.mount('#app')
})
