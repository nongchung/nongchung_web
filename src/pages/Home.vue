<template>
<!-- <v-container fluid> -->
    <v-layout column>
        <!-- <search-bar></search-bar> -->
        <home-ad></home-ad>
        <popular-list></popular-list>
        <new-list></new-list>
        <popular-farm></popular-farm>
    </v-layout>
    <!-- </v-container> -->
</template>

<script>
import SearchBar from '../components/Home/search/SearchBar'
import HomeAd from '../components/Home/advertisement/HomeAd'
import PopularList from '../components/Home/list/PopularList'
import NewList from '../components/Home/list/NewList'
import PopularFarm from '../components/Home/list/PopularFarm'
export default {
  components: {
    SearchBar,
    HomeAd,
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
