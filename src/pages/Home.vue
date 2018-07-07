<template>
<!-- <v-container fluid> -->
    <v-layout column>
        <home-ad></home-ad>
        <home-tab-list></home-tab-list>
    </v-layout>
    <!-- </v-container> -->
</template>

<script>
import SearchBar from '../components/Home/search/SearchBar'
import HomeAd from '../components/Home/advertisement/HomeAd'
import PopularList from '../components/Home/list/PopularList'
import NewList from '../components/Home/list/NewList'
import PopularFarm from '../components/Home/list/PopularFarm'
import HomeTabList from '../components/Home/list/HomeTabList'
export default {
  components: {
    SearchBar,
    HomeAd,
    PopularList,
    NewList,
    PopularFarm,
    HomeTabList
  },
  created () {
    this.$store.dispatch('getMain')
  }
}
</script>

<style>
</style>
