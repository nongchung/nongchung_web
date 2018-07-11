<template>
  <v-layout column>
    <!-- 농활정보 및 신청, 추가기능 -->
    <v-flex px-4 py-2 style="background: white;">
      <v-layout column>
        <v-flex pa-2 style="font-family:sans-serif;font-size:1.7rem;">{{getNonghwalDetail.nhInfo.price}}원</v-flex>
        <v-flex pa-1 d-flex>
          <v-icon class="mr-3" style="flex: none !important;">assignment</v-icon>
          <v-menu offset-y max-width="auto">
          <v-flex slot="activator" lg12 style="border:1px solid black; padding:.5rem;" class="pl-3">{{this.selectedDate}}<v-icon>arrow_drop_down</v-icon></v-flex>
          <v-list>
            <div v-for="(item, index) in getNonghwalDetail.allStartDate" :key="index">
        <v-list-tile ripple @click="toggle(index)">
          <v-list-tile-content style="font-size:1rem; ">
            <v-layout column style="width: 100% !important;">
              <v-flex pt-1 style="display: flex; direction: row; justify-content:space-around;">
                <v-flex>{{item.startDate}}</v-flex>
                <v-flex text-xs-right>{{item.state? '마감': '참석가능'}}</v-flex>
                </v-flex>
              <v-flex style="font-size: .7rem; display: flex; direction: row; justify-content:space-around;" >
                <v-flex >오전 9시 출발(1박 2일)</v-flex>
                <v-flex text-xs-right>남은 인원({{item.availPerson}})명</v-flex>
                </v-flex>
            </v-layout>
            </v-list-tile-content>
        </v-list-tile>
        <v-divider
              v-if="index + 1 < getNonghwalDetail.allStartDate.length"
              :key="index"  ></v-divider>
        </div>
      </v-list>
    </v-menu>
          <!-- <v-select :items="getallStartDateList[0]" v-model="selectedDate" label="날짜선택" solo flat dense style="border: 1px solid grey; width: 80%; height:2.7rem; min-height: initial; font-family:sans-serif !important; flex: 0 0 auto !important;"></v-select> -->
        </v-flex>
        <v-flex pa-1><v-icon class="mr-3">place</v-icon>{{getNonghwalDetail.nhInfo.addr}}</v-flex>
        <v-flex pa-1><v-icon class="mr-3">person</v-icon>인원은 어케할까나</v-flex>
        <v-flex pa-1><v-icon class="mr-3">access_time</v-icon>
        {{getallStartDateList[0][getallStartDateList[0].length-1]}}
        </v-flex>
        <v-flex pa-1><v-btn large block color="primary" @click="clickApplyBtn">{{applycancelBtn}}</v-btn></v-flex>
        <v-flex px-1 d-flex>
          <v-btn block flat large outline @click="clickBookmarkBtn" :color="isBookedColor" class="mr-2"><v-icon left>favorite</v-icon>30</v-btn>
          <v-btn block flat large outline>공유하기</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
    <!-- 농부정보 -->
    <v-flex my-3>
      농부박스
      <v-layout pa-3 column style="background: white;">
        <v-flex>
          <v-avatar class="mr-2"
          size="4rem"
          color="grey lighten-4"
        >
          <img src="http://citizen.edisha.gov.in/Content/assets/stylesheet/img/placeholder-user.png" alt="avatar">
        </v-avatar>난농부(aaa@aaa.com)
        </v-flex>
        <v-flex mt-2>농부이메일</v-flex>
        <v-flex>농부전화번호</v-flex>
        <v-flex>농부주소</v-flex>
      </v-layout>
    </v-flex>
    <!-- 참석대원 -->
    <v-flex mb-5>
      참석대원
      <v-layout pa-3 row style="background: white;">
        <!-- v-for 삽입 -->
        <v-flex mr-3 style="flex: none !important;">
          <v-avatar
          size="3.5rem"
          color="grey lighten-4"
        >
          <img src="http://citizen.edisha.gov.in/Content/assets/stylesheet/img/placeholder-user.png" alt="avatar">
        </v-avatar>
        </v-flex>
        <v-flex mr-3 style="flex: none !important;">
          <v-avatar
          size="3.5rem"
          color="grey lighten-4"
        >
          <img src="http://citizen.edisha.gov.in/Content/assets/stylesheet/img/placeholder-user.png" alt="avatar">
        </v-avatar>
        </v-flex>
        <v-flex mr-3 style="flex: none !important;">
          <v-avatar
          size="3.5rem"
          color="grey lighten-4"
        >
          <img src="http://citizen.edisha.gov.in/Content/assets/stylesheet/img/placeholder-user.png" alt="avatar">
        </v-avatar>
        </v-flex>
        <v-flex mr-3 style="flex: none !important;">
          <v-avatar
          size="3.5rem"
          color="grey lighten-4"
        >
          <img src="http://citizen.edisha.gov.in/Content/assets/stylesheet/img/placeholder-user.png" alt="avatar">
        </v-avatar>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      selectedDate: '날짜 선택',
      apply: '신청하기',
      cancel: '취소하기'
    }
  },
  props: ['nhIdx'],
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
      getNonghwalDetail: 'getNonghwalDetail'
    }),
    getisBooked: function () {
      return this.getNonghwalDetail.nhInfo.isBooked
    },
    isBookedColor: function () {
      if (this.getisBooked === 0) { return 'black' } else { return 'primary' }
    },
    getallStartDateList: function () {
      let allStartDateList = []
      let allSchIdxList = []
      for (let i = 0; i < this.getNonghwalDetail.allStartDate.length; i++) {
        allStartDateList.push(this.getNonghwalDetail.allStartDate[i].startDate)
        allSchIdxList.push(this.getNonghwalDetail.allStartDate[i].idx)
      }
      // console.log([allStartDateList, allSchIdxList])
      return [allStartDateList, allSchIdxList]
    },
    searchSchIdx: function () {
      for (let i = 0; i < this.getNonghwalDetail.allStartDate.length; i++) {
        if (this.selectedDate === this.getallStartDateList[0][i]) {
          console.log('스케쥴인덱스찾았다!')
          console.log(this.getallStartDateList[1][i])
          return this.getallStartDateList[1][i]
        }
      }
    },
    canApply: function () {
      if (this.isAuthenticated) {
        if (this.getNonghwalDetail.myScheduleActivities.length > 0) {
          for (let i = 0; i < this.getNonghwalDetail.myScheduleActivities.length; i++) {
            if (this.getallStartDateList[1].indexOf(this.getNonghwalDetail.myScheduleActivities[i]) !== -1) {
              return false
            } else {
              return true
            }
          }
        } else { return true }
      } else {
        return false
      }
    },
    applycancelBtn: function () {
      if (this.canApply) {
        return this.apply
      } else {
        return this.cancel
      }
    }
  },
  methods: {
    clickBookmarkBtn: function () {
      if (this.isAuthenticated) {
        if (this.getisBooked === 0) { this.$store.dispatch('addnonghwalBookmark', this.nhIdx) } else this.$store.dispatch('deletenonghwalBookmark', this.nhIdx)
      } else {
        alert('로그인기기')
      }
    },
    clickApplyBtn: function () {
      if (this.isAuthenticated) {
        if (this.selectedDate !== '날짜 선택') {
          this.$router.push({name: 'Apply',
            params: { nhIdx: this.nhIdx,
              schIdx: this.searchSchIdx,
              selectedDate: this.selectedDate,
              selectedNhName: this.getNonghwalDetail.nhInfo.name,
              selectedNhAddr: this.getNonghwalDetail.nhInfo.addr,
              selectedNhImg: this.getNonghwalDetail.image[0] }})
        } else { alert('신청날짜를 선택해주세요') }
      } else {
        alert('로그인기기')
      }
    },
    toggle: function (index) {
      this.selectedDate = this.getallStartDateList[0][index]
      return this.getallStartDateList[0][index]
    }
  },
  created () {
    // console.log(this.getNonghwalDetail.nearestStartDate)
    console.log(this.getallStartDateList[1])
    console.log(this.getNonghwalDetail.myScheduleActivities)
    // console.log(this.getallStartDateList)
    // console.log(this.getNonghwalDetail.allStartDate.length)
  }
}
</script>

<style scoped>
/* .v-text-field__details{
  height: 3px !important;
}
.v-input__control{
  height: 30px !important;
} */
.v-input__slot{
  min-height: initial !important;
}
</style>
