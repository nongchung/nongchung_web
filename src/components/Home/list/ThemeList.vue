<template>
<v-layout row justify-center class="themelist_layout">
  <v-flex xs12 sm11 md10 lg9 xl8>
    <v-container fluid column class="px-5 mt-4" >
      <!-- 테마버튼 -->
  <v-layout style="margin-top:2rem; margin-bottom:.9rem;margin-left:1.2vw; margin-right:1.2vw;">
    <v-btn v-for="(item, index) in themeButton" :key="index" flat outline color="primary"
    @click="getThemeImg(index)" class="mr-3 theme_btn"><span style="margin:0 .5rem;">{{item}}</span></v-btn>
  </v-layout>
      <!-- 테마내용 -->
  <v-layout style="margin-left:1.2vw; margin-right:1.2vw;">
    <v-flex>
      <v-card-media
        ripple
        :src="themeImage"
        class="custom-ripple"
        width=100%
        height="500px">
        <v-layout justify-space-between>
        <v-icon size="3rem" color="white" style="margin-left: 1rem;" @click="beforeTheme">arrow_back_ios</v-icon>
        <v-icon size="3rem" color="white" style="margin-right: .5rem;" @click="afterTheme">arrow_forward_ios</v-icon>
        </v-layout>
      </v-card-media>
      </v-flex>
  </v-layout>
  <v-layout>
    <!-- <v-flex>
      <v-container fluid style="margin-top:-2vw;"> -->
        <v-layout row wrap mt-3>
          <!-- 농활카드하나씩 -->
          <v-flex tag="a" v-for="(item, index) in themeData.data" :key="index" xs6 sm4 md4 lg4 xl4 id="card_gutter" @click.capture="goNonghwalDetail(item.nhIdx)">
            <v-card flat height="23rem" style="outline: .2px solid #e4e4e4; ">
              <!-- 농활대표사진 -->
              <v-card-media :src="item.fImg" height="57%">
                <v-layout row align-end class="text-xs-left">
                <v-flex style="flex: 0 0 auto;margin:0;background:#FFAF00;" v-show="item.newState" class="card_tip">new</v-flex>
                <v-flex style="flex: 0 0 auto;margin:0;" class="card_tip" v-bind:style="{ backgroundColor: getColorPeriod(item) }">{{item.period}}
                </v-flex>
              </v-layout>
                 </v-card-media>
              <!-- 농부사진 -->
              <!-- <v-avatar class="mr-4" style="float:right; margin-top:-10%;" size="4rem" color="grey lighten-4">
                <img :src="item.farmerImg" alt="avatar">
              </v-avatar> -->
              <!-- 농활정보 -->
              <v-card-title primary-title class="pb-0 pt-3" style="width:100%; padding-top:1px; padding-bottom:5px;">
                <v-layout column>
                  <v-flex class="card_title">{{item.name}}</v-flex>
                  <v-flex pt-1>{{item.addr}}</v-flex>
                  <v-flex mt-3>
                    <span class="card_detail" style="font-size:1.2rem; font-weight:900;">{{item.price}}원</span>
                    <span class="card_detail">(1박기준)</span>
                  </v-flex>
                </v-layout>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      <!-- </v-container>
    </v-flex> -->
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
        '../../../../static/theme3.jpeg',
        '../../../../static/theme4.png',
        '../../../../static/theme5.png'
      ]
    }
  },
  computed: {
    ...mapGetters({
      themeData: 'getThemeData',
      isAuthenticated: 'isAuthenticated'
    })
  },
  methods: {
    // themeBtnColor (index) {
    //   if (this.theme[index] == true) {
    //     this.theme[index] = false
    //     return 'primary'
    //   } else {
    //     return 'gray' }
    // },
    getThemeImg (index) {
      this.themeIndex = index
      this.themeImage = this.themeImageArr[index]
      console.log(index)
      this.$store.dispatch('getThemeNH', index)
    },
    getColorPeriod (item) {
      if (item.period === '1박 2일') {
        return '#3470FF'
      } else if (item.period === '2박 3일') {
        return '#025F76'
      } else if (item.period === '당일 치기') {
        return '#00BE44'
      } else { return '#E9EFFF' }
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
    },
    clickHeart (item) {
      if (this.isAuthenticated) {
        if (item.isBooked === 0) {
          this.$store.dispatch('addnonghwalBookmark', item.nhIdx)
          item.isBooked = 1
        } else {
          this.$store.dispatch('deletenonghwalBookmark', item.nhIdx)
          item.isBooked = 0
        }
      }
    }
  },
  created () {
    this.$store.dispatch('getThemeNH', 0)
  }

}
</script>

<style scoped>
.themelist_layout{
  /* padding: 15px 0; */
}
.container{
  padding: 0;
}
.card_title{
  font-size: 1.3rem;
  font-weight: 900;
}
.card_tip{
  height: 1.9rem;
  padding: .25rem;
  color: white;
}
#card_gutter{
  padding: 1.2vw !important;
}
.ads_layout{
  padding-top: 5px;
  background-color:white;
}
/* .v-carousel{
  height: 40vh;
} */
.theme_btn{
  margin:0;
  height:3rem;
}
.heart{
  opacity: .8;
}
</style>
