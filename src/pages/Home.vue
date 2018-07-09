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
import HomeAd from '../components/Home/advertisement/HomeAd'
import HomeTabList from '../components/Home/list/HomeTabList'
export default {
  components: {
    HomeAd,
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

<style scoped>
.ads_layout{
  padding-top: 5px;
  background-color:white;
}
/* .v-carousel{
  height: 40vh;
} */
.ads_text{
  margin: 5vh 10vh;
}
.ads_theme{
  font-size: 1rem;
  font-weight: 900;
  text-decoration: underline;
  font-family: sans-serif;
  }
.ads_title{
  font-size: 2rem;
  font-family: sans-serif;
  font-weight: bold;
}
</style>
