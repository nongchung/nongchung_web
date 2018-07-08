import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import NonghwalDetail from '@/pages/NonghwalDetail'
import Search from '@/pages/SearchResult'

import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Mypage from '@/pages/Mypage/Mypage'
import Like from '@/pages/Mypage/Like'
import Myprofile from '@/pages/Mypage/Myprofile'
import Myhistory from '@/pages/Mypage/Myhistory'
import Writereview from '@/pages/Review/Writereview'

Vue.use(Router)

export default new Router({
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
    path: '/Like',
    name: 'Like',
    component: Like
  },
  {
    path: '/Myhistory',
    name: 'Myhistory',
    component: Myhistory
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
    component: NonghwalDetail,
    prop: true
  },
  {
    path: '/Writereview',
    name: 'Writereview',
    component: Writereview
  }
  ]
})
