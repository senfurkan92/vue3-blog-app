<template>
  <Layout>

    <!-- Header -->
    <template #header>
      <AppHeader></AppHeader>
    </template>

    <!-- Content -->
    <template #content>
      <main>
        <router-view></router-view>
      </main>
    </template>

    <!-- Footer -->
    <template #footer>
      <AppFooter></AppFooter>
    </template>

  </Layout>
</template>

<script setup>
import Layout from '@/components/layout/AppLayout.vue';
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import { useStore } from 'vuex';

const store = useStore();
store.dispatch('user/tokenCheck');
store.dispatch('category/fetchCategories');
</script>

<style>
  body {
    /* Foreground, Background */
    scrollbar-color: #457B9D #A8DADC;
  }
  body::-webkit-scrollbar {
    width: 5px;
  }
  body::-webkit-scrollbar-thumb { /* Foreground */
    background: #457B9D;
  }
  body::-webkit-scrollbar-track { /* Background */
    background: #A8DADC;
  }

  body {
    /* Foreground, Background */
    scrollbar-color: #457B9D #A8DADC;
  }
  .styled-scrollbars::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  .styled-scrollbars::-webkit-scrollbar-thumb { /* Foreground */
    background: #457B9D;
  }
  .styled-scrollbars::-webkit-scrollbar-track { /* Background */
    background: #A8DADC;
  }
</style>
