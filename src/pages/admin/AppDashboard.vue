<template>
  <div class="container mx-auto lg:p-10 md:p-5">
    <div class="text-right">
      <AppButton
        :deny="false"
        :content="'+'"
        :action="() => showModal = true"
      />
    </div>
  </div>
  <AppModal
    :show="showModal"
    @hide="showModal = false"
  >
    <template #body>
      <AppAddPost/>
    </template>
  </AppModal>
</template>

<script setup>
import AppButton from '@/components/base/AppButton.vue';
import AppModal from '@/components/base/AppModal.vue';
import AppAddPost from '@/components/admin/AppAddPost.vue';
import { ref } from 'vue';

const showModal = ref(true);

</script>

<style>

</style>
