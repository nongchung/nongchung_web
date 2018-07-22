<template>
<v-layout row justify-center style="background-color:white">
  <v-flex md10 lg8 xl8>
  <v-layout column mt-4>
    <v-flex style="display:flex;flex-direction:row;">
    <v-flex style="display:flex;flex-direction:column;">
      <v-flex class="hidden-xs-only" style="flex-grow:5;font-size:3.5rem; font-weight:900;" pl-4>지역별 <br>원하는 농활을<br> 찾아봐요!</v-flex>
       <v-flex class="hidden-sm-and-up ml-5" style="font-size:2rem;flex:0 0 auto;font-weight:900;" pl-4>지역별 <br>원하는 농활을<br> 찾아봐요!</v-flex>
      <!-- 사람이미지 -->
      <v-flex text-xs-right pr-5 class="hidden-xs-only"><img :src="manImageSrc" width="40%"></v-flex>
      <v-flex text-xs-right class="hidden-sm-and-up" style="flex:0 0 auto; "><img :src="manImageSrc" width="25%"></v-flex>
      </v-flex>
    <v-flex style="flex-grow:1;" >
    <korea-region v-on:idOfRegion="getRegionId"></korea-region>
    </v-flex>
    </v-flex>
    <!-- 여기부터 지역선택결과 -->
    <v-flex mt-4>
      <v-container fluid style="margin-top:-2vw;">
        <v-layout row wrap>
          <!-- 농활카드하나씩 -->
          <v-flex tag="a" v-for="(item,index) in regionList" :key="index" xs6 sm4 md4 lg4 xl4 id="card_gutter" @click="goNonghwalDetail(item.idx)">
            <v-card flat height="23rem" style="outline: .2px solid #e4e4e4;">
              <!-- 농활대표사진 -->
              <v-card-media :src="item.img" height="57%">
                <v-layout column >
                  <v-flex text-xs-right><v-btn v-if="isAuthenticated"
                :style="{color: item.isBooked ? '#F25620' : 'white'}"
                icon
                @click.stop="clickHeart(item)"
                class="heart"
              >
                <v-icon>favorite</v-icon>
              </v-btn></v-flex><v-spacer></v-spacer>
                <v-layout row align-end class="text-xs-left">
                <v-flex style="flex: 0 0 auto;margin:0;" class="card_tip" v-bind:style="{ backgroundColor: getColorPeriod(item) }">{{item.period}}
                </v-flex></v-layout>
              </v-layout>
                </v-card-media>
              <!-- 농부사진 -->
              <!-- <v-avatar class="mr-4" style="float:right; margin-top:-10%;" size="4rem" color="grey lighten-4">
                <img src="http://citizen.edisha.gov.in/Content/assets/stylesheet/img/placeholder-user.png" alt="avatar">
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
      </v-container>
    </v-flex>
    </v-layout>
    </v-flex>
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import KoreaRegion from '../list/KoreaRegion'
export default {
  components: {
    KoreaRegion
  },
  data () {
    return {
      area: '',
      backgroundColor: 'black'
    }
  },
  computed: {
    ...mapGetters({
      regionList: 'getregionList',
      isAuthenticated: 'isAuthenticated'
    }),
    manImageSrc: function () {
      let num = this.area
      switch (num) {
        case 0: return require('../../../../static/Seoul.png')
        case 1: return require('../../../../static/Busan.png')
        case 2: return require('../../../../static/Daegu.png')
        case 3: return require('../../../../static/Incheon.png')
        case 4: return require('../../../../static/Kwangju.png')
        case 5: return require('../../../../static/Daejeon.png')
        case 6: return require('../../../../static/Ulsan.png')
        case 7: return require('../../../../static/Kyunggido.png')
        case 8: return require('../../../../static/Kwangwondo.png')
        case 9: return require('../../../../static/Chungcheongnamdon.png')
        case 10: return require('../../../../static/Chungcheongbookdo.png')
        case 11: return require('../../../../static/Kyungsangnamdo.png')
        case 12: return require('../../../../static/Kyungsangbookdo.png')
        case 13: return require('../../../../static/Jeonranamdo.png')
        case 14: return require('../../../../static/Jeonrabookdo.png')
        case 15: return require('../../../../static/Jejudo.png')
        case 16: return require('../../../../static/Sejeong.png')
        default: return require('../../../../static/korea_ic.png')
      }
    }
  },
  methods: {
    getRegionId: function (v) {
      let vv = Number(v)
      if (this.area !== vv) {
        this.area = vv
        if (!this.isAuthenticated) {
          this.$store.dispatch('regionList', {scontent: '', start: '', end: '', person: '', area: '[' + this.area + ']'})
        } else {
          this.$store.dispatch('regionListLogin', {scontent: '', start: '', end: '', person: '', area: '[' + this.area + ']'})
        }
      }
    },
    getColorPeriod (item) {
      if (item.period === '1박 2일') {
        return '#025F76'
      } else if (item.period === '2박 3일') {
        return '#3470FF'
      } else if (item.period === '당일 치기') {
        return '#00BE44'
      } else { return '#E9EFFF' }
    },
    goNonghwalDetail (nhIdx) {
      this.$router.push({name: 'Detail', params: { idx: nhIdx }})
    }
  },
  created () {
    if (!this.isAuthenticated) {
      this.$store.dispatch('regionList', {scontent: '', start: '', end: '', person: '', area: '[17]'})
    } else {
      this.$store.dispatch('regionListLogin', {scontent: '', start: '', end: '', person: '', area: '[17]'})
    }
  }
}
</script>

<style scoped>
.regionlist_layout{
  padding: 15px 0;
}
.container{
  padding: 0;
}
.card_title{
  font-size: 1.3rem;
  font-weight: 900;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card_detail{
  color:gray;
}
.card_tip{
  height: 2rem;
  padding: .3rem;
  color: white;
}
#card_gutter{
  padding: 1.2vw !important;
}
</style>
