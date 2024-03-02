<script setup lang="ts">
import SessionContent from '@/components/commons/layout/public/SessionContent.vue'
const goToMarket = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <SessionContent title="Nhấn vào thị trường phù hợp để xem bảng giá" description="">
    <div class="grid grid-cols-3 gap-6 px-4 py-4 mx-auto md:grid-cols-3 lg:grid-cols-3 lg:gap-8">
      <div
        class="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
        @click="
          goToMarket(
            'https://docs.google.com/document/d/14A_3KyiI5WaFbqKUbsrnDcOV8u985l1PFzdMNruDM_Q/edit'
          )
        "
      >
        <div
          class="relative m-1 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/640px-Flag_of_Thailand.svg.png"
            alt="ui/ux review check"
          />
          <div
            class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"
          ></div>
        </div>
      </div>
      <div
        class="relative flex rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
        @click="
          goToMarket(
            'https://docs.google.com/document/d/1n3rYKbJ2-8EDSMTOFJnFZavfZVSjVdKGsVnHqwJG-oI/edit'
          )
        "
      >
        <div
          class="relative m-1 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Malaya.svg/500px-Flag_of_Malaya.svg.png"
            alt="ui/ux review check"
            class="object-cover w-full h-full"
          />
          <div
            class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"
          ></div>
        </div>
      </div>
      <div
        class="relative flex rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
        @click="
          goToMarket(
            'https://docs.google.com/document/d/1vdveYj9i4MnqITwsB2HOr1cDXZi6WVIeUVaMnDsnLV0/edit'
          )
        "
      >
        <div
          class="relative m-1 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/800px-Flag_of_the_Philippines.svg.png"
            alt="ui/ux review check"
            class="object-cover w-full h-full"
          />
          <div
            class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"
          ></div>
        </div>
      </div>
    </div>
  </SessionContent>
</template>
