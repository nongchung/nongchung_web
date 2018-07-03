<template>
    <v-layout>
    <!-- <v-flex>
        <h2 class="headline">전국의 특색있는 농활을 예약해보세요!</h2>
          <div>
          <v-text-field
            placeholder="검색창이다."
            solo
            single-line
            append-icon="search"
            clearable
          ></v-text-field>
            </div>
        </v-flex> -->
        <!-- <div id="search_filter" v-show="searchFilter" ref="my">
            <v-btn color="success">날짜</v-btn>
            <v-btn color="success">인원</v-btn>
            <v-btn color="success">위치</v-btn>
            </div> -->
            <input type="text" v-model="scontent" placeholder="검색하는 곳">
            <div>
            <input type="date" v-model="start" placeholder="시작날짜">
            <input type="date" v-model="end" placeholder="종료날짜">
            <input type="number" v-model="person" placeholder="인원수">
            <button @click="searchGo">검색</button>
            </div>
        </v-layout>
</template>

<script>
export default {
  data () {
    return {
      searchFilter: true,
      start: '',
      end: '',
      menu: false,
      scontent: '',
      person: ''
    }
  },
  methods: {
    // searchFocus: function (event) {
    //     this.searchFilter = true
    // },
    // searchBlur: function (event) {
    //     if(event.)
    //       searchFilter
    // }
    searchGo () {
      // console.log(this)
      const {start, end, person, scontent} = this
      this.$store.dispatch('search', {start, end, person, scontent})
    }
  }
}
</script>

<style>

</style>
