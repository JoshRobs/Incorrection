<template>
  <svg viewBox="0 0 1920 1080">
    <!-- Black & white panel background -->
    <polygon
      points="651,377 1290,377 1260,703 621,703"
      class="comic-button stroke-black stroke-2 fill-background dark:fill-white/20"
    />
    <polygon
      points="0,150 200,150 200,600 0,600"
      class="stroke-black stroke-2 fill-secondary dark:fill-secondary"
    />

    <!-- Button text -->
    <!-- Text for each panel -->
    <text x="150" y="60" font-size="20" font-family="sans-serif" text-anchor="middle" fill="black">
      Single Player
    </text>
  </svg>
</template>

<script setup></script>

<style>
.comic-button {
  cursor: pointer;
  transition: all 0.3s ease;
}
.comic-button:hover {
  fill: yellow;
  stroke: red;
}
</style>
