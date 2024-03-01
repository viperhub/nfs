<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { PropType } from 'vue';
import { ButtonColor, ButtonSize, ButtonVariant } from './Button.type';

defineProps({
  color: {
    type: String as PropType<ButtonColor>,
    default: 'primary',
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'medium',
  },
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'contained',
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  iconButton: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <button
      :class="{
      'btn-contained shadow bg-primary text-primary-text border border-transparent':
        color === 'primary' && variant === 'contained',
      'btn-contained shadow bg-danger text-white border border-danger':
        color === 'danger' && variant === 'contained',
      'btn-contained shadow bg-blue-500 text-white border border-blue-500':
        color === 'success' && variant === 'contained',
      'btn-contained shadow bg-yellow-500 text-white border-yellow-500':
        color === 'warning' && variant === 'contained',
      'btn-contained bg-gray-100 text-text-primary border-gray-500':
        color === 'info' && variant === 'contained',
      'btn-contained bg-gray-400 text-white border-gray-400':
        color === 'default' && variant === 'contained',

      'btn-outlined shadow text-primary border border-primary hover:bg-gray-50':
        color === 'primary' && variant === 'outlined',
      'btn-outlined shadow text-danger border border-danger hover:bg-gray-50':
        color === 'danger' && variant === 'outlined',
      'btn-outlined shadow text-green-500 border border-green-500 hover:bg-gray-50':
        color === 'success' && variant === 'outlined',
      'btn-outlined shadow text-yellow-500 border border-yellow-500 hover:bg-gray-50':
        color === 'warning' && variant === 'outlined',
      'btn-outlined text-gray-500 border border-gray-500 hover:bg-gray-50':
        color === 'info' && variant === 'outlined',
      'btn-outlined text-gray-400 border border-gray-400 hover:bg-gray-50':
        color === 'default' && variant === 'outlined',

      'btn-text text-primary border border-transparent hover:border hover:border-primary':
        color === 'primary' && variant === 'text',
      'btn-text text-danger border border-transparent hover:border hover:border-danger':
        color === 'danger' && variant === 'text',
      'btn-text text-green-500 border border-transparent hover:border hover:border-green-500':
        color === 'success' && variant === 'text',
      'btn-text text-yellow-500 border border-transparent hover:border hover:border-yellow-500':
        color === 'warning' && variant === 'text',
      'btn-text text-gray-500 border border-transparent hover:border hover:border-gray-500':
        color === 'info' && variant === 'text',
      'btn-text text-gray-400 border border-transparent hover:border hover:border-gray-400':
        color === 'default' && variant === 'text',

      'py-0.5 px-3 text-[10px]': size === 'xsmall' && !iconButton,
      'py-1.5 px-4 text-xs': size === 'small' && !iconButton,
      'py-2 px-4 text-sm': size === 'medium' && !iconButton,
      'py-3 px-5': size === 'large' && !iconButton,

      'h-[20px] w-[20px] text-[10px]': size === 'xsmall' && iconButton,
      'h-[28px] w-[28px] text-xs': size === 'small' && iconButton,
      'h-[36px] w-[36px] text-sm': size === 'medium' && iconButton,
      'h-[48px] w-[48px]': size === 'large' && iconButton,

      'rounded-full': rounded,
      'rounded-md': !rounded,
    }"
      class="shared-btn"
  >
    <span
        v-if="icon"
        :class="{
        'mr-3': $slots.default,
      }"
    >
      <FontAwesomeIcon :icon="icon" />
    </span>
    <slot v-if="!iconButton" />
  </button>
</template>

<style lang="scss" scoped>
.shared-btn {
  transition: all 0.2s ease-in-out;

  &.btn-contained:hover {
    filter: brightness(95%);
  }
}
</style>
