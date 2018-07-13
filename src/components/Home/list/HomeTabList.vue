<template>
  <div>
    <v-tabs slot="extension" v-model="tabnumber" color="white" slider-color="primary" height="60vh" id="home_tab">
      <v-flex sm1 md2 lg2 xl2></v-flex>
      <v-tab :ripple="false" v-for="i in 4" :key="i" :href="`#tab-${i}`">
        <span style="font-size:1.1rem; font-weight:900;">{{tabname[i-1]}}</span>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tabnumber">
      <v-tab-item id="tab-1" color="white">
          <new-list ></new-list>
      </v-tab-item>
      <v-tab-item id="tab-2" color="white">
          <popular-list></popular-list>
      </v-tab-item>
      <v-tab-item id="tab-3" color="white">
          <region-list></region-list>
      </v-tab-item>
      <v-tab-item id="tab-4" color="white">
          <theme-list></theme-list>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import AllList from './AllList'
import PopularList from './PopularList'
import NewList from './NewList'
import RegionList from './RegionList'
import ThemeList from './ThemeList'

export default {
  data () {
    return {
      tabnumber: '',
      tabname: [
        '최신농활', '인기농활', '지역농활', '테마농활'
      ]
    }
  },
  components: {
    PopularList,
    NewList,
    AllList,
    RegionList,
    ThemeList
  }
}
</script>

<style scoped>
#home_tab{
  border-bottom: 2px inset;
  border-bottom-color: rgba(0,0,0,.08);
  /* box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12) !important; */
}
.plaese{
  color: cyan !important;
  font-weight: 700;
}
</style>
