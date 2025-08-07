<template>
  <div
    class="rounded-xl border shadow-xl relative overflow-hidden w-3xl mx-auto bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
  >
    <!-- Top Labels -->
    <div class="flex justify-between items-start p-4">
      <div
        class="bg-black text-yellow-300 text-sm font-bold px-3 py-1 rounded-tl-xl rounded-br-xl uppercase tracking-wide dark:bg-yellow-300 dark:text-black"
      >
        {{ trivia.title }}
      </div>
      <div
        class="bg-yellow-300 text-black text-xs font-semibold px-3 py-1 rounded-bl-xl rounded-tr-xl dark:bg-gray-300 dark:text-gray-900"
      >
        {{ trivia.category }}
      </div>
    </div>

    <!-- Statement Box -->
    <div
      :class="[
        'px-6 pt-2 pb-6 text-lg leading-relaxed font-serif transition-all',
        'bg-white dark:bg-gray-900 text-black dark:text-gray-200',
      ]"
    >
      <p class="leading-relaxed">
        <em
          >—
          <span v-html="highlightedStatement"></span>
        </em>
      </p>
    </div>

    <!-- Correction Box -->
    <RevealPanel :show="showAnswer">
      <div
        class="answer-section bg-green-100 border-t-4 border-green-500 p-4 flex items-start gap-2 relative dark:bg-green-900 dark:border-green-400"
      >
        <div class="text-sm text-green-900 ml-2 dark:text-green-100">
          <Strong>Correction: </Strong>{{ trivia.correction }}
        </div>
      </div>
    </RevealPanel>

    <!-- Optional Trivia Line -->
    <RevealPanel :show="showAnswer && trivia.comment">
      <div
        v-if="trivia.comment"
        class="px-6 pb-3 pt-3 bg-gray-100 dark:bg-gray-800 text-gray-600 italic text-sm dark:text-gray-400"
      >
        💬 {{ trivia.comment }}
      </div>
    </RevealPanel>
    <!-- Action Buttons -->
    <div
      class="flex justify-between items-center px-6 py-4 border-t bg-yellow-100 border-yellow-300 dark:border-gray-700 dark:bg-gray-700"
    >
      <button
        @click="next"
        class="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded font-semibold transition dark:bg-gray-600 dark:hover:bg-gray-500"
      >
        ← Back
      </button>
      <button
        @click="showAnswer = !showAnswer"
        class="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black text-sm px-4 py-2 rounded font-semibold transition dark:bg-yellow-300 dark:hover:bg-yellow-200"
      >
        {{ showAnswer ? 'Hide Answer' : 'Reveal Answer' }}
      </button>
      <button
        @click="next"
        class="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded font-semibold transition dark:bg-gray-600 dark:hover:bg-gray-500"
      >
        Next ➡
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import triviaData from '@/data/trivia.json'
import shuffle from '@/utils/shuffle.js'
import RevealPanel from '@/components/RevealPanel.vue'

const questions = shuffle(triviaData)
const index = ref(0)
const trivia = ref(questions[index.value])
const showAnswer = ref(false)

const toggleHint = () => {
  // show the hint somehow
}

const markCorrect = () => {
  // send to backend or update UI
}

const toggleFavourite = () => {
  // toggle like/favourite
}

const likeTrivia = () => {
  // increment like
}

const dislikeTrivia = () => {
  // increment dislike
}

const back = () => {
  // navigate to previous trivia
}

const next = () => {
  index.value = (index.value + 1) % questions.length
  trivia.value = questions[index.value]
  showAnswer.value = false
}

const highlightedStatement = computed(() => {
  const s = trivia.value.incorrectStatement
  const start = trivia.value.highlightStart
  const end = trivia.value.highlightEnd

  if (!showAnswer.value || start == null || end == null) return s

  const before = s.slice(0, start)
  const highlight = s.slice(start, end)
  const after = s.slice(end)

  return `${before}<span class='highlight-swipe'>${highlight}</span>${after}`
})
</script>
<style>
.highlight-swipe {
  background: linear-gradient(90deg, rgb(254, 240, 138) 50%, transparent 0) 100% center / 200% 100%
    no-repeat;
  transition: background-position 0.5s ease-out;
  border-radius: 0.125rem;
}
@media (prefers-color-scheme: dark) {
  .highlight-swipe {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.123) 50%, transparent 0) 100% center /
      200% 100% no-repeat;

    animation:
      highlight-bg 0.5s ease-out forwards,
      highlight-text-color-dark 0.5s ease-out forwards;
  }
}

@keyframes highlight-bg {
  from {
    background-position: 100% 0px;
  }
  to {
    background-position: 0px 0px;
  }
}

@keyframes highlight-text-color-light {
  from {
    color: inherit;
  }
  to {
    color: rgba(255, 14, 14, 0.925); /* Tailwind green-800 for light mode */
  }
}

@keyframes highlight-text-color-dark {
  from {
    color: inherit;
  }
  to {
    color: rgba(255, 105, 105, 0.925);
  }
}
</style>
