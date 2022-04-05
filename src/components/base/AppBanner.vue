<template>
  <div class="p-5 bg-gray-500 text-center text-green-400 font-semibold text-lg">
    <template v-for="item, index in props.items" :key="index">
      <router-link :to="item.to">
        {{item.title}}
      </router-link>
      <span v-if="index != props.items.length-1">&nbsp;|&nbsp;</span>
    </template>
  </div>
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
