<template>
  <router-link :to="props.to"
    class="block p-6 max-w-sm rounded-lg shadow-md border
    border-mid-blue
    dark:border-moon-2">
    <h5 class="mb-2 text-2xl font-bold tracking-tight
      text-sun-navy dark:text-moon-1">
        {{ props.title }}
    </h5>
    <p class="font-normal text-sun-blue dark:text-moon-2">
        {{ props.description }}
    </p>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style>

</style>
