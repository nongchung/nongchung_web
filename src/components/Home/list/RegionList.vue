<template>
<v-layout row justify-center>
  <v-flex md10 lg8 xl8>
  <v-layout column mt-4>
    <v-flex style="display:flex;flex-direction:row;">
    <v-flex style="flex-grow:5;font-size:3.5rem; font-weight:900;display:flex;flex-direction:column;">
      <v-flex>지역별 <br>원하는 농활을<br> 찾아봐요!</v-flex>
      <!-- 사람이미지 -->
      <v-flex text-xs-right pr-5><img src="../../../../static/Chungcheongbookdo.png" style="height:20vw;"></v-flex>
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
          <v-flex tag="a" v-for="(item,index) in regionList" :key="index" xs6 sm4 md4 lg4 xl3 id="card_gutter" @click="goNonghwalDetail(item.nhIdx)">
            <v-card flat height="21rem">
              <!-- 농활대표사진 -->
              <v-card-media :src="item.img" height="50%">
                <v-spacer></v-spacer>
                <span class="card_tip" v-bind:style="{ backgroundColor: getColorPeriod(item) }">{{item.period}}</span>
              </v-card-media>
              <!-- 농부사진 -->
              <!-- <v-avatar class="mr-4" style="float:right; margin-top:-10%;" size="4rem" color="grey lighten-4">
                <img src="http://citizen.edisha.gov.in/Content/assets/stylesheet/img/placeholder-user.png" alt="avatar">
              </v-avatar> -->
              <!-- 농활정보 -->
              <v-card-title primary-title class="pb-0 pt-4" style="width:100%; padding-top:1px; padding-bottom:5px;">
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
    })
  },
  methods: {
    getRegionId: function (v) {
      let vv = Number(v)
      if (this.area !== vv) {
        this.area = vv
        this.$store.dispatch('regionList', {scontent: '', start: '', end: '', person: '', area: '[' + this.area + ']'})
      }
    },
    getColorPeriod (item) {
      if (item.period === '1박 2일') {
        return '#2CCBB1'
      } else if (item.period === '2박 3일') {
        return '#3470FF'
      } else if (item.period === '당일치기') {
        return '#00BE44'
      } else { return '#E9EFFF' }
    },
    goNonghwalDetail (nhIdx) {
      this.$router.push({name: 'Detail', params: { idx: nhIdx }})
    }
  },
  created () {
    console.log([17])
    this.$store.dispatch('regionList', {scontent: '', start: '', end: '', person: '', area: '[17]'})
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
  font-family: sans-serif;
  font-weight: bold;
}
.card_detail{
  font-family:sans-serif;
  color:gray;
}
.card_tip{
  height: 1.9rem;
  padding: .25rem;
  color: white;
  font-family: sans-serif;
}
#card_gutter{
  padding: 1.8vw !important;
}
</style>
