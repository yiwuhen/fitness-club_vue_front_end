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
        component: () => import('../views/OfficialWebsite/Index.vue'),
        name: "首页",
        meta:{
          title:"健身吧——欢迎访问"
        }

      },
      {
        path: '/officialWebsite/train',
        component: () => import('../views/OfficialWebsite/Train.vue'),
        meta:{
          title:"健身吧——健身器械"
        }
      },
      {
        path: '/officialWebsite/shooping',
        component: () => import('../views/OfficialWebsite/Shooping.vue'),
        meta:{
          title:"健身吧——商城"
        }
      },
      {
        path: '/about',
        component: () => import('../views/AboutView.vue'),
        meta:{
          title:"健身吧——暂无"
        }
      },
      {
        path: '/index',
        component: () => import('../views/OfficialWebsite/Index.vue'),
        meta:{
          title:"健身吧——欢迎访问"
        }
      },
      {
        path: 'Shopping/detail',
        component: () => import('../views/OfficialWebsite/Detail.vue'),
        meta:{
          title:"健身吧——商品详情"
        }
      },
      {
        path: '/officialWebsite/muscle',
        component: () => import('../views/OfficialWebsite/Muscle.vue'),
        meta:{
          title:"健身吧——肌肉锻炼"
        }
      },{
        path: '/officialWebsite/diet',
        component: () => import('../views/OfficialWebsite/Diet.vue'),
        meta:{
          title:"健身吧——健康饮食"
        }

      },
      {
        path: '/list_page',
        component: () => import('../views/OfficialWebsite/ListPage.vue'),
        meta:{
          title:"健身吧——资讯"
        }
      },
      {
        path: '/usercontrol',
        component: () => import('../views/User/UserControl.vue'),
        meta:{
          title:"健身吧——个人中心"
        }
      },
      {
        path: '/reg',
        component: () => import('../views/User/Reg.vue'),
        meta:{
          title:"健身吧——欢迎注册"
        }
      },
      {
        path: '/login',
        component: () => import('../views/User/Login.vue'),
        meta:{
          title:"健身吧——欢迎登录"
        }
      },
      {
        path: '/kinniku',
        component: () => import('../views/OfficialWebsite/kinniku-9.vue'),
      },
      {
        path: '/article',
        component: () => import('../views/OfficialWebsite/ArticlesDetail.vue'),
        meta:{
          title:"健身吧——文章详情"
        }
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title //在全局后置守卫中获取路由元信息设置title
})


  export default router
