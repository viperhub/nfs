<script setup lang="ts">
import { ref, watch } from 'vue';
import Button from '@/components/elements/button/EButton.vue';

const pagination = ref(null);

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  showPages: {
    type: Number,
    default: 5,
  },
});

const emits = defineEmits(['update:modelValue']);

const displayedPages = ref<
    {
      page?: number; // if page == undefined, it's a separator
    }[]
>([]);

const calDisplayPages = () => {
  const { modelValue, totalPages, showPages } = props;
  const pages = [];
  const half = Math.floor(showPages / 2);
  const start = Math.max(modelValue - half, 1);
  const end = Math.min(start + showPages - 1, totalPages);

  for (let i = start; i <= end; i++) {
    pages.push({ page: i });
  }

  if (start > 1) {
    pages.unshift({ page: undefined });
  }

  if (end < totalPages) {
    pages.push({ page: undefined });
  }

  displayedPages.value = pages;
};

calDisplayPages();

watch(
    () => `${props.modelValue}-${props.totalPages}-${props.showPages}`,
    () => {
      calDisplayPages();
    }
);

const onPrev = () => {
  emits('update:modelValue', props.modelValue - 1);
};

const onNext = () => {
  emits('update:modelValue', props.modelValue + 1);
};

const onClickPage = (page: number | undefined) => {
  if (page !== undefined) {
    emits('update:modelValue', page);
  }
};
</script>

<template>
  <div
      ref="pagination"
      class="flex items-center space-x-1 justify-between max-w-full w-fit mx-auto"
  >
    <Button
        class="pagination-btn"
        :class="{
        'cursor-not-allowed': props.modelValue === 1,
      }"
        color="info"
        icon="chevron-left"
        icon-button
        :disabled="props.modelValue === 1"
        @click="onPrev"
    />
    <Button
        v-for="page in displayedPages"
        :key="page.page"
        class="pagination-btn pagination-btn__page"
        :variant="page.page === props.modelValue ? 'contained' : 'text'"
        :color="page.page === props.modelValue ? 'info' : 'info'"
        :disabled="page.page === undefined"
        @click="onClickPage(page.page)"
    >
      {{ page.page ?? '...' }}
    </Button>

    <Button
        class="pagination-btn"
        :class="{
        'cursor-not-allowed': props.modelValue === props.totalPages,
      }"
        color="info"
        icon="chevron-right"
        icon-button
        :disabled="props.modelValue === props.totalPages"
        @click="onNext"
    />
  </div>
</template>

<style scoped lang="scss">
.pagination-btn {
  font-weight: 600 !important;
  border-color: transparent !important;
  transition: none !important;
  padding: 0.35rem 0.75rem !important;

  &__page {
    padding: 0.5rem 0.75rem !important;
  }
}
</style>
