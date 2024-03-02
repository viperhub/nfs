import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      children: [
        {
          path: '',
          name: 'HomeView',
          component: () => import('@/views/HomePage.vue')
        }
      ]
    },
    {
      path: '/contact',
      name: 'AboutView',
      component: () => import('@/components/commons/layout/public/PublicLayout.vue'),
      children: [
        {
          path: '',
          name: 'AboutView',
          component: () => import('@/views/AboutPage.vue')
        }
      ]
    },
    {
      path: '/bao-gia',
      name: 'PricingView',
      component: () => import('@/components/commons/layout/public/PublicLayout.vue'),
      children: [
        {
          path: '',
          name: 'AboutView',
          component: () => import('@/views/PricePage.vue')
        }
      ]
    },
    {
      path: '/news',
      name: 'NewsView',
      component: () => import('@/components/commons/layout/public/PublicLayout.vue'),
      children: [
        {
          path: '',
          name: 'NewsView',
          component: () => import('@/views/BlogPage.vue')
        },
        {
          path: '01',
          name: 'Blog01',
          component: () => import('@/views/blog/Blog01Page.vue')
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
