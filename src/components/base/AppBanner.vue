<template>
  <nav class="flex py-3 px-5 text-gray-700 bg-gray-50 justify-center
    border border-gray-200 dark:bg-gray-700 dark:border-gray-700" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <template v-for="item, index in props.items" :key="index">
          <li :aria-current="index == props.items.length-1 ? 'page': ''">
            <div class="flex items-center">
              <svg v-if="index>0" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1
                0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd">
                </path>
              </svg>
              <router-link :to="item.to"
               class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2
                dark:text-gray-400 dark:hover:text-white">
                {{item.title.toUpperCase()}}
              </router-link>
            </div>
          </li>
        </template>
      </ol>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
