<template>
  <div
    ref="container"
    class="overflow-hidden transition-[height] duration-300 ease-in-out"
    :style="{ height: currentHeight }"
  >
    <div ref="content" class="answer-panel-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RevealPanel',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      currentHeight: '0px',
    }
  },
  watch: {
    show(newVal) {
      this.animateHeight(newVal)
    },
  },
  mounted() {
    if (this.show) {
      this.currentHeight = this.$refs.content.scrollHeight + 'px'
    }
  },
  methods: {
    animateHeight(expanding) {
      const container = this.$refs.container
      const content = this.$refs.content

      if (expanding) {
        // Step 1: Set explicit height
        this.currentHeight = content.scrollHeight + 'px'

        // Step 2: Wait for transition to finish, then set to auto for flexibility
        requestAnimationFrame(() => {
          setTimeout(() => {
            this.currentHeight = 'auto'
          }, 300) // Match your CSS transition duration
        })
      } else {
        // Step 1: Set height to current pixel value (from auto)
        const fullHeight = content.scrollHeight
        this.currentHeight = fullHeight + 'px'

        // Step 2: Force browser to register height before collapsing
        void container.offsetHeight // ← This is key!

        // Step 3: Now set to 0 to trigger transition
        requestAnimationFrame(() => {
          this.currentHeight = '0px'
        })
      }
    },
  },
}
</script>

<style scoped>
.answer-panel-content {
  /* Optional fade effect */
  transition: opacity 0.3s ease;
}
/* Tailwind-inspired, or write your own */
.transition-[height] {
  transition: height 0.3s ease;
}
</style>
