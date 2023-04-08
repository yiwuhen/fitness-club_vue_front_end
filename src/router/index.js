import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView,
    redirect: '/officialWebsite/index',
    children:[
      {
        path: '/officialWebsite/index',
        component: () => import('../views/OfficialWebsite/Index.vue')
      },
      {
        path: '/officialWebsite/train',
        component: () => import('../views/OfficialWebsite/Train.vue')
      },
      {
        path: '/officialWebsite/shooping',
        component: () => import('../views/OfficialWebsite/Shooping.vue')
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
        path: '/officialWebsite/muscle',
        component: () => import('../views/OfficialWebsite/Muscle.vue')
      },{
        path: '/officialWebsite/diet',
        component: () => import('../views/OfficialWebsite/Diet.vue')
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
      },
      {
        path: '/reg',
        component: () => import('../views/User/Reg.vue')
      },
      {
        path: '/login',
        component: () => import('../views/User/Login.vue')
      },
      {
        path: '/kinniku',
        component: () => import('../views/OfficialWebsite/kinniku-9.vue')
      },
      {
        path: '/article',
        component: () => import('../views/OfficialWebsite/ArticlesDetail.vue')
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
