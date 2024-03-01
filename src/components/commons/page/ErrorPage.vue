<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
  code: {
    type: Number,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  redirect: {
    type: Object as PropType<{
      label: string
      url: string
    }>,
    required: false,
    default: null
  }
})
</script>

<template>
  <div
    class="error-page w-full min-h-screen p-4 flex flex-col justify-center items-center bg-white"
  >
    <h1 class="error-page__status text-primary mb-4">{{ code }}</h1>
    <p class="error-page__message mb-1">{{ message }}</p>
    <a v-if="redirect" :href="redirect.url" class="text-sm underline">{{ redirect.label }}</a>
  </div>
</template>

<style lang="scss">
.error-page {
  &__status {
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 300;
    font-size: 6rem;
    line-height: 1.167;
  }

  &__message {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.6;
  }
}
</style>
