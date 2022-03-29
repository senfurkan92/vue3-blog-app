<template>
  <AppCarousel :items="carouselItems"></AppCarousel>
</template>

<script setup>
import { reactive } from 'vue';
import AppCarousel from '@/components/common/AppCarousel.vue';

const carouselItems = reactive([
  {
    src: 'http://miyoshop.com/uploads/products/TEST2/0.png',
    alt: 'test2',
  },
  {
    src: 'http://miyoshop.com/uploads/products/TEST2/0.png',
    alt: 'test2',
  },
  {
    src: 'http://miyoshop.com/uploads/products/TEST2/0.png',
    alt: 'test2',
  },
]);
</script>
