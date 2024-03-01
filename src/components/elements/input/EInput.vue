<script setup lang="ts">
import { PropType } from 'vue'
import { InputSize, InputVariant } from './Input.type'
import { useVModel } from '@vueuse/core'

const props = defineProps({
  checkNumberAndDash: {
    type: Boolean,
    required: false,
    default: false
  },
  checkNumberWithComma: {
    type: Boolean,
    required: false,
    default: false
  },
  name: {
    type: String,
    required: false,
    default: ''
  },
  label: {
    type: String,
    required: false,
    default: ''
  },
  size: {
    type: String as PropType<InputSize>,
    required: false,
    default: 'medium'
  },
  placeholder: {
    type: String,
    required: false,
    default: ''
  },
  required: {
    type: Boolean,
    required: false,
    default: false
  },
  modelValue: {
    type: String,
    required: false,
    default: ''
  },
  type: {
    type: String,
    required: false,
    default: 'text'
  },
  variant: {
    type: String as PropType<InputVariant>,
    default: 'outlined'
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  },
  maxLength: {
    type: Number,
    required: false,
    default: null
  }
})
const emit = defineEmits(['update:modelValue', 'blur', 'input'])

const model = useVModel(props, 'modelValue', emit)
</script>

<template>
  <input
    v-model="model"
    :name="name"
    class="me-input w-full outline-none rounded-md p-2"
    :class="{
      'h-8': size === 'small',
      'h-12': size === 'medium',
      'h-14': size === 'large',
      'text-sm': size === 'small',
      'text-base': size === 'medium',
      'text-lg': size === 'large',
      'border border-input-filled': variant === 'outlined',
      'bg-input-filled': variant === 'filled'
    }"
    :placeholder="placeholder"
    :required="required"
    :type="type"
    autocomplete="off"
    :disabled="disabled"
    :maxlength="maxLength"
    @blur="emit('blur', $event)"
    @input="emit('input', $event)"
  />
</template>

<style lang="scss" scoped>
.me-input {
  &:disabled {
    background-color: var(--color-bg-disabled);
    color: var(--color-text-disabled);
    cursor: not-allowed;
  }
}
</style>
