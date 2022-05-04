<template>
  <div class="relative pb-5">
    <div class="block mb-2 text-sm font-medium
      dark:text-moon-1 text-sun-blue">
      {{props.label}}
    </div>
    <QuillEditor
        :placeholder="props.placeholder"
        @input="$emit('onInput', $event.target.innerHTML)"
        @focus="$emit('onFocus')"
    />
    <small v-if="props.model?.$dirty && model.$invalid"
      class="text-mid-red absolute bottom-0 left-4"
    >
      {{model.$errors[0]?.$message}}
    </small>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const props = defineProps({
  placeholder: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: true,
  },
  model: {
    type: Object,
    required: true,
  },
});
</script>
