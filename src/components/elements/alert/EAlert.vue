<script setup lang="ts">
import { PropType } from 'vue';
import { AlertType } from './Alert.type';

defineProps({
  type: {
    type: String as PropType<AlertType>,
    default: 'info',
  },
});
</script>

<template>
  <div
      class="w-full p-3 rounded flex items-center"
      :class="{
      'bg-primary text-primary-text border border-primary': type === 'primary',
      'bg-green-100 text-green-700 border border-green-400':
        type === 'success',
      'bg-yellow-100 text-yellow-700 border border-yellow-400':
        type === 'warning',
      'bg-red-100 text-red-700 border border-red-400':
        type === 'danger',
      'bg-gray-100 text-gray-700 border border-gray-400':
        type === 'info',
    }"
  >
    <slot />
  </div>
</template>
