<template>
  <button
    class="cursor-pointer w-full mt-1 bg-white text-black border border-gray-100 rounded-xl py-2 px-4 flex items-center justify-center hover:bg-gray-100"
    @click="signInWithGoogle"
  >
    <svg class="w-5 h-5 mr-2" viewBox="0 0 48 48">
      <path
        fill="#EA4335"
        d="M24 9.5c3.3 0 6.3 1.1 8.6 3.3l6.4-6.4C34.2 2.5 29.4 0 24 0 14.8 0 6.9 5.8 3.3 13.9l7.4 5.7C12.7 13.1 17.9 9.5 24 9.5z"
      />
      <path
        fill="#34A853"
        d="M46.5 24.5c0-1.6-.2-3.1-.6-4.5H24v9h12.7c-.5 2.8-2.1 5.2-4.4 6.8l7.1 5.5c4.1-3.8 6.4-9.3 6.4-16.8z"
      />
      <path
        fill="#4A90E2"
        d="M10.7 28.6C9.6 26.4 9 23.9 9 21s.6-5.4 1.7-7.6l-7.4-5.7C1.2 12.5 0 16.6 0 21c0 4.4 1.2 8.5 3.3 12.1l7.4-5.7z"
      />
      <path
        fill="#FBBC05"
        d="M24 42c5.4 0 10.2-1.8 13.6-4.8l-7.1-5.5c-2 1.4-4.6 2.3-7.5 2.3-6.1 0-11.3-3.6-13.3-8.6l-7.4 5.7C6.9 40.2 14.8 46 24 46z"
      />
    </svg>
    Sign in with Google
  </button>
</template>
<script setup>
import { supabase } from '@/utils/supabase'
const signInWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
  if (error) {
    alert('Google sign-in failed: ' + error.message)
  }
}
</script>
<style scoped></style>
