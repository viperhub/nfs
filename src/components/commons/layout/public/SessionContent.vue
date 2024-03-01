<script setup lang="ts">
import { defineProps } from 'vue'

interface Prop {
  title: string
  description: string
}

const props: Prop = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section class="items-center pt-10 font-poppins bg-white overflow-hidden">
    <div
      class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6"
      data-aos="fade-left"
      data-aos-anchor-placement="top-bottom"
    >
      <div class="w-full mx-auto">
        <div class="text-center">
          <div class="relative flex flex-col items-center">
            <h2 class="text-3xl font-bold leading-tight text-orange-500">
              {{ props.title }}
            </h2>
            <div class="flex w-24 mt-1 mb-10 overflow-hidden rounded image-glow">
              <div class="flex-1 h-2 bg-orange-200"></div>
              <div class="flex-1 h-2 bg-orange-400"></div>
              <div class="flex-1 h-2 bg-orange-600"></div>
            </div>
          </div>
          <p class="mb-4 text-base text-center text-gray-500">
            {{ props.description }}
          </p>
        </div>
      </div>
      <slot />
    </div>
  </section>
</template>
