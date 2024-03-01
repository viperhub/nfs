<script lang="ts" setup>
import { useVModel } from '@vueuse/core';
import { PropType } from 'vue';
import { CheckboxColor } from './Checkbox.type';

const props = defineProps({
  modelValue: {
    type: [Array, Boolean] as PropType<string[] | boolean>,
    default: () => [],
  },
  color: {
    type: String as PropType<CheckboxColor>,
    default: 'primary',
  },
  value: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
});

const emits = defineEmits(['update:modelValue']);
const model = useVModel(props, 'modelValue', emits);
</script>

<template>
  <label class="leading-none text-sm select-none cursor-pointer">
    <input
        v-model="model"
        type="checkbox"
        style="background-color: #fed801 !important"
        :class="{
        'accent-primary': color === 'primary',
        'accent-danger': color === 'danger',
        'accent-green-500': color === 'success',
        'accent-yellow-500': color === 'warning',
        'accent-gray-500': color === 'info',
      }"
        class="text-2xl cursor-pointer mr-2"
        :name="name"
        :value="value"
    />
    {{ label }}
  </label>
</template>
