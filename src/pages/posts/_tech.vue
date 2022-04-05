<template>
  <AppBanner :items="bannerItems"></AppBanner>
  <div>
      Posts/{{$route.params.tech}}
  </div>
</template>

<script setup>
import AppBanner from '@/components/base/AppBanner.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const bannerItems = computed(() => [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: `/posts/${route.params.tech}`,
    title: route.params.tech.toUpperCase(),
  },
]);
</script>
