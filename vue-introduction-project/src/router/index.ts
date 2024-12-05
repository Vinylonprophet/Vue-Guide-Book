import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/template-syntax',
      name: 'templatesyntax',
      component: () => import('../views/TemplateSyntaxView.vue'),
    },
    {
      path: '/response-basics',
      name: 'responsebasics',
      component: () => import('../views/ResponseBasicsView.vue'),
    },
    {
      path: '/computed-property',
      name: 'computedproperty',
      component: () => import('../views/ComputedPropertyView.vue'),
    },
    {
      path: '/class-style-binding',
      name: 'classstylebinding',
      component: () => import('../views/ClassStyleBindingView.vue'),
    },
    {
      path: '/conditional-renderding',
      name: 'conditionalrendering',
      component: () => import('../views/ConditionalRenderingView.vue'),
    },
    {
      path: '/list-renderding',
      name: 'listrendering',
      component: () => import('../views/ListRenderingView.vue'),
    },
    {
      path: '/event-handling',
      name: 'eventhandling',
      component: () => import('../views/EventHandlingView.vue'),
    },
    {
      path: '/form-input-binding',
      name: 'forminputbinding',
      component: () => import('../views/FormInputBindingView.vue'),
    }
  ],
})

export default router
