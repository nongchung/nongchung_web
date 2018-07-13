<template>
  <v-toolbar color="white" style="box-shadow:none">
      <v-toolbar-title id="toolbar_title">
        <!-- <router-link to="/" tag="a" class="hidden-sm-and-up">
                <img src="../assets/logo_ex.png" height="30px" style="margin-top: 10px;">농활청춘
      </router-link> -->
        <router-link to="/" tag="a" >
                <img src="../assets/logo_ex.png" height="35px" style="margin-top: 10px;">
      농활청춘
      </router-link>
      </v-toolbar-title>
      <!-- <v-toolbar-items slot="extension"><search-condition></search-condition></v-toolbar-items> -->
      <v-layout class="hidden-xs-only">
        <v-flex sm3 md4 lg4>
      <v-text-field
        append-icon="search"
        class="search_bar ml-3"
        placeholder="농활 검색"
        solo
        @focus="SearchView"
        @keyup.enter="deliveryNB()"
        v-model="searchcontent"
      ></v-text-field></v-flex>
          <!-- <v-btn top :ripple="false" flat class="toolbar_list" exact router to="#1" color="grey lighten-1" active-class="black" style="padding-left: 20px !important;">
            농활청춘소개
          </v-btn>
          <v-btn top :ripple="false" flat class="toolbar_list" exact router to="#2" color="grey lighten-1" active-class="black">
            포인트샵
          </v-btn>
          <v-btn top :ripple="false" flat class="toolbar_list" exact router to="#3" color="grey lighten-1" active-class="black">
            이용안내
          </v-btn> -->
      <v-spacer></v-spacer>
          <!-- <v-btn top :ripple="false" flat class="toolbar_list" color="grey lighten-1" active-class="black" router to="/search">
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
          </v-btn></v-layout>
          <v-spacer class="hidden-sm-and-up"></v-spacer>
          <v-icon @click="navdrawer=!navdrawer" class="hidden-sm-and-up">menu</v-icon>
    </v-toolbar>
</template>

<script>
import { eventBus } from '../main.js'
import { mapGetters } from 'vuex'
import SearchCondition from '../components/Search/SearchBar'
export default {
  data () {
    return {
      navdrawer: false,
      searchcontent: ''
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
    SearchView () {
      this.$router.push('/search')
    },
    noSearchView () {
      // this.$emit('searchbarNoClick')
      // this.
    },
    deliveryNB: function () {
      // console.log(this.searchcontent)
      // console.log(eventBus)
      eventBus.$emit('goSearchBar', this.searchcontent)
    }
  },
  components: {
    SearchCondition
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
    .search_bar, .search_bar:active{
      font-size: 1rem !important;
      margin-top: 8px !important;
          }
    a{
      text-decoration: none;
      color:darkblue;
    }
    /* .v-text-field.v-text-field--solo .v-input__control{
      min-height: 30px !important;
    } */
</style>
