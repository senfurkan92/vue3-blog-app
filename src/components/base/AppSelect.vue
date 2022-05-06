<template>
  <div class="relative">
    <label :for="props.elementId" class="block mb-2 text-sm font-medium
      dark:text-moon-1 text-sun-blue">
          {{props.label}}
        <select type="email" :id="props.elementId" class="border
        dark:border-moon-2 dark:bg-moon-3 dark:text-moon-1 dark:focus:bg-mid-navy
        dark:placeholder-moon-4
        border-sun-blue bg-sun-white text-sun-navy focus:bg-sun-turqi
        placeholder-mid-blue
        text-sm rounded-lg block w-full p-2.5"
        @change="$emit('onInput', $event.target.value)"
        @focus="$emit('onFocus')"
        >
          <option value="0" disabled selected>{{props.label}}</option>
          <option v-for="item, index in props.options"
            :key="index"
            :value="item.value"
          >
            {{item.text}}
          </option>
        </select>
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
  options: {
    type: Array,
    required: true,
  },
});
</script>
