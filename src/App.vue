<template>
  <Layout>

    <!-- Header -->
    <template #header>
      <AppHeader></AppHeader>
    </template>

    <!-- Content -->
    <template #content>
      <main class="mb-5">
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
</script>

<style>

</style>
