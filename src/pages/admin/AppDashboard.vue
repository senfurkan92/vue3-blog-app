<template>
  <div class="container mx-auto lg:p-10 md:p-5">
    <div class="text-right">
      <AppButton
        :deny="false"
        :content="'+'"
        :action="() => $router.push('/blog')"
      />
    </div>
  </div>
</template>

<script setup>
import AppButton from '@/components/base/AppButton.vue';

</script>

<style>

</style>
