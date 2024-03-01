<script setup lang="ts">
import { PropType, ref } from 'vue'
import EModal from '@/components/elements/modal/EModal.vue'
import EButton from '@/components/elements/button/EButton.vue'

const props = defineProps({
  images: {
    type: Array as PropType<string[]>,
    required: true
  },
  open: {
    type: Boolean as PropType<boolean>,
    required: true
  }
})

const index = ref(0)

interface Emit {
  (e: 'close'): void
}

const emit = defineEmits<Emit>()

const nextImage = () => {
  if (index.value < props.images.length - 1) {
    index.value++
  }
}

const prevImage = () => {
  if (index.value > 0) {
    index.value--
  }
}
</script>

<template>
  <EModal :is-open="open" :is-click-outside="true" @close-modal="emit('close')">
    <div class="flex justify-center">
      <div class="flex flex-col items-center">
        <div class="flex justify-center">
          <img :src="images[index]" alt="" class="w-full h-full max-h-[80vh] max-w-[80vw]" />
        </div>
        <div v-if="images.length > 1" class="flex justify-center mt-4 space-x-4">
          <EButton :type="'primary'" :size="'small'" :disabled="index === 0" @click="prevImage">
            {{ $t('labels.prev') }}
          </EButton>

          <EButton
            :type="'primary'"
            :size="'small'"
            :disabled="index === images.length - 1"
            @click="nextImage"
          >
            {{ $t('labels.next') }}
          </EButton>
        </div>
      </div>
    </div>
  </EModal>
</template>
