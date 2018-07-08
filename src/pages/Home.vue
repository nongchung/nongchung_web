<template>
<!-- <v-container fluid> -->
    <v-layout column>
        <home-ad></home-ad>
        <home-tab-list></home-tab-list>
    </v-layout>
    <!-- </v-container> -->
</template>

<script>
import { mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated'
    })
  },
  created () {
    if (!this.isAuthenticated) {
      this.$store.dispatch('getMain')
    } else {
      this.$store.dispatch('getMainLogin')
    }
  }
}
</script>

<style>
</style>
