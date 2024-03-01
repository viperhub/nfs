<script setup lang="ts">
import { PropType } from 'vue';
import { InputSize} from "@/components/elements/input/Input.type";

defineProps({
  id: {
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
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div class="mb-1.5 ml-0.5">
    <label
        class="font-semibold"
        :class="{
        'text-xs': size === 'small',
        'text-sm': size === 'medium',
        'text-base': size === 'large',
      }"
        :for="id"
    >
      {{ label }}
      <span v-if="required" class="text-pink-500">{{
          $t('labels.required_icon')
        }}</span>
    </label>
  </div>
</template>
