<template>
<!-- <v-container fluid> -->
  <v-layout row justify-center class="ads_layout">
    <v-flex xs12 sm12 md12 lg12 xl12>
  <v-carousel hide-delimiters
   style="height: 35vh;" v-if="ads.length>0">
    <v-carousel-item v-for="(item,index) in ads" :key="index" :src="item.img">
      <v-layout row justify-center>
      <v-flex xs12 sm11 md10 lg9 xl8 px-5 pt-3 class="ads_text">
      <div class="white--text ads_theme">여름방학 기획전</div>
      <div class="white--text ads_title pt-3">"{{item.title}}"</div>
      </v-flex>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
  </v-flex>
  </v-layout>
<!-- </v-container> -->
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      ads: [
        {img: '../../../../static/ads1.png', title: '화끈하게 농활하고 시원하게 물놀이 어때?'},
        {img: '../../../../static/ads2.png', title: '아! 좋다좋아! 수박이 박수! 같이 농활합시다!'},
        {img: '../../../../static/ads3.png', title: '신선한 우유는 어디에서? 여기에서!'},
        {img: '../../../../static/ads4.png', title: '님도보고 귤도따고! 같이 귤따러 갈래?'}
      ]
    }
  }
  // computed: {
  //   ...mapGetters({
  //     ads: 'getAds'
  //   })
  // },
  // created () {
  // }
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
  font-size: 1.3rem;
  font-weight: 900;
  text-decoration: underline;
  }
.ads_title{
  font-size: 3rem;
  font-weight: 900;
}
</style>
