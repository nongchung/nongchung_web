<template>
  <v-app>
    <!-- navigation -->
    <v-toolbar app flat fixed color="white">
      <router-link to="/" tag="a">
        <img src="./assets/logo_ex.png" height="30px" style="margin-top: 10px;">
      </router-link>
      <v-toolbar-title id="toolbar_title">농활청춘</v-toolbar-title>

        <!-- <div class="toolbar_text"> -->
          <v-btn top :ripple="false" flat class="toolbar_list" exact router to="#1" color="grey lighten-1" active-class="black">
            농활청춘소개
          </v-btn>
          <v-btn top :ripple="false" flat class="toolbar_list" exact router to="#2" color="grey lighten-1" active-class="black">
            포인트샵
          </v-btn>
          <v-btn top :ripple="false" flat class="toolbar_list" exact router to="#3" color="grey lighten-1" active-class="black">
            이용안내
          </v-btn>
      <v-spacer></v-spacer>
      <!-- 검색수정-->
      <v-text-field
        append-icon="mic"
        class="mx-3"
        flat
        label="Search"
        prepend-inner-icon="search"
        solo
      ></v-text-field>
          <v-btn top :ripple="false" flat class="toolbar_list" color="grey lighten-1" active-class="black"
          v-if="searchicon" @click="showSearch">
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
          </v-btn>
        <!-- </div> -->

    </v-toolbar>
    <!-- content -->
    <v-content>
      <router-view/>
    </v-content>
    <!-- footer -->
    <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <v-layout ma-4 px-5>
        <strong class="subheading ma-2 px-5">농촌에서 활짝피는 청춘, 농활청춘<br>&copy;2018 — <strong>nonghwal</strong></strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-2"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
</v-layout>
      </v-card-title>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      searchicon: true,
      icons: [
        'fab fa-facebook',
        'fab fa-instagram'
      ]
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
    },
    showSearch () {

    }
  }
}
</script>

<style scoped>
    /* layout 작업 */
    #toolbar_title{
      font-weight: 900;
      font-size: 2.3rem;
      margin-left: 5px;
      margin-top: 9px;
      color: darkblue;
    }
    .toolbar_list{
      font-size: 1.2rem;
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
    .v-input-slot:before{
      color: transparent !important;
    }
    .v-text-field__slot{
      border-bottom-color: white !important;
    }
    input{
      caret-color: black;
    }
</style>
