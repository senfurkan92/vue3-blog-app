<template>
  <button @click="props.action"
    class="border dark:border-mid-white border-mid-white
    dark:text-mid-white text-mid-white
    py-2 px-3 rounded-lg"
    :class="{
      'bg-sun-red': props.deny,
      'bg-mid-blue': !props.deny,
    }"
  >
    {{props.content}}
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  deny: {
    type: Boolean,
    default: false,
  },
  action: {
    type: Function,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
});
</script>
