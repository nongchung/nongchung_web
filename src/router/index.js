import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import NonghwalDetail from '@/components/pages/NonghwalDetail'
import Register from '@/components/user/auth/Register'
import Login from '@/components/user/auth/Login'
import Mypage from '@/components/user/mypage/Mypage'
import Like from '@/components/user/mypage/Like'
import Myprofile from '@/components/user/mypage/Myprofile'
import Myhistory from '@/components/user/mypage/Myhistory'
import Search from '@/components/pages/SearchResult'

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
