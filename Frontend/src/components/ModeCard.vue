<template>
  <div
    @click="handleClick"
    :class="[
      'p-6 rounded-xl border transition transform',
      !disabled && 'hover:scale-105 hover:border-amber-400 cursor-pointer',
      disabled
        ? 'bg-gray-700 border-gray-600 cursor-not-allowed opacity-50'
        : 'bg-gray-800 border-gray-700',
    ]"
  >
    <div class="text-4xl mb-2">{{ icon }}</div>
    <h2 class="text-2xl font-semibold mb-2">{{ title }}</h2>
    <p class="text-sm text-gray-300">{{ description }}</p>
    <div v-if="disabled" class="mt-2 text-xs text-red-300 italic">{{ disabledMessage }}</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  to: String,
  disabled: Boolean,
  title: String,
  description: String,
  icon: String,
  disabledMessage: String,
})

const router = useRouter()

function handleClick() {
  if (!props.disabled && props.to) {
    router.push(props.to)
  }
}
</script>
