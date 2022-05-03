<template>
  <div class="relative">
    <label :for="props.elementId" class="block mb-2 text-sm font-medium pb-5
      dark:text-moon-1 text-sun-blue">
          {{props.label}}
        <textarea type="email" :id="props.elementId" :rows="props.rows" class="border
        dark:border-moon-2 dark:bg-moon-3 dark:text-moon-1 dark:focus:bg-mid-navy
        dark:placeholder-moon-4
        border-sun-blue bg-sun-white text-sun-navy focus:bg-sun-turqi
        placeholder-mid-blue
        text-sm rounded-lg block w-full p-2.5"
        :placeholder="props.placeholder"
        @input="$emit('onInput', $event.target.value)"
        @focus="$emit('onFocus')"
        ></textarea>
    </label>
    <small v-if="props.model?.$dirty && model.$invalid"
      class="text-mid-red absolute bottom-0 left-4"
    >
      {{model.$errors[0]?.$message}}
    </small>
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
  label: {
    type: String,
    required: true,
  },
  model: {
    type: Object,
    required: true,
  },
  rows: {
    type: Number,
    default: 3,
  },
});
</script>
