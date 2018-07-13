<template>
<!-- <v-container fluid> -->
  <v-layout row justify-center class="ads_layout">
    <v-flex xs12 sm12 md12 lg12 xl12>
  <v-carousel hide-delimiters style="height: 35vh;" v-if="ads.length>0">
    <v-carousel-item v-for="(item,index) in ads" :key="index" :src="item.img">
      <v-layout row justify-center>
      <v-flex xs12 sm11 md10 lg9 xl8 px-5 class="ads_text">
      <div class="white--text ads_theme">농활 테마기획전</div>
      <div class="white--text ads_title">"{{item.title}}"</div>
      <div class="white--text ads_title">"{{item.description}}"</div>
      </v-flex>
      </v-layout>
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
  margin-top: 5vh;
  margin-left: 2vw;
  font-weight: 900;
}
.ads_theme{
  font-size: 1rem;
  font-weight: 900;
  text-decoration: underline;
  }
.ads_title{
  font-size: 2rem;
  font-weight: bold;
}
</style>
