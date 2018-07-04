<template>
<!-- <v-container fluid> -->
    <v-layout column>
        <!-- <search-bar></search-bar> -->
        <main-ad></main-ad>
        <popular-list></popular-list>
        <new-list></new-list>
        <popular-farm></popular-farm>
    </v-layout>
    <!-- </v-container> -->
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
