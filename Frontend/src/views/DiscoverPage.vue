<template>
  <div style="padding: 2rem">
    <draggable
      v-model="items"
      tag="div"
      :component-data="{ tag: 'div' }"
      @start="drag = true"
      @end="
        () => {
          drag = false
        }
      "
    >
      <template #item="{ element, index }">
        <PlaylistCard
          :element="element"
          :index="index"
          :drag="drag"
          @edit="onEdit"
          @delete="onDelete"
        />
      </template>
    </draggable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'
import PlaylistCard from '@/components/PlaylistCard.vue'

const drag = ref(false)

const items = ref([
  { id: 1, statement: 'Item 1', work: 'Work A' },
  { id: 2, statement: 'Item 2', work: 'Work B' },
  { id: 3, statement: 'Item 3', work: 'Work C' },
])

const onEdit = (el) => console.log('Edit', el)
const onDelete = (el) => console.log('Delete', el)
</script>
