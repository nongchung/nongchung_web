<template>
  <v-layout class="myActivity_layout" row justify-center>
    <v-flex xs12 sm11 md10 lg8 xl8>
      <v-container fluid style="margin-top: 0vw;">
        <v-layout row wrap>
          <!-- 농활카드하나씩 -->
          <v-flex tag="a" v-for="(item,index) in myAcitivityLog" :key="index" xs6 sm4 md4 lg4 xl3 id="card_gutter" @click="goNonghwalDetail(item.idx)">
            <v-card flat height="50rem">
              <!-- 농활대표사진 -->
              <v-card-media :src="item.img" height="50%">
                <v-spacer></v-spacer>
                <span class="card_tip" v-bind:style="{ backgroundColor: '#FFAF00' }" v-if="item.state===0 || item.state===1">신청중</span>
                <span class="card_tip" v-bind:style="{ backgroundColor: getColorSate(item) }">{{stateVal[item.state]}}</span>
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
                  <v-flex>
                    <v-card-text class="px-0">{{getPeriod(item)}}</v-card-text>
                  </v-flex>
                </v-layout>
              </v-card-title>
              <v-flex style="margin-left:145px" >
                <v-btn outline color="primary" v-if="item.state===0 || item.state===1" @click="writeReview(item.idx, index)">신청취소</v-btn>
                </v-flex>
              <v-btn icon v-if="!isAuthenticated">
                  <v-icon>favorite_border</v-icon>
                </v-btn>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Activity',
  data () {
    return {
      backgroundColor: 'black',
      stateVal: [
        '입금대기', '입금완료', '왼료', '취소', '확정'
      ]
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
      myAcitivityLog: 'getMyActivity'
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
    },
    getColorSate (item) {
      if (item.state === 0) {
        return 'red'
      } else if (item.state === 1) {
        return 'green'
      } else if (item.state === 2) {
        return 'blue'
      } else if (item.state === 3) {
        return 'yellow'
      } else if (item.state === 4) {
        return 'violet'
      } else { return 'yellow' }
    },
    getPeriod (item) {
      return item.startDate + ' -> ' + item.endDate
    },
    goNonghwalDetail (idx) {
      this.$router.push({name: 'Detail', params: { idx: idx }})
    }
  }
}
</script>

<style scoped>
/* .application.theme--light{
      background: #fff !important;
    } */
.myActivity_layout{
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
