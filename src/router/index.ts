import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AppHome from '@/pages/AppHome.vue';
import store from '@/store';

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
  {
    path: '/admin',
    alias: ['/administrator', '/dashboard'],
    component: () => import('@/pages/admin/AppDashboard.vue'),
    name: 'dashboard',
    meta: {
      auth: true,
    },
  },
  {
    path: '/signup',
    alias: ['/register'],
    component: () => import('@/pages/admin/AppSignUp.vue'),
    name: 'signup',
  },
  {
    path: '/signin',
    alias: ['/login'],
    component: () => import('@/pages/admin/AppSignIn.vue'),
    name: 'signin',
  },
  {
    path: '/admin/blog',
    component: () => import('@/pages/admin/AppBlog.vue'),
    name: 'admin-blog',
    meta: {
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters['user/isAuthenticated']) {
    next('/signin');
  } else {
    next();
  }
});

export default router;
