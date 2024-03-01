<script setup lang="ts">
import ErrorPage from '@/components/commons/page/ErrorPage.vue';
import { useAuthStore } from '@/stores/auth';
import { useI18n } from 'vue-i18n';
import { computed, ref } from 'vue';
import { useMeta } from 'vue-meta';

const { t } = useI18n();
const authStore = useAuthStore();

const meta = computed(() => ({
  title: t('403'),
}));
useMeta(meta);

const code = ref(403);

const redirect = computed(() => ({
  label: t('labels.home'),
  url: authStore.rootUrl,
}));
</script>

<template>
  <ErrorPage :code="code" :message="$t('messages.403')" :redirect="redirect" />
</template>
