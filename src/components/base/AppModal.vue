<template>
    <div v-if="props.show">
        <div class="absolute top-0 left-0 z-20"
          style="height: 100vh; width: 100vw; background: rgb(0,0,0,0.3)">
        </div>
        <div class="fixed border rounded-l-lg px-10 py-5 overflow-x-hidden overflow-y-auto
          shadow-md z-30 styled-scrollbars"
          style="top: 10vh; left: 5vw; width: 90vw; background: white; height: 80vh">
            <button class="absolute border-sun-blue px-3 py-1 rounded-l-lg rounded-t-none
              right-0 top-0 bg-sun-red text-sun-white" @click="$emit('hide')"
            >
                X
            </button>
            <div class="border-b p-1">
                <div class=" text-xl text-center uppercase font-semibold pb-3">
                  {{props.title}}
                </div>
            </div>
            <div class="py-6">
                <slot name="body"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
});
</script>
