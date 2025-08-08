<template>
  <div
    class="trivia-card bg-gray-700 rounded-md p-4 h-32 shadow cursor-move relative"
    :data-card-id="element.id"
    @click="onCardClick(element)"
  >
    <div class="text-xs text-gray-400 mb-1">#{{ index + 1 }}</div>
    <p class="font-medium text-sm truncate" title="Trivia">
      {{ element.statement }}
    </p>
    <p class="text-xs text-gray-300 truncate" title="Work">
      {{ element.work }}
    </p>

    <div
      class="absolute top-1 right-1 flex gap-2 transition-opacity duration-200"
      :class="{
        'opacity-100 pointer-events-auto': !drag && hoveredId === String(element.id),
        'opacity-0 pointer-events-none': drag || hoveredId !== String(element.id),
      }"
    >
      <button @click.stop="openEditModal(element)">
        <i class="fas fa-pencil-alt text-sm text-gray-300 hover:text-white" />
      </button>
      <button @click.stop="openDeleteModal(element)">
        <i class="fas fa-trash text-sm text-red-400 hover:text-red-600" />
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  element: Object,
  index: Number,
  drag: Boolean,
  hoveredId: String,
  openEditModal: Function,
  openDeleteModal: Function,
})

const onCardClick = (item) => {
  alert(`Clicked trivia: ${item.statement}`)
}
</script>
