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

          <v-text-field
            label="Append"
            append-icon="search"
          ></v-text-field>
          <!-- <v-btn top :ripple="false" flat class="toolbar_list" exact router to="/login" color="grey lighten-1" active-class="black"
          v-if="!isAuthenticated">
            <v-icon>search</v-icon>
          </v-btn> -->
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
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
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
</style>
