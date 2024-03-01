<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import { nanoid } from 'nanoid';
import { PropType, ref } from 'vue';
import { InputSize, InputVariant } from '@/components/elements/input/Input.type';
import Label from '@/components/elements/label/ELabel.vue';

const props = defineProps({
  name: {
    type: String,
    required: false,
    default: '',
  },
  value: {
    type: String,
    required: false,
    default: '',
  },
  label: {
    type: String,
    required: false,
    default: '',
  },
  size: {
    type: String as PropType<InputSize>,
    required: false,
    default: 'medium',
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  maxLength: {
    type: Number,
    required: false,
    default: null,
  },
  modelValue: {
    type: String,
    required: false,
    default: '',
  },
  type: {
    type: String,
    required: false,
    default: 'text',
  },
  error: {
    type: String,
    required: false,
    default: '',
  },
  variant: {
    type: String as PropType<InputVariant>,
    default: 'outlined',
  },
  resize: {
    type: String as PropType<'vertical' | 'horizontal' | 'none'>,
    required: false,
    default: 'vertical',
  },
  rows: {
    type: Number,
    required: false,
    default: 3,
  },
});

const emit = defineEmits(['update:modelValue', 'blur', 'input']);

const model = useVModel(props, 'modelValue', emit);

const id = ref(nanoid(5));
</script>

<template>
  <div class="w-full">
    <Label
        v-if="label"
        :id="id"
        :label="label"
        :size="size"
        :required="required"
    />
    <div class="w-full relative">
      <textarea
          v-model="model"
          type="text"
          :name="name"
          :placeholder="placeholder"
          :disabled="disabled"
          :required="required"
          :maxlength="maxLength"
          :rows="rows"
          class="me-textarea w-full outline-none rounded-md p-2"
          :class="{
          'border-red-500': error && variant === 'outlined',
          'text-sm': size === 'small',
          'text-base': size === 'medium',
          'text-lg': size === 'large',
          'border border-input-filled': variant === 'outlined',
          'bg-input-filled': variant === 'filled',
          'resize-none': resize === 'none',
          'resize-vertical': resize === 'vertical',
          'resize-horizontal': resize === 'horizontal',
        }"
          autocomplete="off"
          @blur="emit('blur', $event)"
          @input="emit('input', $event)"
      />
    </div>
    <p v-if="error" class="text-xs text-red-500 mt-1">
      {{ error }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.me-textarea {
  &:disabled {
    background-color: var(--color-bg-disabled);
    color: var(--color-text-disabled);
    cursor: not-allowed;
  }
}
</style>
