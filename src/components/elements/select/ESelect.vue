<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useElementBounding } from '@vueuse/core'
import { computed, onMounted, onUnmounted, PropType, ref, watch, reactive } from 'vue'
import {
  InputAdornment,
  InputSize,
  InputVariant,
  SelectAdornment
} from '@/components/elements/input/Input.type'
import Label from '@/components/elements/label/ELabel.vue'
import TextField from '@/components/elements/text-field/TextField.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Option {
  value: string
  label: string
}

const props = defineProps({
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
  required: {
    type: Boolean,
    required: false,
    default: false
  },
  options: {
    type: Array as unknown as () => Array<Option>,
    required: false,
    default: () => []
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  },
  modelValue: {
    type: String,
    required: false,
    default: ''
  },
  adornment: {
    type: Object as PropType<SelectAdornment>,
    required: false,
    default: null
  },
  variant: {
    type: String as PropType<InputVariant>,
    default: 'outlined'
  },
  name: {
    type: String,
    required: false,
    default: ''
  },
  error: {
    type: String,
    required: false,
    default: ''
  },
  placeholder: {
    type: String,
    required: false,
    default: ''
  }
})

const selectAdornment = computed<InputAdornment | undefined>(() =>
  props.adornment
    ? {
        ...props.adornment,
        position: 'start'
      }
    : undefined
)
const emit = defineEmits(['update:modelValue', 'update:modelSelect'])

const selectionRef = ref<HTMLElement | null>(null)
const selectDropdownRef = ref(null)
const searchInput = ref(null)

const searchState = reactive({ text: '' })

const filteredOptions = computed(() => {
  if (!searchState.text) {
    return props.options
  }
  return props.options.filter((option) =>
    option.label.toLowerCase().includes(searchState.text.toLowerCase())
  )
})

const selectedOption = ref<Option | null>(
  props.options.find((option) => option.value === props.modelValue) || null
)
const isSelectOpen = ref(false)

const selectionWidth = computed(() => selectionRef.value?.offsetWidth || 0)
const selectionHeight = computed(() => selectionRef.value?.offsetHeight || 0)
const selectionX = computed(() => selectionRef.value?.offsetLeft || 0)
const selectionY = computed(() => selectionRef.value?.offsetTop || 0)

const { height: selectDropdownHeight } = useElementBounding(selectDropdownRef)

const isScrolled = ref(false)
const selectDropdownOffsetHeight = computed(() => {
  const offsetHeight = selectionY.value + selectionHeight.value
  if (offsetHeight && offsetHeight + selectDropdownHeight.value > window.innerHeight) {
    return offsetHeight - (offsetHeight + selectDropdownHeight.value - window.innerHeight)
  }
  return offsetHeight
})
const onToggleSelect = () => {
  if (props.disabled) {
    return
  }
  isSelectOpen.value = !isSelectOpen.value
  if (isSelectOpen.value) {
    document.addEventListener('click', onClickOutside)
  } else {
    document.removeEventListener('click', onClickOutside)
  }
}

const onClickOutside = (event: MouseEvent) => {
  if (selectionRef.value && !selectionRef.value.contains(event.target as Node)) {
    isSelectOpen.value = false
    document.removeEventListener('click', onClickOutside)
  }
}

const onSelectOption = (option: { value: string; label: string }) => {
  isSelectOpen.value = false
  selectedOption.value = option
  emit('update:modelValue', option.value)
}

const setSelectedOption = () => {
  selectedOption.value = props.options.find((option) => option.value === props.modelValue) || null
}

watch(
  () => props.modelValue,
  () => {
    setSelectedOption()
    emit(
      'update:modelSelect',
      selectedOption.value && selectedOption.value?.value ? selectedOption.value.value : ''
    )
  }
)

watch(
  () => props.options,
  () => {
    setSelectedOption()
  }
)

const onScroll = () => {
  isScrolled.value = true
}

onMounted(() => {
  document.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  document.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onClickOutside)
})

setSelectedOption()
</script>

<template>
  <div ref="selectionRef" class="w-full">
    <Label v-if="label" :label="label" :size="size" :required="required" />
    <div class="w-full relative cursor-pointer" tabindex="0">
      <div class="w-full" @click="onToggleSelect">
        <TextField
          class="cursor-pointer"
          :size="size"
          :required="required"
          :style="{
            'background-color': '#fff',
            cursor: 'pointer',
            pointerEvents: 'none'
          }"
          :variant="variant"
          :model-value="selectedOption?.label"
          :adornment="selectAdornment"
          :name="name"
          :error="error"
          :placeholder="placeholder"
        >
        </TextField>
      </div>
      <FontAwesomeIcon
        icon="chevron-down"
        class="absolute font-light pointer-events-none"
        :class="{
          'text-sm': size === 'small',
          'text-base': size === 'medium' || size === 'large',
          'top-2': size === 'small',
          'top-3.5': size === 'medium',
          'top-4': size === 'large',
          'right-2.5': size === 'small',
          'right-3.5': size === 'medium' || size === 'large'
        }"
      />

      <Transition name="selection-fade">
        <div
          v-if="isSelectOpen"
          ref="selectDropdownRef"
          class="shadow-lg bg-slate-50 rounded-md border z-10 overflow-hidden fixed overflow-y-auto"
          :style="{
            minWidth: selectionWidth + 'px',
            top: selectDropdownOffsetHeight + 'px',
            left: selectionX + 'px'
          }"
        >
          <TextField
            ref="searchInput"
            v-model="searchState.text"
            type="text"
            size="small"
            :placeholder="$t('labels.search')"
            class="w-full p-2"
          />

          <div
            v-if="options.length === 0"
            class="px-4 py-2 bg-slate-50 transition-all-ease-in-out cursor-pointer text-center select-none"
          >
            {{ t('labels.no_data') }}
          </div>

          <div class="select-dropdown">
            <div
              v-for="option in filteredOptions"
              :key="option.value"
              class="px-4 py-2 bg-slate-50 text-sm hover:!bg-gray-200 transition-all-ease-in-out cursor-pointer select-none transition"
              :class="selectedOption?.value === option.value ? '!bg-gray-200' : ''"
              @click="onSelectOption(option)"
            >
              {{ option.label }}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.selection-fade-enter-active,
.selection-fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.selection-fade-enter-from,
.selection-fade-leave-to {
  opacity: 0;
}

.selection-fade-enter-to,
.selection-fade-leave-from {
  opacity: 1;
}

.select-dropdown {
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  border-radius: 4px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &:hover::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
}
</style>
