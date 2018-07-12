<template>
  <v-app>
    <navigation-bar v-on:searchbarClick="searchbarClickEvent"></navigation-bar>
        <hr v-show="searchcondition" style="border-bottom:.3px solid #dbd9d9;">
    <v-content>
      <router-view/>
    </v-content>
    <footer-bar></footer-bar>
  </v-app>
</template>

<script>
import NavigationBar from './components/NavigationBar'
import FooterBar from './components/Footer'
export default {
  name: 'App',
  components: {
    NavigationBar,
    FooterBar
  },
  data () {
    return { searchcondition: false }
  },
  methods: {
    searchbarClickEvent: function () {
      this.searchcondition = true
      console.log(this.searchcondition)
    }
  }
}
</script>

<style>
</style>
