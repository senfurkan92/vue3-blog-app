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
</script>

<style>

</style>
