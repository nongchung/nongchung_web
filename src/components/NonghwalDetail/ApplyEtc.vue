<template>
  <v-layout column>
    <!-- 농활정보 및 신청, 추가기능 -->
    <v-flex px-4 py-2 style="background: white;">
      <v-layout column>
        <v-flex pa-2 style="font-size:1.7rem; font-weight:900"><span style="color:#326CF7">{{getNonghwalDetail.nhInfo.price}}</span>원</v-flex>
        <v-flex pa-1 d-flex>
          <v-icon class="mr-3" style="flex: none !important;">assignment</v-icon>
          <v-menu offset-y max-width="auto">
          <v-flex slot="activator" style="border:1px solid black; padding:.5rem;width:100%;display:flex;justify-content:space-between;" class="pl-3">
            <input id="vinput" :color="detailBtn" v-model="selectedDate" placeholder="날짜선택">
          <v-icon text-xs-right>arrow_drop_down</v-icon></v-flex>
          <v-list>
            <div v-for="(item, index) in getNonghwalDetail.allStartDate" :key="index">
        <v-list-tile ripple @click="toggle(index)">
          <v-list-tile-content style="font-size:1rem; ">
            <v-layout column style="width: 100% !important;">
              <v-flex pt-1 style="display: flex; direction: row; justify-content:space-between;">
                <v-flex>{{item.startDate}}</v-flex>
                <v-flex text-xs-right>{{item.state? '마감': '참석가능'}}</v-flex>
                </v-flex>
              <v-flex style="font-size: .7rem; display: flex; direction: row; justify-content:space-between;" >
                <v-flex >(1박 2일)</v-flex>
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
        <v-flex pa-1><v-icon class="mr-3" >place</v-icon>{{getNonghwalDetail.nhInfo.addr}}</v-flex>
        <v-flex pa-1><v-icon class="mr-3">person</v-icon>최소인원 5명</v-flex>
        <v-flex pa-1><v-icon class="mr-3">access_time</v-icon>
        {{getallStartDateList[0][getallStartDateList[0].length-1]}}
        </v-flex>
        <v-flex pa-1><v-btn large block color="primary" style="font-weight:900" @click="clickApplyBtn">{{applycancel? '신청하기':'취소하기'}}</v-btn></v-flex>
        <v-flex px-1 d-flex>
          <v-btn block flat large outline @click="clickBookmarkBtn" :color="isBookedColor" class="mr-2"><v-icon>favorite</v-icon></v-btn>
          <v-btn block flat large outline color="detailBtn">공유하기</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
    <!-- 농부정보 -->
    <v-flex my-3>
      농부 정보
      <v-layout mt-2 pa-3 column style="background: white;" justify-center>
        <v-flex>
          <v-avatar class="mr-2"
          size="4rem"
          color="grey lighten-4"
        >
          <img :src="getNonghwalDetail.farmerInfo.img" alt="avatar">
        </v-avatar>{{getNonghwalDetail.farmerInfo.name}}
        </v-flex>
        <v-flex mt-2><v-icon class="pr-2 pt-1">more_horiz</v-icon>{{getNonghwalDetail.farmerInfo.comment}}</v-flex>
        <v-flex text-xs-center mt-2><v-btn outline color="primary" @click="goNongbooDetail(getNonghwalDetail.farmerInfo.farmIdx)">농장 프로필 보기</v-btn></v-flex>
      </v-layout>
    </v-flex>
    <!-- 참석대원 -->
    <v-flex mb-5>
      참석 대원
      <v-layout mt-2 py-3 px-2 row style="background: white;">
        <v-flex>
          <v-layout column>
          <v-layout row>
          <v-layout column>
            <v-flex class="attendTitle">
              평균연령
            </v-flex>
            <v-flex class="attendText">
              {{getNonghwalDetail.friendsInfo[0].ageAverage}}
            </v-flex>
          </v-layout>
          <v-layout column>
            <v-flex class="attendTitle">
              총 신청 인원
            </v-flex>
            <v-flex style="text-align:center">
              <span class="attendText">{{getNonghwalDetail.friendsInfo[0].attendCount}}</span>
              <span class="attendText2">/{{getNonghwalDetail.friendsInfo[0].personLimit}}</span>
            </v-flex>
          </v-layout>
          </v-layout>
          <v-flex style="margin-top:5%">
            <v-layout>
              <v-layout column>
                <v-flex class="womanText">
                <img src="../../../static/attendPerson_woman.png" width="15px;">
                <p class="sexPercent1">{{getSexPercent[1]}}%</p>
                </v-flex>
              </v-layout>
              <v-layout>
              <div class="charts" style="width:200px; margin:0 auto">
                <div class="charts__chart chart--sm chart--p100 chart--hover" style="border-radius:9px; background-color:#7EA4FF !important;">
                  <div class="charts__chart chart--sm chart--hover" v-bind:style="{ width: getSexPercent[1] + '% !important' }" style="border-radius:9px; background-color:#FFAF93 !important;" >
                  </div><!-- /.charts__chart -->
                </div><!-- /.charts__chart -->
              </div><!-- /.charts -->
              </v-layout>
              <v-layout column>
                <v-flex class="womanText">
                <img src="../../../static/attendPerson_man.png" width="15px;">
                <p class="sexPercent2">{{getSexPercent[0]}}%</p>
                </v-flex>
              </v-layout>
            </v-layout>
          </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data () {
    return {
      selectedDate: '',
      participants: null,
      sexPercent: []
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
      if (this.getisBooked === 1) {
        return 'error';
      } else {
        return 'detailBtn';
      }
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
    applycancel: function () {
      if (this.isAuthenticated) {
        if (this.getNonghwalDetail.myScheduleActivities.length > 0) {
          if (this.selectedDate !== '') {
            if (this.ismyDate()) {
              return false // 취소
            } else {
              return true // 신청
            }
          } else {
            return true
          }
        } else {
          return true
        }
      } else {
        return true
      }
    },
    getSexPercent: function () {
      if(this.getNonghwalDetail.friendsInfo[0].manCount) {
        const manCount = this.getNonghwalDetail.friendsInfo[0].manCount
        const attendCount = this.getNonghwalDetail.friendsInfo[0].attendCount
        this.sexPercent[0] = Math.round(manCount * 100 / attendCount)
        this.sexPercent[1] = 100 - this.sexPercent[0]
        return this.sexPercent
      }
      else {
        this.sexPercent[0] = 0
        this.sexPercent[1] = 0
        return this.sexPercent
      }
    }
  },
  methods: {
    hasApply: function () {
      if (this.getNonghwalDetail.myScheduleActivities.length > 0) {
        return true
      } else {
        return false
      } // 신청한 것이 없다.
    },
    setDate: function () {
      if (this.isAuthenticated) {
        // 유저임
        if (this.hasApply()) {
          // 신청한 것이 있음
          let mylist = this.whatselectedDate() // 신청한 것임
          console.log(mylist)
          this.selectedDate = mylist[0]
        } else {
          // 신청한 것이 없음
          this.selectedDate = '';
        }
      } else {
        // 유저가 아님
        this.selectedDate = '';
      }
    },
    clickBookmarkBtn: function () {
      if (this.isAuthenticated) {
        if (this.getisBooked === 0) {
          this.$store.dispatch('addnonghwalBookmark', this.nhIdx)
        } else this.$store.dispatch('deletenonghwalBookmark', this.nhIdx)
      } else {
        alert('로그인기기')
      }
    },
    clickApplyBtn: function () {
      if (this.isAuthenticated) {
        // 유저임
        if (this.selectedDate !== '') {
          // 선택된 것이 있음
          if (this.ismyDate()) {
            // 내가 선택한 것임
            this.$store.dispatch('nonghwalCancel', {
              nhIdx: this.nhIdx,
              schIdx: this.searchSchIdx
            })
            this.$router.push('/')
          } else {
            this.$router.push({
              name: 'Apply',
              params: {
                nhIdx: this.nhIdx,
                schIdx: this.searchSchIdx,
                selectedDate: this.selectedDate,
                selectedNhName: this.getNonghwalDetail.nhInfo.name,
                selectedNhAddr: this.getNonghwalDetail.nhInfo.addr,
                selectedNhImg: this.getNonghwalDetail.image[0]
              }
            })
          }
        } else {
          alert('신청날짜를 선택해주세요')
        }
      } else {
        alert('로그인을 해주세요.')
      }
    },
    whatselectedDate: function () {
      let mydatelist = []
      for (
        let i = 0;
        i < this.getNonghwalDetail.myScheduleActivities.length;
        i++
      ) {
        if (
          this.getallStartDateList[1].indexOf(
            this.getNonghwalDetail.myScheduleActivities[i]
          ) !== -1
        ) {
          let num = this.getallStartDateList[1].indexOf(
            this.getNonghwalDetail.myScheduleActivities[i]
          )
          mydatelist.push(this.getallStartDateList[0][num])
        }
      }
      return mydatelist
    },
    ismyDate: function () {
      for (let i = 0; i < this.whatselectedDate().length; i++) {
        if (this.selectedDate === this.whatselectedDate()[i]) {
          return true
        } else {
          return false
        }
      }
    },
    toggle: function (index) {
      this.selectedDate = this.getallStartDateList[0][index]
      // return this.getallStartDateList[0][index]
    },
    goNongbooDetail: function (idx) {
      this.$router.push({ name: 'FarmInfo', params: { idx: idx } })
    }
    // ,
    // async changeP (index) {
    //   await this.$store.dispatch('getParticipants', this.getallStartDateList[1][index]).then((res) => {
    //     this.participants = res.data.friendsInfo // 그다음은...?
    //   })
    // }
  },
  created () {
    this.setDate()
    console.log(this.getisBooked)
    console.log(this.getNonghwalDetail.friendsInfo)
  }
}
</script>

<style scoped>
.attendTitle {
  text-align: center;
  font-size: 1.3rem;
}
.attendText {
  text-align: center;
  font-size: 3.6rem;
  font-weight: bold;
}
.attendText2 {
  font-size: 2.2rem;
}
.sexPercent1 {
  color: #f25620;
  font-size: 1.5rem;
  font-weight: bold;
}
.sexPercent2 {
  color: #326cf7;
  font-size: 1.5rem;
  font-weight: bold;
}
.womanText {
  text-align: center;
}
/* .v-text-field__details{
  height: 3px !important;
}
.v-input__control{
  height: 30px !important;
} */
.vinput,
.vinput:focus {
  outline: none !important;
  border: none !important;
}
</style>
