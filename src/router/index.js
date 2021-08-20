import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/components/About.vue')
  }, 
  {
    path: '/login',
    name: 'Loguear',
    component: () => import('@/components/Loguear.vue')
  },
  {
    path: '/registrarse',
    name: 'registrarse',
    component: () => import('@/components/Registrarse.vue')
  },
  {
    path: '/nuevaCompra',
    name: 'Comprar',
    component: () => import('@/components/Comprar.vue')
  },
  {
    path: '/nuevaVenta',
    name: 'Vender',
    component: () => import('@/components/Vender.vue')
  },
  {
    path: '/estadoActual',
    name: 'EstadoActual',
    component: () => import('@/components/EstadoActual.vue')
  },
  {
    path: '/resultados',
    name: 'Resultados',
    component: () => import('@/components/resultados.vue')
  },
  {
    path: '/historial',
    name: 'Historial',
    component: () => import('@/components/Historial.vue')
  },
  {
    path: '/editartransaccion',
    name: 'EditarTransaccion',
    component: () => import('@/components/EditarTransaccion.vue')
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router