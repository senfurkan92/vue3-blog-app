<template>
  <router-link :to="props.to"
    class="flex flex-col items-center rounded-lg shadow-md
    md:flex-row md:max-w-xlhover:bg-gray-100 border
    border-mid-blue
    dark:border-moon-2"
  >
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none
      md:rounded-l-lg"
      :src="props.imgSrc"
      :alt="props.imgAlt"
    >
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight
          text-sun-navy dark:text-moon-1"
        >
          {{props.title}}
        </h5>
        <p class="mb-3 font-normal text-sun-blue dark:text-moon-2">
            {{props.description}}
        </p>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  imgAlt: {
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
