<template>
  <AppBanner :items="bannerItems"></AppBanner>
  <div class="container mx-auto flex flex-row flex-wrap lg:py-7 py-2 justify-center align-top"
    style=""
  >
      <div v-for="item, index in posts" :key="index" class="p-3">
        <AppCardWithImage
          :tech="item.tech"
          :id="item.id"
          :imgSrc="item.imgSrc"
          :imgAlt="item.imgAlt"
          :title="item.title"
          :description="item.description"
        >
        </AppCardWithImage>
      </div>
  </div>
</template>

<script setup>
import AppBanner from '@/components/base/AppBanner.vue';
import AppCardWithImage from '@/components/base/AppCardWithImage.vue';
import { computed, reactive } from 'vue';
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

const posts = reactive([
  {
    tech: 'Vue',
    id: 2,
    imgSrc: 'https://source.unsplash.com/random',
    imgAlt: 'random unsplash img',
    title: 'Curabitur placerat eu dolor eget interdum. Donec vestibulum nibh quis venenatis vulputate.',
    description: 'Duis sagittis libero at semper egestas. Integer metus sapien, ultrices non tellus id, viverra vehicula odio. Praesent mattis tempor efficitur. Phasellus euismod, tellus volutpat auctor venenatis, diam sapien volutpat eros, at viverra metus leo porttitor libero.',
  },
  {
    tech: 'Vue',
    id: 2,
    imgSrc: 'https://source.unsplash.com/random',
    imgAlt: 'random unsplash img',
    title: 'Curabitur placerat eu dolor eget interdum. Donec vestibulum nibh quis venenatis vulputate.',
    description: 'Duis sagittis libero at semper egestas. Integer metus sapien, ultrices non tellus id, viverra vehicula odio. Praesent mattis tempor efficitur. Phasellus euismod, tellus volutpat auctor venenatis, diam sapien volutpat eros, at viverra metus leo porttitor libero.',
  },
  {
    tech: 'Vue',
    id: 2,
    imgSrc: 'https://source.unsplash.com/random',
    imgAlt: 'random unsplash img',
    title: 'Curabitur placerat eu dolor eget interdum. Donec vestibulum nibh quis venenatis vulputate.',
    description: 'Duis sagittis libero at semper egestas. Integer metus sapien, ultrices non tellus id, viverra vehicula odio. Praesent mattis tempor efficitur. Phasellus euismod, tellus volutpat auctor venenatis, diam sapien volutpat eros, at viverra metus leo porttitor libero.',
  },
  {
    tech: 'Vue',
    id: 2,
    imgSrc: 'https://source.unsplash.com/random',
    imgAlt: 'random unsplash img',
    title: 'Curabitur placerat eu dolor eget interdum. Donec vestibulum nibh quis venenatis vulputate.',
    description: 'Duis sagittis libero at semper egestas. Integer metus sapien, ultrices non tellus id, viverra vehicula odio. Praesent mattis tempor efficitur. Phasellus euismod, tellus volutpat auctor venenatis, diam sapien volutpat eros, at viverra metus leo porttitor libero.',
  },
]);

</script>
