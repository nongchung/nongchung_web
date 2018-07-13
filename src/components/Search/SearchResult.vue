<template>
  <v-layout class="searchResult_layout" row justify-center>
    <v-flex xs12 sm11 md10 lg8 xl8>
      <v-container fluid style="margin-top: 0vw;">
        <v-layout row wrap>
          <!-- 농활카드하나씩 -->
          <v-flex tag="a" v-for="(item,index) in searchResult" :key="index" xs6 sm4 md4 lg4 xl3 id="card_gutter">
            <v-card flat height="26rem">
              <!-- 농활대표사진 -->
              <v-card-media :src="item.img" height="50%">
                <v-spacer></v-spacer>
                <span class="card_tip" v-bind:style="{ backgroundColor: getColorPeriod(item) }">{{item.period}}</span>
              </v-card-media>
              <!-- 농부사진 -->
              <v-avatar class="mr-4" style="float:right; margin-top:-10%;" size="4rem" color="grey lighten-4">
                <img src="http://citizen.edisha.gov.in/Content/assets/stylesheet/img/placeholder-user.png" alt="avatar">
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
                <v-flex style="margin-left:145px" >
                <v-btn outline color="primary" v-if="item.rState===0" @click="writeReview(item.idx, index)">후기작성</v-btn>
                <v-btn outline color="primary" v-if="item.rState!=0" @click="editMyReview(item.idx, index)">후기수정</v-btn>
                </v-flex>
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
  name: 'SearchResult',
  computed: {
    ...mapGetters({
      searchResult: 'getSearchResult'
    })
  },
  methods: {
    getColorPeriod (item) {
      if (item.period === '1박2일') {
        return 'lightgreen'
      } else if (item.period === '2박3일') {
        return 'palevioletred'
      } else if (item.period === '당일치기') {
        return 'lightblue'
      } else { return 'yellow' }
    }
  }
}
</script>

<style scope>
.searchResult_layout{
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
</style>
