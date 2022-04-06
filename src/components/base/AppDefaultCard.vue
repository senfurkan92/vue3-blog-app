<template>
  <router-link :to="props.to"
    class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md
  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ props.title }}
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
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
