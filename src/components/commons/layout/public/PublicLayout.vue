<script setup lang="ts">
import NavBar from '@/components/commons/layout/public/NavBar.vue'
import FooterContent from '@/components/commons/layout/public/FooterContent.vue'
</script>

<template>
  <div class="h-screen">
    <NavBar />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-y-auto">
      <router-view />
    </div>

    <div>
      <FooterContent />
    </div>
  </div>
</template>
