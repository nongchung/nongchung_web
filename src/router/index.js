import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import NonghwalDetail from '@/pages/NonghwalDetail'
import Search from '@/pages/Search'
import Apply from '@/pages/Apply'
import About from '@/pages/About'

import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Mypage from '@/pages/Mypage/Mypage'
import Myprofile from '@/pages/Mypage/Myprofile'
import Writereview from '@/pages/Review/Writereview'
import Editreview from '@/pages/Review/Editreview'
import FarmInfo from '@/pages/Nhpage/FarmInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
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
    path: '/Editreview/:idx',
    name: 'Editreview',
    component: Editreview
  },
  {
    path: '/Apply/:nhIdx/:schIdx/:selectedDate/:selectedNhName/:selectedNhAddr/:selectedNhImg',
    name: 'Apply',
    component: Apply
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/FarmInfo/:idx',
    name: 'FarmInfo',
    component: FarmInfo
  }
  ]
})
