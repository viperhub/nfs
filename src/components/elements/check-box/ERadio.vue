<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import { PropType } from 'vue';

const props = defineProps({
  modelValue: {
    type: String as PropType<string>,
    default: '',
  },
  name: {
    type: String as PropType<string>,
    default: '',
  },
  label: {
    type: String as PropType<string>,
    default: '',
  },
  value: {
    type: String as PropType<string>,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);
const model = useVModel(props, 'modelValue', emit);
</script>

<template>
  <label class="kaopass-radio flex">
    <input v-model="model" type="radio" :name="name" :value="value" />
    <span v-if="!$slots.default" class="text-sm pl-2">{{ label }}</span>
    <slot v-else />
  </label>
</template>

<style lang="scss" scoped>
.kaopass-radio {
  cursor: pointer;

  input[type='radio'] {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid var(--color-radio-border);
    background-color: #fff;
    transition: all 0.2s ease-in-out;
    appearance: none;
    outline: none;
    position: relative;
    cursor: pointer;

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 9px;
      height: 9px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      border: 1px solid var(--color-radio-border);
      background-color: var(--color-radio);
      transition: all 0.2s ease-in-out;
    }

    &:checked {
      &::after {
        background-color: var(--color-radio-active);
      }
    }
  }
}
</style>
