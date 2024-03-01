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
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/404Page.vue')
    },
    {
      path: '/403',
      name: '403',
      component: () => import('@/views/403Page.vue')
    },
    {
      path: '/500',
      name: '500',
      component: () => import('@/views/500Page.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
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
