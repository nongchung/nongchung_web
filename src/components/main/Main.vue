<template>
  <v-container fulid>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <search-bar></search-bar>
        <advertisement></advertisement>
        <popular-list></popular-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SearchBar from './search/SearchBar'
import Advertisement from './advertisement/Ad'
import PopularList from './list/PopularList'
export default {
  components: {
    SearchBar,
    Advertisement,
    PopularList
  }
}
</script>

<style>
</style>
