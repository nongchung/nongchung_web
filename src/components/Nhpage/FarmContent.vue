<template>
 <v-layout class="farmInfo_layout" row justify-center>
    <v-flex xs12 sm11 md10 lg8 xl8>
      <v-container fluid style="margin-top: 0vw;">
        <v-layout row wrap>
          <!-- 농활카드하나씩 -->
          <v-flex tag="a" v-for="(item,index) in farmInfo.nhInfo" :key="index" xs6 sm4 md4 lg4 xl4 id="card_gutter">
            <v-card flat height="23rem">
              <!-- 농활대표사진 -->
              <v-card-media :src="item.farmImg" height="57%">
                <v-layout row align-end class="text-xs-left">
                <v-flex style="flex: 0 0 auto;margin:0;" class="card_tip" v-bind:style="{ backgroundColor: getColorPeriod(item) }">{{item.period}}
                </v-flex>
              </v-layout>
                  </v-card-media>
              <!-- 농활정보 -->
              <v-card-title primary-title class="pb-0 pt-3" style="width:100%;">
                <v-layout column>
                  <v-flex class="card_title">{{item.nhName}}</v-flex>
                  <v-flex>{{farmInfo.farmerInfo.farmAddr}}</v-flex>
                  <v-flex mt-2>
                    <span class="card_detail" style="font-size:1.2rem; font-weight:bold;">{{item.price}}원</span>
                    <span class="card_detail">(1박기준)</span>
                  </v-flex>
                </v-layout>
              </v-card-title>

                <!-- <v-btn outline color="primary" @click="goNonghwalDetail(item.idx)">상세보기</v-btn> -->
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'FarmContent',
  computed: {
    ...mapGetters({
      farmInfo: 'getFarmInfo'
    })
  },
  methods: {
    getColorPeriod (item) {
      if (item.period === '1박 2일') {
        return '#3470FF'
      } else if (item.period === '2박 3일') {
        return '#025F76'
      } else if (item.period === '당일 치기') {
        return '#00BE44'
      } else { return '#E9EFFF' }
    }
  }
}
</script>

<style>
  /* .application.theme--light{
      background: #fff !important;
    } */
.farmInfo_layout{
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
</style>
