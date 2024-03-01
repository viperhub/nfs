<script setup lang="ts">
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {useVModel} from '@vueuse/core';
import {nanoid} from 'nanoid';
import {PropType, ref} from 'vue';
import {
  InputAdornment,
  InputSize,
  InputVariant,
} from '@/components/elements/input/Input.type';
import Input from '@/components/elements/input/EInput.vue';
import Label from "@/components/elements/label/ELabel.vue";

const props = defineProps({
  checkNumberAndDash: {
    type: Boolean,
    required: false,
    default: false,
  },
  checkNumberWithComma: {
    type: Boolean,
    required: false,
    default: false,
  },
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
  adornment: {
    type: Object as PropType<InputAdornment>,
    required: false,
    default: null,
  },
  variant: {
    type: String as PropType<InputVariant>,
    default: 'outlined',
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
      <div
          v-if="adornment"
          class="flex justify-center items-center absolute h-full"
          :class="{
          'w-[14px]': adornment && size === 'small',
          'w-[16px]': adornment && size === 'medium',
          'w-[18px]': adornment && size === 'large',
          'left-2.5': adornment.position === 'start' && size === 'small',
          'left-3': adornment.position === 'start' && size === 'medium',
          'left-3.5': adornment.position === 'start' && size === 'large',
          'right-2.5': adornment.position === 'end' && size === 'small',
          'right-3': adornment.position === 'end' && size === 'medium',
          'right-3.5': adornment.position === 'end' && size === 'large',
        }"
      >
        <font-awesome-icon
            :icon="adornment.icon"
            :class="{ 'cursor-pointer': !!adornment.onClick, [adornment.class ? adornment.class : '']: !!adornment.class,}"
            @click="adornment.onClick && adornment.onClick()"
        />
      </div>
      <Input
          v-model="model"
          :for="id"
          :name="name"
          :size="size"
          :placeholder="placeholder"
          :disabled="disabled"
          :required="required"
          :type="type"
          :variant="variant"
          :maxlength="maxLength"
          :check-number-with-comma="checkNumberWithComma"
          :check-number-and-dash="checkNumberAndDash"
          :class="{
          'border-red-500': error && variant === 'outlined',
          '!pl-8':
            adornment && adornment.position === 'start' && size === 'small',
          '!pl-9':
            adornment && adornment.position === 'start' && size === 'medium',
          '!pl-10':
            adornment && adornment.position === 'start' && size === 'large',
          '!pr-8':
            adornment && adornment.position === 'end' && size === 'small',
          '!pr-9':
            adornment && adornment.position === 'end' && size === 'medium',
          '!pr-10':
            adornment && adornment.position === 'end' && size === 'large',
        }"
          @blur="emit('blur', $event)"
          @input="emit('input', $event)"
      />
    </div>
    <p v-if="error" class="text-xs text-red-500 mt-1">
      {{ error }}
    </p>
  </div>
</template>
