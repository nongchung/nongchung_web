<template>
  <v-container fluid>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm10 md8 lg8 xl3>
        <search-bar></search-bar>
        <advertisement></advertisement>
        <approaching-list></approaching-list>
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
