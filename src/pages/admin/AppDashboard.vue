<template>
  <div class="container mx-auto lg:p-10 md:p-5">
    <div class="text-right">
      <AppButton
        :deny="false"
        :content="'+ Category'"
        :action="() => showCategoryModal = true"
      />
      <AppButton
        :deny="false"
        :content="'+ Post'"
        :action="() => showPostModal = true"
      />
    </div>
  </div>
  <AppModal
    :title="'new category'"
    :show="showCategoryModal"
    @hide="showCategoryModal = false"
  >
    <template #body>
      <AppAddCategory/>
    </template>
  </AppModal>
  <AppModal
    :title="'new post'"
    :show="showPostModal"
    @hide="showPostModal = false"
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
import AppAddCategory from '@/components/admin/AppAddCategory.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';

const showPostModal = ref(false);
const showCategoryModal = ref(false);

const store = useStore();
store.dispatch('category/fetchCategories');
</script>

<style>

</style>
