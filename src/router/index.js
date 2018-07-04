import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import NonghwalDetail from '@/pages/NonghwalDetail'
import Search from '@/pages/SearchResult'

import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Mypage from '@/pages/Mypage/Mypage'

// 지원아 여기 세 줄이 계속 오류떠서 보니까
// 니가 pages에 만들어둔 Mypage폴더에 Like, Myprofile, Myhistory가 없어서 그렇다고 해서
// 일단 내가 저 세개 컴포넌트 임의로 만들었거던 , 너가 보고 수정해줘!
import Like from '@/pages/Mypage/Like'
import Myprofile from '@/pages/Mypage/Myprofile'
import Myhistory from '@/pages/Mypage/Myhistory'

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
