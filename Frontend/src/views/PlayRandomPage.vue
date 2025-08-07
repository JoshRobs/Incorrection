<template>
  <div class="w-full px-4 py-8">
    <BackButton />
    <div class="flex flex-col items-start pt-30 px-4">
      <TriviaCard />
      <RandomPlayControls />
    </div>
  </div>
</template>
<script setup>
import BackButton from '@/components/BackButton.vue'
import RandomPlayControls from '@/components/RandomPlayControls.vue'
import TriviaCard from '@/components/TriviaCard.vue'
</script>
<style scoped></style>
