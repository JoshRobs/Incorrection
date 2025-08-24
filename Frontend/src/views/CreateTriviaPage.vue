<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTriviaStore } from 'src/stores/triviaStore'
// Assuming you have Reka UI installed
import {
  TagsInputClear,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
  TagsInputRoot,
} from 'reka-ui'
import { CATEGORY_VALUES } from '@project/types'
import { toPascalCase } from '@/utils/stringUtils'

const router = useRouter()
const triviaStore = useTriviaStore()

// Form state
const triviaForm = ref({
  title: '',
  incorrectStatement: '',
  correction: '',
  hint: '',
  isPrivate: false,
  comment: '',
  tags: [],
  category: '',
  incorrectSection: '', // Placeholder for custom tool later
})

// Example categories - replace with your dynamic fetch if needed
const parsedCategories = CATEGORY_VALUES.map((cat) => toPascalCase(cat))
const categories = ref(parsedCategories)
// Handle form submission
function submit() {
  console.log('Submitting trivia:', triviaForm.value)
  // TODO: Add API call to save trivia
  router.push('/library/my-trivia') // Redirect after save
}
</script>

<template>
  <div class="scroll-container overflow-auto text-text p-6">
    <h1 class="text-3xl font-bold mb-6">Create Trivia</h1>

    <div class="grid grid-cols-2 gap-6">
      <!-- Form Section -->
      <div class="bg-secondary p-6 rounded-lg flex flex-col gap-4">
        <!-- Title -->
        <div>
          <label class="block text-sm font-medium mb-1">Title</label>
          <input
            v-model="triviaForm.title"
            type="text"
            class="w-full bg-background border border-gray-600 rounded p-2"
          />
        </div>

        <!-- Incorrect Statement -->
        <div>
          <label class="block text-sm font-medium mb-1">Incorrect Statement</label>
          <textarea
            v-model="triviaForm.incorrectStatement"
            class="w-full bg-background border border-gray-600 rounded p-2"
          />
        </div>

        <!-- Correction -->
        <div>
          <label class="block text-sm font-medium mb-1">Correction</label>
          <textarea
            v-model="triviaForm.correction"
            class="w-full bg-background border border-gray-600 rounded p-2"
          />
        </div>

        <!-- Hint -->
        <div>
          <label class="block text-sm font-medium mb-1">Hint (optional)</label>
          <input
            v-model="triviaForm.hint"
            type="text"
            class="w-full bg-background border border-gray-600 rounded p-2"
          />
        </div>

        <!-- Mark as Private -->
        <div class="flex items-center gap-2">
          <input v-model="triviaForm.isPrivate" type="checkbox" class="accent-blue-500" />
          <label class="text-sm">Mark as private</label>
        </div>

        <!-- Comment -->
        <div>
          <label class="block text-sm font-medium mb-1">Comment (optional)</label>
          <textarea
            v-model="triviaForm.comment"
            class="w-full bg-background border border-gray-600 rounded p-2"
          />
        </div>

        <!-- Tags -->
        <div>
          <label class="block text-lg font-semibold mb-1">Tags</label>
          <TagsInputRoot
            v-model="triviaForm.tags"
            class="flex gap-2 items-center border p-1.5 rounded-lg w-full max-w-[340px] flex-wrap bg-white shadow-sm"
          >
            <TagsInputItem
              v-for="item in triviaForm.tags"
              :key="item"
              :value="item"
              class="text-white font-medium flex items-center justify-center gap-2 bg-grass8 aria-[current=true]:bg-grass9 rounded p-0.5"
            >
              <TagsInputItemText class="text-xs pl-1" />
              <TagsInputItemDelete class="p-0.5 rounded bg-transparent hover:bg-blackA4">
                <Icon icon="lucide:x" />
              </TagsInputItemDelete>
            </TagsInputItem>

            <TagsInputInput />
            <TagsInputClear />
          </TagsInputRoot>
        </div>

        <!-- Category -->
        <div>
          <label class="block text-sm font-medium mb-1">Category</label>
          <select
            v-model="triviaForm.category"
            class="w-full bg-background border border-gray-600 rounded p-2"
          >
            <option value="">Select a category</option>
            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
          </select>
        </div>

        <!-- Incorrect Section -->
        <div>
          <label class="block text-sm font-medium mb-1">Incorrect Section</label>
          <p class="text-xs text-gray-400 mb-1">
            Tool coming soon — for now just note in your statement.
          </p>
        </div>

        <!-- Submit -->
        <button @click="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Create Trivia
        </button>
      </div>

      <!-- Preview Section -->
      <div class="bg-secondary p-6 rounded-lg flex flex-col items-center justify-center">
        <div class="w-full max-w-md bg-background p-4 rounded-lg shadow-lg border border-gray-700">
          <h2 class="text-xl font-bold mb-2">{{ triviaForm.title || 'Trivia Title' }}</h2>
          <p class="text-red-400 italic mb-2">
            {{ triviaForm.incorrectStatement || 'Incorrect statement will appear here...' }}
          </p>
          <p class="text-green-400">
            {{ triviaForm.correction || 'Correction will appear here...' }}
          </p>

          <div v-if="triviaForm.hint" class="mt-2 text-sm text-gray-400">
            💡 Hint: {{ triviaForm.hint }}
          </div>

          <!-- Tags -->
          <div v-if="triviaForm.tags" class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="tag in triviaForm.tags"
              :key="tag"
              class="bg-gray-700 px-2 py-1 rounded text-xs"
            >
              {{ tag }}
            </span>
          </div>
          <div class="mt-4 text-xs text-gray-500">
            Category: {{ triviaForm.category || 'None selected' }}
          </div>

          <div v-if="triviaForm.isPrivate" class="mt-1 text-xs text-yellow-500">🔒 Private</div>
        </div>
      </div>
    </div>
  </div>
</template>
