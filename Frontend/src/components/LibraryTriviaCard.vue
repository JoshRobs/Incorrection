<template>
  <div
    class="um-card cursor-move relative overflow-hidden h-48"
    :data-card-id="element.id"
    @click="onCardClick(element)"
  >
    <!-- Header (yellow with purple tab) -->
    <div class="um-header flex items-center px-3">
      <span class="text-[11px] font-extrabold uppercase tracking-wide text-[#222]">
        {{ element.work || 'Category' }}
      </span>
    </div>

    <!-- Body -->
    <div class="px-3 pt-2 pb-10">
      <div class="text-[10px] text-gray-500 mb-1">#{{ index + 1 }}</div>
      <p class="font-semibold text-sm leading-snug um-clamp-3" title="Trivia">
        {{ element.statement }}
      </p>
    </div>

    <!-- Hover actions (kept from your original) -->
    <div
      class="absolute top-1 right-1 flex gap-2 transition-opacity duration-200"
      :class="{
        'opacity-100 pointer-events-auto': !drag && hoveredId === String(element.id),
        'opacity-0 pointer-events-none': drag || hoveredId !== String(element.id),
      }"
    >
      <button @click.stop="openEditModal(element)">
        <i class="fas fa-pencil-alt text-sm text-gray-700 hover:text-black" />
      </button>
      <button @click.stop="openDeleteModal(element)">
        <i class="fas fa-trash text-sm text-red-500 hover:text-red-700" />
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

<style scoped>
/* Card shell (rounded + inner shadow) */
.um-card {
  border-radius: 14px;
  border: 2px solid #333333;
  background: #1f1f1f;
  box-shadow:
    inset 0 2px 6px rgba(0, 0, 0, 0.25),
    0 4px 12px rgba(0, 0, 0, 0.25);
  position: relative;
}

/* Header: yellow bar with purple angled tab */
.um-header {
  height: 28px;
  background: rgb(255, 241, 48);
  border-bottom: 2px solid #0f0f0f;
  position: relative;
}

/* Multi-line clamp without needing Tailwind plugin */
.um-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
