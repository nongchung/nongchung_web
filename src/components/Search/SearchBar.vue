<template>
    <v-toolbar color="white" height="100px" flat>
  <v-layout row justify-center style="margin-top:50px;">
    <v-flex xs12 sm11 md10 lg9 xl8>
      <v-layout row py-3>
          <span>
          <v-text-field
            label="Search Keyword"
            v-model="searchKeyword"
            key
          >
          </v-text-field>
        </span>
            <v-icon @click="search()">search</v-icon>
      </v-layout>
    </v-flex>
  </v-layout>
</v-toolbar>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      searchKeyword: ''
    }
  },
  methods: {
    search () {
      this.$store.dispatch('searchKeyword', this.searchKeyword)
    }
  }
}
</script>

<style>

</style>
