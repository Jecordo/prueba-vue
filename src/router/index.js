import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: HomeView
    },*/
    { path: '/ContadorPrueba', name: 'ContadorPrueba', component: () => import('../modules/contador/components/ContadorPrueba.vue')},
    { path: '/ListaDeTareas', name: 'ListaDeTareas', component: () => import('../modules/listaTareas/components/ListaTareas.vue')},
     
  ]
})

export default router
