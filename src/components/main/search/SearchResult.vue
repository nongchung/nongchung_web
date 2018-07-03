<template>
  <v-container fluid grid-list-{xs through xl}>
    <v-layout row justify-space-between>
      <span class="subheading">검색결과</span>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 md4 lg3 offset-sm3 v-for="item in searchResult" :key="item.img">
        <v-card>
          <v-card-media class="black--text" height="200px" :src="item.img">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{item.name}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">{{item.addr}}</span>
              <br>
              <span>{{item.period}}</span>
              <br>
              <span>{{item.price}}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      searchResult: 'getSearchResult'
    })
  },
  created () {
    console.log(this.searchResult)
  }
}
</script>

<style>

</style>
