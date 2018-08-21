<template>
  <v-toolbar color="white" style="box-shadow:none">
    <v-toolbar-title id="toolbar_title">
      <router-link to="/" tag="a">
        <v-layout style="padding-top:1rem;">
          <v-flex style="padding-top:.5rem;"><img src="../../static/logo@2x.png" height="40vh"></v-flex>
          <v-flex ml-2 style="padding-top:.2rem;">농활청춘</v-flex>
        </v-layout>
      </router-link>
      </v-toolbar-title>
      <v-layout class="hidden-xs-only">
        <v-spacer></v-spacer>
          <v-btn top :ripple="false" flat class="toolbar_list" color="grey lighten-1" active-class="black" router to="/search">
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn top :ripple="false" flat class="toolbar_list" exact router to="/about" color="grey lighten-1" active-class="black" style="padding-left: 20px !important;">
            농활청춘소개
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
          <!-- <v-spacer class="hidden-sm-and-up"></v-spacer>
          <v-menu>
            <v-btn slot="activator" flat><v-icon @click="drawer=!drawer" class="hidden-sm-and-up">menu</v-icon></v-btn>

      <v-list class="pt-0 hidden-sm-and-up" dense v-model="drawer">

        <v-list-tile @click="goAbout()">
          <v-list-tile-action>
            <v-icon>help_outline</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
          <v-divider></v-divider>
        </v-list-tile>
        <v-list-tile @click="goSearch()">
          <v-list-tile-action>
            <v-icon>search</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Search</v-list-tile-title>
          </v-list-tile-content>
          <v-divider></v-divider>
        </v-list-tile>
        <v-list-tile  v-if="!isAuthenticated" @click="goLogin()">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
          <v-divider></v-divider>
        </v-list-tile>
        <v-list-tile  v-if="isAuthenticated" @click="goMypage()">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Mypage</v-list-tile-title>
          </v-list-tile-content>
          <v-divider></v-divider>
        </v-list-tile>
        <v-list-tile v-if="isAuthenticated" @click="logout()">
          <v-list-tile-action>
            <v-icon>input</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
          <v-divider></v-divider>
        </v-list-tile>
      </v-list>
      </v-menu> -->
    </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      navdrawer: false,
      searchcontent: '',
      drawer: null
    }
  },
  computed: {
    getPath: function () {
      return this.$route.path
    },
    isSearch: function () {
      if (this.getPath !== '/Search') {
        return false
      } else return true
    },
    ...mapGetters([
      'isAuthenticated'
    ])
  },
  methods: {
    goAbout () {
      this.$router.push('/about')
    },
    goLogin () {
      this.$router.push('/login')
    },
    goSearch () {
      this.$router.push('/search')
    },
    goMypage () {
      this.$router.push('/mypage')
    },
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
  #toolbar_title {
    font-weight: 900;
    font-size: 2.5rem;
    /* margin-top: 9px; */
    overflow: visible;
  }

  .toolbar_list {
    font-size: 1rem;
  }

  .v-btn--active:before,
  .v-btn:focus:before,
  .v-btn:hover:before {
    background-color: transparent !important;
  }

  .v-btn:before,
  .v-btn:focus:before,
  .v-btn:hover:before {
    background-color: transparent !important;
  }

  .black {
    color: black !important;
  }

  .toolbar_text {
    margin-top: 1rem;
    font-weight: 800;
  }

  .search_bar,
  .search_bar:active {
    font-size: 1rem !important;
    margin-top: 8px !important;
  }

  a {
    text-decoration: none;
    color: black;
  }

  /* .v-text-field.v-text-field--solo .v-input__control{
        min-height: 30px !important;
      } */
</style>
