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
    <div class=" mt-8">
      <div>
        <ul class="flex flex-wrap text-sm font-medium text-center text-sun-blue border-b
        border-sun-blue dark:border-moon-1 dark:text-gray-400 mb-8">
          <li class="mr-2">
            <a href="#" aria-current="page" class="inline-block p-4 rounded-t-lg"
             :class="whetherActive(AppTableCategory)"
             @click="compTable=AppTableCategory"
            >
              Categories
            </a>
          </li>
          <li class="mr-2">
            <a href="#" aria-current="page" class="inline-block p-4 rounded-t-lg
             bg-sun-white text-sun-blue dark:bg-moon-4 dark:text-moon-1
             active:bg-sun-blue active:text-sun-white dark:active:bg-moon-1 dark:active:text-moon-4"
             :class="whetherActive(AppTablePost)"
             @click="compTable=AppTablePost"
            >
              Posts
            </a>
          </li>
        </ul>
      </div>
      <component :is="compTable">
      </component>
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
import AppTableCategory from '@/components/admin/AppTableCategory.vue';
import AppTablePost from '@/components/admin/AppTablePost.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';

const showPostModal = ref(false);
const showCategoryModal = ref(false);
const compTable = ref(AppTableCategory);

const whetherActive = (comp) => {
  // eslint-disable-next-line no-underscore-dangle
  const status = comp.__file === compTable.value.__file;
  return {
    'bg-sun-blue': status,
    'text-sun-white': status,
    'dark:bg-moon-1': status,
    'dark:text-moon-4': status,
    'bg-sun-white': !status,
    'text-sun-blue': !status,
    'dark:bg-moon-4': !status,
    'dark:text-moon-1': !status,
  };
};

const store = useStore();
store.dispatch('category/fetchCategories');
store.dispatch('post/fetchPosts');
</script>

<style>

</style>
