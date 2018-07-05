<template>
  <v-layout row justify-center>
    <v-flex column sm10 md9 lg8>
      <!-- 제목과부제목 -->
      <v-flex mt-5 class="text-md-center">
        <div style="font-size:2.5rem; font-weight:900; font-family:sans-serif;">농활제목:{{getNonghwalDetail.nhInfo.name}}</div>
        <div style="font-size:1.5rem; font-weight:700; font-family:sans-serif;">설명:{{getNonghwalDetail.nhInfo.description}}</div>
      </v-flex>
      <!-- 세부내용들 -->
      <v-layout row mt-4>
        <!-- 왼쪽 -->
        <v-layout column>
          <!-- 이미지박스 -->
          <flex style="height:20rem; width:43vw; background:white;">
            <img id="nhdetail_img" src="http://farm.hansalim.or.kr/wp/wp-content/uploads/2017/06/%ED%8F%AC%EC%8A%A4%ED%84%B0-%EC%82%AC%EC%A7%84-1024x768.jpg">
          </flex>
          <!-- 주의박스 -->
          <flex style="height:10rem; width:43vw; background:grey; font-family:sans-serif; font-size:.8rem; padding:1rem; margin-top:2rem;">
            <p>최소인원이 농활신청 마감일까지 100% 모이지 않으면 농활은 자동으로 취소되고 결제해주신 금액은 자동 환불됩니다.
              <br>새롭고 재미있는 경험을 농활을 통해 얻어보세요!
              <br>
              <br>_먼저 알려드립니다_
              <br>농활 신청취소는 농활 신청기간 중에만 가능합니다. 꼭 유의해주세요!
              <br>농활 신청기간 종료시 확정 농활 참여인원으로 간주되며, 취소할 수 없습니다.
              <br>저희가 약속드린 환불 가능일로부터 지연 발생 시 환불 처리는 느리게 진행되는 점 참고 부탁드립니다.</p>
          </flex>
        </v-layout>
        <!-- 오른쪽 -->
        <v-layout column>
          <!-- 신청박스 -->
          <v-flex justify-center style="background:white; height: 20rem; padding: 1.5rem;">
            <div style="font-size:2rem; font-family:sans-serif;">20000원</div>
            <div>
              <v-select :items="items" label="날짜 선택" solo flat dense style="border: 1px solid grey; height:2.7rem; margin-bottom:1rem; font-family:sans-serif !important;"></v-select>
            </div>
            <div style="margin:1rem 0;">총인원 | 최소인원</div>
            <div style="margin:1rem 0;">{{getNonghwalDetail.nhInfo.addr}}</div>
            <div style="margin:1rem 0;">마감일시</div>
            <v-btn block color="primary">신청하기</v-btn>
          </v-flex>
          <!-- 농부박스 -->
          <v-flex justify-center style="background:white; height: 20rem; padding: 1rem; margin-top:2rem;">
            <div>gkdlgkdl</div>
          </v-flex>
          <!-- 참여자박스 -->
        </v-layout>

      </v-layout>
    </v-flex>

    <!-- <div>{{getNonghwalDetail.farmerInfo}}</div>
    <div>{{getNonghwalDetail.schedule}}</div>
    <button @click="showMap(getPath)">지도보기</button>
    <div>{{getNonghwalLocation.location}}</div>
    <div>{{getNonghwalLocation.geoLocation}}</div>
    <button @click="bookmarkNh(getPath)" v-if="!isAuthenticated">찜하기</button> -->

  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      items: ['Foo', 'Bar', 'Fizz', 'Buzz']}
  },
  computed: {
    ...mapGetters({
      getNonghwalDetail: 'getNonghwalDetail',
      getNonghwalLocation: 'getNonghwalLocation',
      isAuthenticated: 'isAuthenticated'
    }),
    getPath: function () {
      return this.$route.params.idx
    }
  },
  created () {
    this.fetchData(this.getPath)
  },
  methods: {
    fetchData: function (idx) {
      this.$store.dispatch('nonghwalDetail', idx)
    },
    showMap: function (idx) {
      this.$store.dispatch('nonghwalLocation', idx)
    },
    bookmarkNh: function (idx) {
      this.$store.dispatch('nonghwalBookmark', {idx})
    }
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

.v-text-field.v-text-field--enclosed .v-text-field__details{
  margin-bottom: -40px !important;
}
</style>
