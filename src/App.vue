<script setup lang="ts"></script>

<template>
  <metainfo>
    <template #title="{ content }"> {{ content }} | {{ $t('labels.app_name') }} </template>
  </metainfo>
  <div class="app">
    <router-view />
  </div>
</template>
