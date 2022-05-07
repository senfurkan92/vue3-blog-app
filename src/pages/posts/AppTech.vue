<template>
  <AppBanner :items="bannerItems"></AppBanner>
  <div class="container mx-auto flex flex-row flex-wrap lg:py-7 py-2 justify-center align-top">
      <div v-for="item, index in posts" :key="index" class="p-3">
        <AppCardWithImage
          :to="item.to"
          :imgSrc="item.imgSrc"
          :imgAlt="item.imgAlt"
          :title="item.title"
          :description="item.description"
        >
        </AppCardWithImage>
      </div>
  </div>
</template>

<script setup>
import AppBanner from '@/components/base/AppBanner.vue';
import AppCardWithImage from '@/components/base/AppCardWithImage.vue';
import {
  computed,
  ref,
  watch,
  onMounted,
} from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
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
]);

const posts = ref([]);

const fetchPost = async () => {
  const resp = await store.dispatch('post/fetchPostsByCategory', Number(route.params.techId));
  if (resp.data) {
    const relatedPosts = resp.data.map((x) => ({
      to: `/posts/${route.params.tech}/${route.params.techId}/${x.title}/${x.id}`,
      imgSrc: `http://localhost:1076${x.imgPath}`,
      imgAlt: x.title,
      title: x.title,
      description: x.caption,
    }));
    posts.value = [...relatedPosts];
  }
};

onMounted(() => fetchPost());

watch(
  () => route.params,
  () => {
    if (route.params.techId) {
      fetchPost();
    }
  },
  {
    deep: true,
  },
);
</script>
