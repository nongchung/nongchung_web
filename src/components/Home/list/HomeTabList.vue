<template>
  <div>
    <v-tabs slot="extension" v-model="tabnumber" color="white" slider-color="cyan" id="home_tab">
      <v-flex sm1 md1 lg2 xl2></v-flex>
      <v-tab :ripple="false" v-for="i in 3" :key="i" :href="`#tab-${i}`">
        <span style="font-size:1.2rem; font-family:san-serif; font-weight:700;">{{tabname[i-1]}}</span>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tabnumber">
      <search-bar></search-bar>
      <v-tab-item v-for="i in 3" :id="`tab-${i}`" :key="i" color="white">
        <v-layout column>
          <all-list v-show="firsttab()"></all-list>
          <popular-list v-show="secondtab()"></popular-list>
          <new-list v-show="thirdtab()"></new-list>
        </v-layout>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import SearchBar from '../search/SearchBar'
import AllList from './AllList'
import PopularList from './PopularList'
import NewList from './NewList'

export default {
  data () {
    return {
      tabnumber: '',
      tabname: [
        '전체', '인기', '신규'
      ]
    }
  },
  methods: {
    firsttab () {
      if (this.tabnumber === 'tab-1') { return true } else return false
    },
    secondtab () {
      if (this.tabnumber === 'tab-2') { return true } else return false
    },
    thirdtab () {
      if (this.tabnumber === 'tab-3') { return true } else return false
    }
  },
  components: {
    PopularList,
    NewList,
    AllList,
    SearchBar
  }
}
</script>

<style scoped>
#home_tab{
  font-family: sans-serif !important;
  border-bottom: 2px inset;
  border-bottom-color: rgba(0,0,0,.08);
  /* box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12) !important; */
}
.plaese{
  color: cyan !important;
  font-weight: 700;
}
</style>
