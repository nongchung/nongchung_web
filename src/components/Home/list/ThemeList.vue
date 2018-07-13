<template>
<v-layout row justify-center>
  <v-flex xs12 sm11 md10 lg8 xl8>
    <v-container fluid column>
      <!-- 테마버튼 -->
  <v-layout>
    <v-btn v-for="(item, index) in themeButton" :key="index" flat outline color="primary" @click="getThemeImg(index)">{{item}}</v-btn>
  </v-layout>
      <!-- 테마내용 -->
  <v-layout>
    <v-flex>
      <v-card-media
        ripple
        :src="themeImage"
        class="custom-ripple"
        width="700px"
        height="500px">
        <v-icon style="margin-left:15px" @click="beforeTheme">fas fa-arrow-circle-left</v-icon>
        <div class="ads_text">
      <div class="white--text ads_theme">농활 테마기획전</div>
      <div class="white--text ads_title">서울 경기 지역 과일 농장</div>
      </div>
        <v-icon @click="afterTheme">fas fa-arrow-circle-right</v-icon>
      </v-card-media>
      </v-flex>
  </v-layout>
  <v-layout class="themelist_layout" >
    <v-flex>
      <v-container fluid style="margin-top:-2vw;">
        <v-layout row wrap>
          <!-- 농활카드하나씩 -->
          <v-flex tag="a" v-for="(item, index) in themeData.data" :key="index" xs6 sm4 md4 lg4 xl3 id="card_gutter" @click="goNonghwalDetail(item.nhIdx)">
            <v-card flat height="21rem">
              <!-- 농활대표사진 -->
              <v-card-media :src="item.fImg" height="50%">
                <v-spacer></v-spacer>
                <span class="card_tip" v-bind:style="{ backgroundColor: getColorPeriod(item) }">{{item.period}}</span>
              </v-card-media>
              <!-- 농부사진 -->
              <v-avatar class="mr-4" style="float:right; margin-top:-10%;" size="4rem" color="grey lighten-4">
                <img :src="item.farmerImg" alt="avatar">
              </v-avatar>
              <!-- 농활정보 -->
              <v-card-title primary-title class="pb-0" style="width:100%; padding-top:1px; padding-bottom:5px;">
                <v-layout column>
                  <v-flex class="card_title">{{item.name}}</v-flex>
                  <v-flex>{{item.addr}}</v-flex>
                  <v-flex mt-4>
                    <span class="card_detail" style="font-size:1.2rem; font-weight:bold;">{{item.price}}원</span>
                    <span class="card_detail">(1박기준)</span>
                  </v-flex>
                </v-layout>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
  </v-container>
  </v-flex>
</v-layout>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      themeIndex: 0,
      themeButton: ['힐링 농활', '맛있는 농활', '과일 농활', '그린 투어리즘', '오직 8월에만'],
      themeImage: '../../../../static/theme1.png',
      themeImageArr: [
        '../../../../static/theme1.png',
        '../../../../static/theme2.png',
        '../../../../static/theme3.png',
        '../../../../static/theme4.png',
        '../../../../static/theme5.jpeg'
      ]
    }
  },
  computed: {
    ...mapGetters({
      themeData: 'getThemeData'
    })
  },
  methods: {
    getThemeImg (index) {
      this.themeIndex = index
      this.themeImage = this.themeImageArr[index]
      console.log(index)
      this.$store.dispatch('getThemeNH', index)
    },
    getColorPeriod (item) {
      if (item.period === '1박2일') {
        return 'lightgreen'
      } else if (item.period === '2박3일') {
        return 'palevioletred'
      } else if (item.period === '당일치기') {
        return 'lightblue'
      } else { return 'yellow' }
    },
    beforeTheme () {
      if (this.themeIndex !== 0) {
        this.getThemeImg(this.themeIndex - 1)
      }
    },
    afterTheme () {
      if (this.themeIndex !== 4) {
        this.getThemeImg(this.themeIndex + 1)
      }
    },
    goNonghwalDetail (idx) {
      this.$router.push({name: 'Detail', params: { idx: idx }})
    }
  },
  created () {
    this.$store.dispatch('getThemeNH', 0)
  }

}
</script>

<style scoped>
.themelist_layout{
  padding: 15px 0;
}
.container{
  padding: 0;
}
.card_title{
  font-size: 1.3rem;
  font-family: sans-serif;
  font-weight: 700;
}
.card_tip{
  height: 1.3rem;
  color: white;
}
#card_gutter{
  padding: 1.8vw !important;
}
.ads_layout{
  padding-top: 5px;
  background-color:white;
}
/* .v-carousel{
  height: 40vh;
} */
.ads_text{
  margin: 5vh 10vh;
  margin-left: 5vh;
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
