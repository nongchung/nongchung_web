<template>
<!-- <v-container fluid> -->
  <v-layout row justify-center class="ads_layout">
    <v-flex xs12 sm12 md12 lg12 xl12>
  <v-carousel hide-delimiters style="height: 35vh;" v-if="ads.length>0">
    <v-carousel-item v-for="(item,index) in ads" :key="index" :src="item.img">
      <div class="ads_text">
      <div class="black--text ads_theme">농활 테마기획전</div>
      <div class="black--text ads_title">"{{item.title}}"</div>
      <div class="black--text ads_title">"{{item.description}}"</div>
      </div>
    </v-carousel-item>
  </v-carousel>
  </v-flex>
  </v-layout>
<!-- </v-container> -->
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      img: require('../../../../static/ad1.jpeg')
    }
  },
  computed: {
    ...mapGetters({
      ads: 'getAds'
    })
  },
  created () {
  }
}
</script>

<style scoped>
.ads_layout{
  padding-top: 5px;
  background-color:white;
}
/* .v-carousel{
  height: 40vh;
} */
.ads_text{
  margin: 5vh 10vh;
}
.ads_theme{
  font-size: 1rem;
  font-weight: 900;
  text-decoration: underline;
  font-family: sans-serif;
  }
.ads_title{
  font-size: 2rem;
  font-family: sans-serif;
  font-weight: bold;
}
</style>
