<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700
        dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Category name
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <template v-for="category in $store.state.category.list" :key="category.id">
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700
            hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900
                dark:text-white whitespace-nowrap">
                    {{ category.name }}
                </th>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500
                    hover:underline mr-4">
                        Edit
                    </a>
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500
                      hover:underline"
                      @click.prevent="deleteCategory(category.id)"
                    >
                        Delete
                    </a>
                </td>
              </tr>
            </template>
        </tbody>
    </table>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const deleteCategory = async (id) => {
  const resp = await store.dispatch('category/deleteCategory', id);
  if (resp.data) {
    await store.commit('post/removeByCategory', id);
  }
};
</script>
