import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AppHome from '@/pages/AppHome.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: ['/home'],
    component: AppHome,
    name: 'home',
  },
  {
    path: '/posts',
    component: () => import('@/pages/posts/AppPosts.vue'),
    name: 'posts',
  },
  {
    path: '/posts/:tech',
    component: () => import('@/pages/posts/_tech.vue'),
    name: 'posts-tech',
  },
  {
    path: '/posts/:tech/:id',
    component: () => import('@/pages/posts/_id.vue'),
    name: 'posts-post',
  },
  {
    path: '/about',
    alias: ['/aboutus', '/about-us'],
    component: () => import('@/pages/AppAbout.vue'),
    name: 'about',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
