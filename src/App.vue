<template>
  <v-app>
    <navigation-bar></navigation-bar>
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
  }
}
</script>

<style>
</style>
