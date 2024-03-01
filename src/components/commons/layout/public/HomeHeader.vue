<script setup lang="ts">
import EButton from '@/components/elements/button/EButton.vue'
</script>

<template>
  <section class="flex relative overflow-hidden font-poppins rounded-md">
    <video class="absolute inset-0 w-full h-full object-cover" autoplay muted loop>
      <source src="" type="video/mp4" />
    </video>
    <div
      data-aos="fade-left"
      data-aos-duration="500"
      class="flex w-full backdrop-blur-sm backdrop-saturate-600 bg-gray-700/30"
    >
      <div class="h-[70vh] flex items-center justify-center">
        <div class="container mx-auto">
          <div class="flex flex-wrap justify-center">
            <div class="w-full md:w-9/12 lg:w-9/12 rounded-md">
              <div class="mb-4">
                <h1 class="text-4xl font-bold text-orange-500">Giải pháp vận chuyển tin cậy</h1>
              </div>
              <div class="flex flex-wrap justify-start mb-4 space-x-4">
                <EButton
                  class="transform transition duration-500 hover:scale-125"
                  color="primary"
                  size="medium"
                  icon="shop"
                  @click="() => $router.push('/order')"
                >
                  {{ $t('labels.make_order') }}
                </EButton>
                <EButton
                  class="transform transition duration-500 hover:scale-125"
                  color="info"
                  size="medium"
                  icon="search"
                  @click="() => $router.push('/tracking')"
                >
                  Tra cứu
                </EButton>
              </div>
              <div class="mt-4 w-full md:w-2/4">
                <p
                  class="text-xl font-bold text-gray-50 transition duration-500 hover:text-orange-500"
                >
                  Chúng tôi cung cấp dịch vụ vận chuyển hàng hóa đa quốc gia đến tận tay khách hàng
                  với giá cả hợp lý và thời gian nhanh nhất.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
