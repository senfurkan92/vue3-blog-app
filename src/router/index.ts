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
    path: '/posts/:tech/:techId',
    component: () => import('@/pages/posts/AppTech.vue'),
    name: 'posts-tech',
  },
  {
    path: '/posts/:tech/:techId/:title/:postId',
    component: () => import('@/pages/posts/AppPost.vue'),
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
    beforeEnter(to, from, next) {
      console.log(store.getters['user/isAuthenticated']);
      if (!store.getters['user/isAuthenticated']) {
        next();
      } else {
        next('/dashboard');
      }
    },
  },
  {
    path: '/signin',
    alias: ['/login'],
    component: () => import('@/pages/admin/AppSignIn.vue'),
    name: 'signin',
    beforeEnter(to, from, next) {
      if (!store.getters['user/isAuthenticated']) {
        next();
      } else {
        next('/dashboard');
      }
    },
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
