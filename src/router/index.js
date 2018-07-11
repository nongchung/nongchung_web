import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import NonghwalDetail from '@/pages/NonghwalDetail'
import Search from '@/pages/SearchResult'
import Apply from '@/pages/Apply'

import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Mypage from '@/pages/Mypage/Mypage'
import Myprofile from '@/pages/Mypage/Myprofile'
import Writereview from '@/pages/Review/Writereview'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBhavior () {
    return {x: 0, y: 0}
  },
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Mypage',
    name: 'Mypage',
    component: Mypage
  },
  {
    path: '/Myprofile',
    name: 'Myprofile',
    component: Myprofile
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search
  },
  {
    path: '/Detail/:idx',
    name: 'Detail',
    component: NonghwalDetail
  },
  {
    path: '/Writereview',
    name: 'Writereview',
    component: Writereview
  },
  {
    path: '/Apply/:nhIdx/:schIdx/:selectedDate/:selectedNhName/:selectedNhAddr/:selectedNhImg',
    name: 'Apply',
    component: Apply
  }
  ]
})
