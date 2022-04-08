<template>
  <div class="mb-6">
    <label :for="props.elementId" class="block mb-2 text-sm font-medium
      dark:text-moon-1 text-sun-blue">
        Your email
        <input type="email" :id="props.elementId" class="border
        dark:border-moon-2 dark:bg-moon-3 dark:text-moon-1 dark:focus:bg-mid-navy
        dark:placeholder-moon-4
        border-sun-blue bg-sun-white text-sun-navy focus:bg-sun-turqi
        placeholder-mid-blue
        text-sm rounded-lg block w-full p-2.5"
        :placeholder="props.placeholder">
    </label>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
    required: false,
  },
  elementId: {
    type: String,
    required: true,
  },
});
</script>
