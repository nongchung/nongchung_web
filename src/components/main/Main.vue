<template>
  <v-container fulid>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <search-bar></search-bar>
        <main-ad></main-ad>
        <popular-list></popular-list>
        <new-list></new-list>
        <popular-farm></popular-farm>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SearchBar from './search/SearchBar'
import MainAd from './advertisement/MainAd'
import PopularList from './list/PopularList'
import NewList from './list/NewList'
import PopularFarm from './list/PopularFarm'
export default {
  components: {
    SearchBar,
    MainAd,
    PopularList,
    NewList,
    PopularFarm
  },
  created () {
    this.$store.dispatch('getMain')
  }
}
</script>

<style>
</style>
