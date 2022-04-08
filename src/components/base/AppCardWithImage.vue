<template>
  <div
    class="max-w-sm rounded-lg shadow-md border
    border-mid-blue
    dark:border-moon-2"
  >
    <router-link :to="props.to">
      <img class="rounded-t-lg"
        :src="props.imgSrc"
        :alt="props.imgAlt"/>
    </router-link>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight
          text-sun-navy dark:text-moon-1">
          {{props.title}}
        </h5>
      </a>
      <p class="mb-3 font-normal text-sun-blue dark:text-moon-2">
        {{props.description}}
      </p>
      <router-link
        href="#" :to="props.to"
        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center
        rounded-lg hfocus:ring-4
        focus:outline-none
        border dark:border-mid-red border-mid-navy
        dark:text-mid-red text-mid-white
        dark:bg-moon-5 bg-mid-blue"
      >
        Read more
        <svg
          class="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0
            01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </router-link>
    </div>
  </div>
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

<style></style>
