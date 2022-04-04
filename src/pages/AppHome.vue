<template>
  <AppCarousel :items="carouselItems"></AppCarousel>
  <div class="container mx-auto">
    <!-- Posts intro -->
    <div class="lg:p-10 p-6 grid lg:grid-cols-3 grid-cols-1 gap-4">
      <div class="lg:col-span-2 lg:border-r-2 border-slate-700 px-5">
        <h2 class="capitalize text-2xl font-semibold text-center">
          -- most recent posts --
        </h2>
        <div class="flex flex-col">
          <div class="py-10" v-for="item, index in recentPosts" :key="index">
            <AppHorizontalCard
              :tech="item.tech"
              :id="item.id"
              :imgSrc="item.imgSrc"
              :imgAlt="item.imgAlt"
              :title="item.title"
              :description="item.description"
            >
            </AppHorizontalCard>
          </div>
        </div>
      </div>
      <div class="lg:col-span-1 lg:mt-0 mt-10">
        <h2 class="capitalize text-2xl font-semibold text-center">
          -- most read posts --
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import AppCarousel from '@/components/common/AppCarousel.vue';
import AppHorizontalCard from '@/components/base/AppHorizontalCard.vue';

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

const recentPosts = reactive([
  {
    tech: 'Vue',
    id: '2',
    imgSrc: 'https://source.unsplash.com/random/300x400',
    imgAlt: 'random unsplash img',
    title: 'Curabitur placerat eu dolor eget interdum. Donec vestibulum nibh quis venenatis vulputate.',
    description: 'Duis sagittis libero at semper egestas. Integer metus sapien, ultrices non tellus id, viverra vehicula odio. Praesent mattis tempor efficitur. Phasellus euismod, tellus volutpat auctor venenatis, diam sapien volutpat eros, at viverra metus leo porttitor libero.',
  },
]);
</script>
