<template>
  <div class="relative">
    <label :for="props.elementId" class="block mb-2 text-sm font-medium
      dark:text-moon-1 text-sun-blue">
          {{props.label}}
        <input type="file" :id="props.elementId" :accept="props.accept" class="border
        dark:border-moon-2 dark:bg-moon-3 dark:text-moon-1 dark:focus:bg-mid-navy
        dark:placeholder-moon-4
        border-sun-blue bg-sun-white text-sun-navy focus:bg-sun-turqi
        placeholder-mid-blue
        text-sm rounded-lg block w-full p-2.5"
        :multiple="props.multiple"
        :placeholder="props.placeholder"
        @change="$emit('onInput', $event.target.files)"
        @focus="$emit('onFocus')"
        @click="$emit('onClick')"
        >
    </label>
    <small v-if="props.model?.$dirty && model.$invalid"
      class="text-mid-red absolute top-16 left-4"
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
  accept: {
    type: String,
    required: false,
  },
  multiple: {
    type: Boolean,
    required: false,
  },
});
</script>
