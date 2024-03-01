<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

interface Prop {
  isOpen: boolean
  isDefault?: boolean
  isClickOutside?: boolean
  classNameContent?: string
  title?: string
}

interface Emit {
  (e: 'closeModal'): void
}

const props = withDefaults(defineProps<Prop>(), {
  isOpen: false,
  isDefault: true,
  isClickOutside: false,
  classNameContent: '',
  title: ''
})

const emit = defineEmits<Emit>()
const closeModal = () => {
  emit('closeModal')
}

const handleCloseOutSide = () => {
  if (props.isClickOutside) {
    emit('closeModal')
  }
}
</script>
<template>
  <TransitionRoot appear :show="props.isOpen" as="template">
    <Dialog as="div" class="relative z-[50]" @close="handleCloseOutSide">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-500 ease-in-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <template v-if="isDefault">
              <DialogPanel
                :class="`w-full max-w-md p-4 pt-3 transform overflow-hidden rounded-md bg-white text-left align-middle shadow-xl transition-all ${props.classNameContent}`"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900 flex justify-between"
                  :class="{
                    'mb-4': props.title
                  }"
                >
                  <button @click="closeModal">
                    <font-awesome-icon icon="fa-solid fa-xmark" class="cursor-pointer" />
                  </button>
                  <h3 v-if="props.title">{{ props.title }}</h3>
                  <div class="w-[18px]"></div>
                </DialogTitle>
                <div class="w-full px-4 pb-4">
                  <slot />
                </div>
              </DialogPanel>
            </template>
            <template v-else>
              <DialogPanel>
                <slot name="content" />
              </DialogPanel>
            </template>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
