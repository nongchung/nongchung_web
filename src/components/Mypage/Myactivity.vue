<template>
  <v-layout class="myActivity_layout" row justify-center>
    <v-flex xs12 sm11 md10 lg8 xl8>
      <v-container fluid style="margin-top: 0vw;">
        <v-layout row wrap>
          <!-- 농활카드하나씩 -->
          <v-flex tag="a" v-for="(item,index) in myAcitivityLog" :key="index" xs6 sm4 md4 lg4 xl4 id="card_gutter" @click="goNonghwalDetail(item.idx)">
            <v-card flat height="23rem">
              <!-- 농활대표사진 -->
              <v-card-media :src="item.img" height="50%">
                <v-spacer></v-spacer>
                <span class="card_tip" v-bind:style="{ backgroundColor: '#FFAF00' }" v-if="item.state===0 || item.state===1">신청중</span>
                <span class="card_tip" v-bind:style="{ backgroundColor: getColorSate(item) }">{{stateVal[item.state]}}</span>
                <span class="card_tip" v-bind:style="{ backgroundColor: getColorPeriod(item) }">{{item.period}}</span>
              </v-card-media>
              <!-- 농활정보 -->
              <v-card-title primary-title class="pb-0 pt-3" style="width:100%; padding-top:1px;">
                <v-layout column>
                  <v-flex class="card_title pt-3">{{item.name}}</v-flex>
                  <v-flex>{{item.addr}}</v-flex>
                  <v-flex mt-3>
                    <span class="card_detail" style="font-size:1.2rem; font-weight:900;">{{item.price}}원</span>
                    <span class="card_detail">(1박기준)</span>
                  </v-flex>
                  <v-flex style="display:flex;">
                    <v-flex class="px-0">{{getPeriod(item)}}</v-flex>
                   <v-flex ml-2 style="margin-top:-1rem;"><v-btn small outline color="primary" v-if="item.state===0 || item.state===1" @click="unApply(item.idx, item.nhIdx)">신청취소</v-btn></v-flex>
                  </v-flex>
                </v-layout>
              </v-card-title>
                </v-card></v-flex></v-layout>
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
      if (item.period === '1박 2일') {
        return '#025F76'
      } else if (item.period === '2박 3일') {
        return '#3470FF'
      } else if (item.period === '당일 치기') {
        return '#00BE44'
      } else { return '#E9EFFF' }
    },
    getColorSate (item) {
      if (item.state === 0) {
        return '#F25620'
      } else if (item.state === 1) {
        return '#00BD43'
      } else if (item.state === 2) {
        return '#3470FF'
      } else if (item.state === 3) {
        return '#FDC948'
      } else if (item.state === 4) {
        return '#078C8E'
      } else { return '#FFAF00' }
    },
    getPeriod (item) {
      return item.startDate + ' -> ' + item.endDate
    },
    goNonghwalDetail (idx) {
      this.$router.push({name: 'Detail', params: { idx: idx }})
    },
    unApply (idx, nhIdx) {
      this.$store.dispatch('nonghwalCancel', {nhIdx: nhIdx, schIdx: idx})
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
