import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/OfficialWebsite/Index.vue')
  },
  {
    path: '/about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/index',
    component: () => import('../views/OfficialWebsite/Index.vue')
  },
  {
    path: '/detail',
    component: () => import('../views/OfficialWebsite/Detail.vue')
  },
  {
    path: '/muscle',
    component: () => import('../views/OfficialWebsite/Muscle.vue')
  },
  {
    path: '/list_page',
    component: () => import('../views/OfficialWebsite/ListPage.vue')
  },
  {
    path: '/shooping',
    component: () => import('../views/OfficialWebsite/Shooping.vue')
  },
  {
    path: '/usercontrol',
    component: () => import('../views/User/UserControl.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
