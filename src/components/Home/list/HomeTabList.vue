<template>
 <div>
    <v-tabs slot="extension" v-model="tabnumber" color="white" slider-color="cyan" id="home_tab">
      <span style="margin: 5vw;"></span>
      <v-tab :ripple="false" v-for="i in 3" :key="i" :href="`#tab-${i}`">
        {{tabname[i-1]}}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tabnumber">
      <v-tab-item v-for="i in 3" :id="`tab-${i}`" :key="i" color="white">
        <v-layout white>
        <!-- <v-card flat color="gray"> -->
          <all-list v-if="firsttab()"></all-list>
          <popular-list v-if="secondtab()"></popular-list>
          <new-list v-if="thirdtab()"></new-list>
        <!-- </v-card> -->
        </v-layout>
      </v-tab-item>
    </v-tabs-items>
      </div>
</template>

<script>
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
    AllList
  }
}
</script>

<style scoped>
#home_tab{
  border-bottom: 2px inset;
  border-bottom-color: rgba(0,0,0,.08);
  /* box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12) !important; */
}
</style>
