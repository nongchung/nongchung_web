<template>
    <div id="app">
      <ul>
        <router-link to="/myprofile" tag="li" exact activeClass="select">정보수정하기</router-link>
        <router-link to="/like" tag="li" activeClass="select" v-if="isAuthenticated">찜한목록보기</router-link>
        <router-link to="/myhistory" tag="li" activeClass="select">농활 히스토리</router-link>
      </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Mypage',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'isAuthenticated'
    ])
  }
}
</script>

<style>
ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
    }
    li {
      flex: 1;
      background-color: #495057;
      display: flex;
      padding: 1rem;
      justify-content: center;
      font-weight: bold;
      color: #fff;
    }
    li.select {
      background-color: #212529;
    }
</style>
