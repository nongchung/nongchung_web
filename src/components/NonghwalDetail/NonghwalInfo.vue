<template>
  <v-layout column>
    <!-- 농활이미지 -->
    <v-flex style="height:20rem; width:100%; background:white;">
      <img id="nhdetail_img" :src="nonghwalDetail.image[0]">
    </v-flex>
    <!-- 주의사항 -->
    <v-flex my-4 pa-3 style="background:#bcbcbc; font-size:.8rem; border-radius: 15px;">
      <div><strong>&lt;환불규정&gt;</strong>
              <br>1. 농활 신청취소는 농활 신청기간 중에만 가능합니다. 꼭 유의해주세요!
              <br>2. 농활 신청기간 종료시 확정 농활 참여인원으로 간주되며, 취소할 수 없습니다.
              <br>3. 최소인원이 농활신청 마감일까지 100% 모이지 않으면 농활은 자동으로 취소되고 결제해주신 금액은 자동 환불됩니다.
              <br>4. 출발 3일전까지 환불하셔야 100% 환불이 가능합니다.
              <br>5. 출발 2일전부터는 결제금액의 40%만 환불됩니다.
              <br>6. 당일 취소는 환불이 불가능합니다.
              <br><br>
              <strong>&lt;연락처&gt;</strong>
              <br>긴급한 문의사항은 전화로 연락주십시오.
              <br>010-3240-0736(농활청춘 담당자)
              </div>
    </v-flex>
    <!-- 그외세부정보 -->
    <v-flex style="background:white;" mb-4>
      <!-- <google-map></google-map> -->
      <v-layout column>
        <!-- 농활상세설명 -->
        <v-flex>
          <v-layout column pa-4>
            <v-flex text-xs-center style="font-weight:700;">{{nonghwalDetail.nhInfo.description}}</v-flex>
            <v-flex mt-4 style="display:flex;">
              <v-icon color="success">beenhere</v-icon>
              <v-flex style="font-weight:700;" mx-3>{{nonghwalDetail.nhInfo.addr}}</v-flex>
            </v-flex>
            <v-flex pt-1 style="display:flex;">
              <v-icon color="warning">monetization_on</v-icon>
              <v-flex style="font-weight:700;" mx-3>{{nonghwalDetail.nhInfo.price}}원</v-flex>
            </v-flex>
            <v-flex pt-1 style="display:flex;">
              <v-icon color="primary">watch_later</v-icon>
              <v-flex style="font-weight:700;" mx-3>{{nonghwalDetail.nhInfo.period}}</v-flex>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-divider></v-divider>
        <!-- 스케줄 -->
        <v-flex>
          <v-layout column pa-4>
            <v-flex pb-3 style="color:#3470FF;font-weight:800;">스케줄</v-flex>
            <v-flex style="display:flex;flex-direction:row;" v-for="(item,index) in nonghwalDetail.schedule" :key="index">
              <v-layout ml-3 column style="flex:none;">
                <v-flex style="flex:none;line-height:0;padding-top:.1rem;"><v-icon color="primary" size="1rem">panorama_fish_eye</v-icon></v-flex>
                <v-flex style="border-left:1.4px solid #3470FF;height:1rem;margin-left:.45rem;" v-show="getLastSchedule(index)"></v-flex>
              </v-layout>
              <v-layout mx-3 column style="flex:none;">
                <v-flex style="height:1rem;font-size:1rem;color:gray">{{item.time}}</v-flex>
                <v-flex style="height:1rem;margin-left:.5rem;" v-show="getLastSchedule(index)"></v-flex>
              </v-layout>
              <v-layout ml-3 column style="flex:none;">
                <v-flex style="font-size:1rem;font-weight:700;">{{item.activity}}</v-flex>
                <v-flex style="height:1rem;margin-left:.5rem;" v-show="getLastSchedule(index)"></v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-divider></v-divider>
        <!-- 준비물 -->
        <v-flex>
          <v-layout column pa-4>
            <v-flex pb-2 style="color:#3470FF;font-weight:800;">준비물</v-flex>
            <v-flex>여벌 옷, 간식</v-flex>
          </v-layout>
        </v-flex>
        <v-divider></v-divider>
        <!-- 집결지 및 농장위치 -->
        <v-flex>
          <v-layout column pa-4>
            <v-flex pb-2 style="display:flex;">
            <v-flex style="color:#3470FF;font-weight:800;flex:0 0 auto;">집결지</v-flex>
            <v-flex ml-3 style="font-weight:700; flex:0 0 auto;">잠실종합경기운동장 2번출구</v-flex>
            <v-flex style="pointer:cursor;color:#3470FF;font-weight:700;" text-xs-right>
              <a href="https://www.google.co.kr/maps/place/37%C2%B030'39.0%22N+127%C2%B004'28.4%22E/@37.510832,127.0723673,17z"
            target="_blank" style="text-decoration:none;">지도로 보기</a></v-flex>
            </v-flex>
            <v-flex>
              <google-map></google-map>
            </v-flex>
          </v-layout>
        </v-flex>

      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import GoogleMap from './GoogleMap'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      userToken: 'isAuthenticated'
    })
  },
  methods: {
    showMap: function (idx) {
      this.$store.dispatch('nonghwalLocation', idx)
    },
    bookmarkNh: function (idx) {
      this.$store.dispatch('addnonghwalBookmark', {nhIdx: idx})
    },
    getLastSchedule: function (index) {
      if (index === this.nonghwalDetail.schedule.length - 1) { return false } else { return true }
    }
  },
  props: ['nonghwalDetail', 'nonghalLocation'],
  components: {
    GoogleMap
  }
}
</script>

<style scoped>
#nhdetail_img{
  max-width:100%;
  max-height:100%;
  margin:auto;
  display:block;
}
</style>
