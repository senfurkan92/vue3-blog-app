<template>
  <AppBanner :items="bannerItems"></AppBanner>
  <div class="container mx-auto lg:py-10 py-5">
    <div class="flex flex-col">
      <div class="md:pb-10 pb-5">a</div>
      <div class="md:pb-10 pb-5">
        <AppTimeline></AppTimeline>
      </div>
      <div class="md:pb-10 pb-5">
        <AppInput :elementId="'input'"></AppInput>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppBanner from '@/components/base/AppBanner.vue';
import AppTimeline from '@/components/base/AppTimeline.vue';
import AppInput from '@/components/base/AppInput.vue';

const bannerItems = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '/about',
    title: 'about',
  },
];
</script>
