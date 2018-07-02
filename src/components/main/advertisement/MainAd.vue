<template>
  <v-carousel hide-delimiters style="height:30vh">
    <v-carousel-item v-for="(item,i) in ads" :key="i" src="http://farm.hansalim.or.kr/wp/wp-content/uploads/2017/06/%ED%8F%AC%EC%8A%A4%ED%84%B0-%EC%82%AC%EC%A7%84-1024x768.jpg">
      <span class="white--text headline">{{item.comment}}</span>{
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      ads: 'getAds'
    })
  }
}
</script>

<style>
</style>
