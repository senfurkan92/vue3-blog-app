<template>
  <AppBanner :items="bannerItems"></AppBanner>
  <div class="container mx-auto">
    <div class="relative h-96">
      <img class="w-full h-full object-contain"
        :src="`http://localhost:1076${post.imgPath}`"
        :alt="post.title"
      >
    </div>
    <div class="max-w-4xl mx-auto bg-white py-12 px-12 lg:px-24 -mt-32 relative z-10">
      <h2 class="mt-4 uppercase tracking-widest text-xs text-gray-600">
        {{post.createAt ? post.createAt.split('T')[0] : ''}}
      </h2>
      <h1 class="font-display text-2xl md:text-3xl text-gray-900 mt-4">
        {{post.title}}
      </h1>
      <div class="prose prose-sm sm:prose lg:prose-lg mt-6" v-html="post.content">
      </div>
      <h2 class="mt-4 w-full text-right uppercase tracking-widest text-xs text-gray-600">
        <a v-if="post.author" :href="`mailto:${post.author.email}`" class="lowercase">
          {{post.author.email}}
        </a>
      </h2>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import AppBanner from '@/components/base/AppBanner.vue';

const route = useRoute();

const bannerItems = computed(() => [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: `/posts/${route.params.tech}/${route.params.techId}`,
    title: route.params.tech.toUpperCase(),
  },
  {
    to: `/posts/${route.params.tech}/${route.params.techId}/${route.params.title}/${route.params.postId}`,
    title: route.params.title.toUpperCase(),
  },
]);

const store = useStore();

const post = ref({});
const fetchPost = async () => {
  const resp = await store.dispatch('post/fetchPost', Number(route.params.postId));
  if (resp.data) {
    post.value = resp.data;
  }
  console.log(post.value);
};

onMounted(() => fetchPost());
</script>
