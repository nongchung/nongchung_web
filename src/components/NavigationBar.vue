<template>
  <v-toolbar app flat fixed color="white">
      <v-toolbar-title id="toolbar_title" style="margin-right: 1vw;">
        <!-- <router-link to="/" tag="a" class="hidden-sm-and-up">
                <img src="../assets/logo_ex.png" height="30px" style="margin-top: 10px;">농활청춘
      </router-link> -->
        <router-link to="/" tag="a" >
                <img src="../assets/logo_ex.png" height="35px" style="margin-top: 10px;">
      농활청춘
      </router-link>
      </v-toolbar-title>
      <v-layout class="hidden-xs-only">
          <v-btn top :ripple="false" flat class="toolbar_list" exact router to="#1" color="grey lighten-1" active-class="black" style="padding-left: 20px !important;">
            농활청춘소개
          </v-btn>
          <v-btn top :ripple="false" flat class="toolbar_list" exact router to="#2" color="grey lighten-1" active-class="black">
            포인트샵
          </v-btn>
          <v-btn top :ripple="false" flat class="toolbar_list" exact router to="#3" color="grey lighten-1" active-class="black">
            이용안내
          </v-btn>
      <v-spacer></v-spacer>
      <v-flex sm3 md2 lg2>
      <v-text-field
        append-icon="search"
        class="search_bar mx-3"
        flat
        placeholder="농활 검색"
        solo
        color="black"
        autofocus
        v-if="searchbar"
        @blur="searchicon=true, searchbar=false"
      ></v-text-field></v-flex>
          <v-btn top :ripple="false" flat class="toolbar_list" color="grey lighten-1" active-class="black"
          v-if="searchicon" @click="searchicon=false, searchbar=true">
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn top :ripple="false" flat class="toolbar_list" exact router to="/login" color="grey lighten-1" active-class="black"
          v-if="!isAuthenticated">
            로그인
          </v-btn>
          <v-btn top :ripple="false" flat class="toolbar_list" exact router to="/register" color="grey lighten-1" active-class="black"
          v-if="!isAuthenticated">
            회원가입
          </v-btn>
          <v-btn top :ripple="false" flat class="toolbar_list" exact router to="/mypage" color="grey lighten-1" active-class="black"
          v-if="isAuthenticated">
            마이페이지
          </v-btn>
          <v-btn top :ripple="false" flat class="toolbar_list" exact @click="logout" color="grey lighten-1" active-class="black"
          v-if="isAuthenticated">
            로그아웃
          </v-btn></v-layout>
          <v-spacer class="hidden-sm-and-up"></v-spacer>
          <v-icon @click="navdrawer=!navdrawer" class="hidden-sm-and-up">menu</v-icon>

    </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      searchicon: true,
      searchbar: false,
      navdrawer: false
    }
  },
  computed: {
    ...mapGetters([
      'isAuthenticated'
    ])
  },
  methods: {
    logout () {
      const isOut = confirm('로그아웃 하시겠습니까?')
      if (isOut) {
        this.$store.dispatch('logout')
      }
    }
  }
}
</script>

<style scoped>
 #toolbar_title{
      font-weight: 900;
      font-size: 2.3rem;
      /* margin-top: 9px; */
      overflow: visible;
    }
    .toolbar_list{
      font-size: 1rem;
    }
    .v-btn--active:before,.v-btn:focus:before,.v-btn:hover:before{
      background-color:transparent !important;
      }
    .v-btn:before,.v-btn:focus:before,.v-btn:hover:before{
      background-color:transparent !important;
      }
    .black{
      color: black !important;
    }
    .toolbar_text{
      margin-top: 1rem;
      font-weight:800;
    }
    /* .application.theme--light{
      background: #fff !important;
    } */
    /* .v-input-slot:before{
      color: transparent !important;
    }
    .v-text-field__slot{
      border-bottom-color: white !important;
    }
    .v-input__is-focus{
      caret-color: black;
    } */
    .search_bar, .search_bar:active{
      font-size: .9rem !important;
      border-bottom: 1px solid black !important;
      height: 40px !important;
      margin-top: 23px !important;
    }
    a{
      text-decoration: none;
      color:darkblue;
    }
</style>
