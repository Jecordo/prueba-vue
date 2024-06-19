import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: HomeView
    },*/
    { path: '/ContadorPrueba', name: 'ContadorPrueba', component: () => import('../components/ContadorPrueba.vue')},
    { path: '/ListaDeTareas', name: 'ListaDeTareas', component: () => import('../components/ListaTareas.vue')},
     
  ]
})

export default router
