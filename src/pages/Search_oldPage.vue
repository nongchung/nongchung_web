<template>
<v-layout column>
<search-condition v-show="searchcondition" style="box-shadow:none;" v-on:getCondition="getConditionP"></search-condition>
          <hr v-show="searchcondition" style="border-top:.5px solid #dbd9d9;">
          <v-layout>
            <img src="../../static/ad_ex.png">
             <img src="../../static/ad_ex.png">
              <img src="../../static/ad_ex.png">
               <img src="../../static/ad_ex.png">
  <!-- <search-result></search-result> -->
  </v-layout>
  </v-layout>
</template>

<script>
import { eventBus } from '../main.js'
import SearchCondition from '../components/Search/SearchBar'
import SearchResult from '../components/Home/list/PopularList'
// import { mapGetters } from 'vuex'
export default {
  components: {SearchCondition, SearchResult},
  data () {
    return {
      backgroundColor: 'black',
      searchcondition: true,
      p: '',
      s: '',
      e: '',
      r: [],
      c: ''
    }
  },
  computed: {
  },
  methods: {
    getConditionP: function (v) {
      this.p = v.person
      this.s = v.start
      this.e = v.end
      this.r = v.region
      // this.$store.dispatch('search ')
      console.log(v)
    },
    getColorPeriod (item) {
      if (item.period === '1박 2일') {
        return 'lightgreen'
      } else if (item.period === '2박 3일') {
        return 'palevioletred'
      } else if (item.period === '당일 치기') {
        return 'lightblue'
      } else { return 'yellow' }
    },
    goNonghwalDetail (nhIdx) {
      this.$router.push({name: 'Detail', params: { idx: nhIdx }})
    }
  },
  created () {
    eventBus.$on('goSearchBar', function (data) {
      if (data !== '') {
        // this.$store.dispatch('search', )
      }
    })
  }
}
</script>

<style scoped>
.popularlist_layout{
  padding: 15px 0;
}
.container{
  padding: 0;
}
.card_title{
  font-size: 1.3rem;
  font-weight: bold;
}
.card_detail{
  color:gray;
}
.card_tip{
  height: 1.9rem;
  padding: .25rem;
  color: white;
}
#card_gutter{
  padding: 1.8vw !important;
}
</style>
