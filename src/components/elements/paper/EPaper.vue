<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: false,
    default: '',
  },
  logoUrl: {
    type: String,
    required: false,
    default: '',
  },
  isTransparent: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div
      class="bg-paper w-full rounded-lg flex flex-col"
      :class="{ 'bg-white/80 backdrop-blur-xl backdrop-saturate-100': isTransparent }"
  >
    <div
        v-show="title || logoUrl || $slots.actions"
        class="py-4 px-6 w-full border-bottom border-b-[2px] border-bg-primary flex flex-wrap items-center justify-between"
    >
      <slot name="title" />
      <h3 v-if="!$slots.title" class="font-semibold text-lg">{{ title }}</h3>
      <div>
        <slot name="actions" />
      </div>
    </div>
    <div class="py-4 px-6 w-full">
      <slot />
    </div>
  </div>
</template>
