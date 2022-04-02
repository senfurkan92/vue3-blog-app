<template>
  <div class="2xl:container mx-auto">
    <div id="indicators-carousel" class="relative" data-carousel="static"
      style="width: 100%; aspect-ratio: 4 / 1"
    >
      <div class="overflow-hidden relative h-full">
        <template v-for="item, index in props.items" :key="index">
          <div
            class="duration-700 ease-in-out absolute inset-0
            transition-all transform translate-x-0 z-20 h-full"
            :data-carousel-item="index == 0 ? 'active': ''"
          >
            <img
              :src="item.src"
              class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              :alt="item.alt"
            />
          </div>
        </template>
      </div>

      <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
        <template v-for="index in props.items.length" :key="index">
          <button
            type="button"
            class="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
            aria-current="true"
            :aria-label="`Slide ${index}`"
            :data-carousel-slide-to="index-1"
          ></button>
        </template>
      </div>

      <button
        type="button"
        class="flex absolute top-0 left-0 z-30 justify-center items-center
        px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-prev=""
      >
        <span
          class="inline-flex justify-center items-center w-8 h-8 rounded-full
          sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30
          group-hover:bg-white/50 dark:group-hover:bg-gray-800/60
          group-focus:ring-4 group-focus:ring-white
          dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span class="hidden">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="flex absolute top-0 right-0 z-30 justify-center items-center
        px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-next=""
      >
        <span
          class="inline-flex justify-center items-center w-8 h-8 rounded-full
          sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30
          group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4
          group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span class="hidden">Next</span>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  items: Array<unknown>,
}>();

console.log(props.items);
</script>

<style scoped>
img {
  object-fit:cover;
  height: 100%;
  width: 100%;
}
</style>
