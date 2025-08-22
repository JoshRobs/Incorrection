<template>
  <div class="flex items-center justify-center px-4">
    <div class="w-full max-w-md bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-8 space-y-6">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Welcome Back</h1>
        <p class="text-gray-500 dark:text-gray-400 mt-1">
          Sign in to continue playing Incorrection
        </p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
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
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl transition"
        >
          Sign In
        </button>
        <AuthLayout />
      </form>

      <div class="text-sm text-center text-gray-500 dark:text-gray-400">
        Don’t have an account?
        <RouterLink to="/signup" class="text-indigo-600 hover:underline font-medium">
          Sign up
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '@/utils/supabase'
import AuthLayout from './AuthLayout.vue'

const email = ref('')
const password = ref('')

const handleLogin = async () => {
  console.log('Logging in with', email.value, password.value)
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  if (error) alert(error.message)
  else alert('Signed in!')
}
</script>
