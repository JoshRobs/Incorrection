<template>
  <div
    @click="toggleSelection"
    :class="[
      'p-4 border rounded-xl cursor-pointer transition',
      isSelected ? 'bg-blue-50 border-blue-400' : 'bg-white hover:shadow',
    ]"
  >
    <p class="font-semibold text-red-600">❌ {{ trivia.incorrect }}</p>
    <p class="text-green-600">✅ {{ trivia.correction }}</p>

    <div class="flex gap-4 text-sm text-gray-500 mt-2">
      <span>⭐ {{ trivia.likes }}</span>
      <span>❤️ {{ trivia.favorites }}</span>
    </div>

    <div v-if="isSelected" class="mt-2 text-blue-600 font-medium">Selected</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  trivia: { type: Object, required: true },
  selected: { type: Array, required: true },
})
const emit = defineEmits(['update:selected'])

const isSelected = computed(() => props.selected.some((t) => t.id === props.trivia.id))

function toggleSelection() {
  if (isSelected.value) {
    emit(
      'update:selected',
      props.selected.filter((t) => t.id !== props.trivia.id),
    )
  } else {
    emit('update:selected', [...props.selected, props.trivia])
  }
}
</script>
