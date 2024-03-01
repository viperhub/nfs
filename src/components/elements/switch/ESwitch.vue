<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import { PropType } from 'vue';
import { SwitchColor, SwitchSize } from './Switch.type';

const props = defineProps({
  size: {
    type: String as PropType<SwitchSize>,
    default: 'medium',
  },
  color: {
    type: String as PropType<SwitchColor>,
    default: 'primary',
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue', 'blur', 'input']);
const model = useVModel(props, 'modelValue', emit);
</script>

<template>
  <label class="relative inline-flex items-center cursor-pointer">
    <input
        type="checkbox"
        value=""
        class="sr-only peer ouline-none"
        :checked="model"
    />
    <span
        class="bg-gray-200 rounded-full peer peer:border-none after:content-[''] after:absolute after:bg-white after:border-none after:rounded-full after:transition-all"
        :class="{
        'w-[40px] h-[18px] after:top-[3px] after:left-[3px] after:h-[12px] after:w-[20px] peer-checked:after:translate-x-[14px]':
          size === 'small',
        'w-[56px] h-[24px] after:top-[3px] after:left-[3px] after:h-[18px] after:w-[28px] peer-checked:after:translate-x-[22px]':
          size === 'medium',
        'w-[64px] h-[28px] after:top-[3px] after:left-[3px] after:h-[22px] after:w-[32px] peer-checked:after:translate-x-[26px]':
          size === 'large',
        'peer-checked:bg-primary': color === 'primary',
        'peer-checked:bg-danger': color === 'danger',
        'peer-checked:bg-green-500': color === 'success',
        'peer-checked:bg-yellow-500': color === 'warning',
        'peer-checked:bg-gray-500': color === 'info',
      }"
    />
  </label>
</template>
