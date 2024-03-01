<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1 class="text-2xl font-semibold mb-2">
    {{ title }}
  </h1>
</template>
