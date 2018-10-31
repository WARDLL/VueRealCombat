import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    // 动态路由
    // 前面必须是/detail 后面是一个参数放到id的变量里
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],
  // 解决滚动行为
  // 每一次路由切换时，让新显示的页面X为0Y也为0
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
