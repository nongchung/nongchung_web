import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home'
import NonghwalDetail from '@/components/pages/NonghwalDetail'
import Search from '@/components/pages/SearchResult'

import Register from '@/components/pages/Register'
import Login from '@/components/pages/Login'
import Mypage from '@/components/pages/Mypage/Mypage'
import Like from '@@/components/pages/Mypage/Like'
import Myprofile from '@/components/pages/Mypage/Myprofile'
import Myhistory from '@/components/pages/Mypage/Myhistory'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
    }
  ]
})
