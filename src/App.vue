<template>
  <v-app>
    <v-toolbar app flat>
      <v-toolbar-title>농활</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/" tag="li" exact activeClass="select">Home</router-link>
      <!-- <router-link to="/register" tag="li" activeClass="select" v-if="!isAuthenticated">Register</router-link> -->
      <router-link to="/login" tag="li" activeClass="select" v-if="!isAuthenticated">Login</router-link>
      <!-- <router-link to="/logout" tag="li" activeClass="select" v-if="isAuthenticated">Logout</router-link> -->
      <router-link to="/mypage" tag="li" activeClass="select">mypage</router-link>
      <button @click="logout" v-if="isAuthenticated">로그아웃</button>
    </v-toolbar>
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
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
    }
    li {
      flex: .5;
      display: flex;
      justify-content: center;
      font-weight: bold;
    }
    li.select {
      color: green;
    }
</style>
