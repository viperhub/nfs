<script setup lang="ts">
import { PropType } from 'vue';

interface Item {
  label: string;
  href: string;
}

defineProps({
  items: {
    type: Array as PropType<Item[]>,
    required: true,
  },
});
</script>

<template>
  <div class="w-full flex flex-wrap">
    <div v-for="(item, index) in items" :key="index" class="text-sm">
      <router-link :to="item.href">
        <span
            :class="{
            'font-semibold': index === items.length - 1,
          }"
        >{{ item.label }}</span
        >
      </router-link>
      <span v-if="index < items.length - 1">&nbsp;/&nbsp;</span>
    </div>
  </div>
</template>
