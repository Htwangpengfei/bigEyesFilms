import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    redirect:'/home/hot',
    component: ()=>import('../views/Home.vue'),
    children:[{
      path:'hot',
      name:'HotMovie',
      component:()=>import('../views/home/HotMovie.vue')
    },{
      path:'will',
      name:'WillMovie',
      component:()=>import('../views/home/WillMovie.vue')
    },{
      path:'older',
      name:'OlderMovie',
      component:()=>import('../views/home/OlderMovie.vue')
    },{
      path:'cinema',
      name:'Cinema',
      component:()=>import('../views/home/Cinema.vue')
    },]
  },{
    path: '/video',
    name: 'Video',
    component: ()=>import('../views/MyVideo.vue')
  },{
    path: '/mine',
    name: 'Mine',
    redirect:'/mine/meituan',
    component: ()=>import('../views/Mine.vue'),
    children:[{
      path: 'meituan',
      name: 'meituan',
      component: ()=>import('../views/home/Meituan.vue')
    },{
      path: 'iphone',
      name: 'meituan',
      component: ()=>import('../views/home/iphone.vue')
    }]
  },{
    path: '/city',
    name: 'City',
    component: ()=>import('../views/City.vue')
  },{
    path: '/detail/:movieid',
    name: 'Detail',
    component: ()=>import('../views/Detail.vue')
  },{
    path: '*',
    redirect:'/home'
  },
]

const router = new VueRouter({
  routes
})

export default router;