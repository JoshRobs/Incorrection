import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.DEV
    ? '' // dev: Vite proxy will catch this
    : import.meta.env.VITE_API_URL, // prod: real backend URL
})

export default api
