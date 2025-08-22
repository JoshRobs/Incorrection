<template>
  <div class="flex items-center justify-center px-4">
    <div class="w-full max-w-md bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-8 space-y-6">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Create an Account</h1>
        <p class="text-gray-500 dark:text-gray-400 mt-1">
          Join Incorrection and test your trivia powers
        </p>
      </div>

      <form @submit.prevent="handleSignup" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" for="email"
            >Email</label
          >
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" for="email"
            >Display Name</label
          >
          <input
            id="displayName"
            v-model="displayName"
            type="text"
            required
            class="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="MrNerdington"
          />
        </div>

        <div>
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            for="password"
            >Password</label
          >
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Choose a strong password"
          />
        </div>
        <div>
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            for="confirmPassword"
            >Confirm Password</label
          >
          <input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            required
            class="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Confirm your password"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl transition"
        >
          Sign Up
        </button>
        <AuthLayout />
      </form>

      <div class="text-sm text-center text-gray-500 dark:text-gray-400">
        Already have an account?
        <RouterLink to="/login" class="text-indigo-600 hover:underline font-medium">
          Sign in
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AuthLayout from './AuthLayout.vue'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const displayName = ref('')

const handleSignup = async () => {
  await authStore
    .CreateUser(email.value, password.value, displayName.value, confirmPassword.value)
    .then(() => {
      alert('Account created successfully!')
      // Redirect to login or home page
      router.push('/')
    })
    .catch((error) => {
      alert('Signup failed: ' + error.message)
    })
}
</script>
