<script setup lang="ts">
import { ImageUploadItem } from '@/models/ImageUploadItem'
import { IMAGE_ACCEPTED_TYPES } from '@/constants/storage'
import { ref } from 'vue'
import { useFileStore } from '@/stores/file'

const fileStore = useFileStore()

const props = defineProps({
  modelValue: {
    type: Array as () => ImageUploadItem[],
    required: true
  },
  name: {
    type: String,
    required: false,
    default: 'image'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  isMultiple: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:modelValue'])

const images = ref<ImageUploadItem[]>(props.modelValue)

const onFileInputChange = (event: Event) => {
  const input = event.target as HTMLInputElement

  if (input.files) {
    const files = Array.from(input.files)

    files.forEach((file) => {
      const reader = new FileReader()

      reader.onload = async () => {
        if (!file) return
        const formData = new FormData()
        formData.append('file', file)
        await fileStore.upload(formData)

        images.value.push({
          url: fileStore.file,
          file
        })

        if (!props.isMultiple) {
          images.value = images.value.slice(-1)
        }
        emit('update:modelValue', images.value)
      }

      reader.readAsDataURL(file)
    })
  }

  input.value = ''
}

const removeImage = (index: number) => {
  images.value.splice(index, 1)
  emit('update:modelValue', images.value)
}
</script>

<template>
  <div class="flex">
    <div class="flex flex-wrap items-center">
      <div v-for="(image, index) in images" :key="index" class="relative mr-2 mb-2">
        <img :src="image.url" class="w-24 h-24 object-cover" alt="image" />
        <button
          v-if="!disabled"
          type="button"
          class="absolute top-0 right-0 text-red-500 leading-none"
          @click="removeImage(index)"
        >
          <font-awesome-icon :icon="['fas', 'circle-minus']" />
        </button>
      </div>
      <div v-if="!disabled" class="flex items-center mb-2">
        <label :for="name + '-file-input'" class="px-2 py-1 rounded cursor-pointer bg-slate-100">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </label>
        <input
          :id="name + '-file-input'"
          :ref="name + '-file-input'"
          :name="name"
          type="file"
          multiple
          :accept="IMAGE_ACCEPTED_TYPES"
          :hidden="true"
          @change="onFileInputChange"
        />
      </div>
    </div>
  </div>
</template>
