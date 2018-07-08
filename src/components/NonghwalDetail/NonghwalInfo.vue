<template>
  <v-layout column>
    <!-- 농활이미지 -->
    <v-flex style="height:23rem; width:100%; background:white;">
      <img id="nhdetail_img" :src="nonghwalDetail.image[0]">
    </v-flex>
    <!-- 주의사항 -->
    <v-flex my-4 pa-3 style="background:#bcbcbc; font-family:sans-serif; font-size:.8rem;">
      <div>최소인원이 농활신청 마감일까지 100% 모이지 않으면 농활은 자동으로 취소되고 결제해주신 금액은 자동 환불됩니다.
              <br>새롭고 재미있는 경험을 농활을 통해 얻어보세요!
              <br>
              <br>_먼저 알려드립니다_
              <br>농활 신청취소는 농활 신청기간 중에만 가능합니다. 꼭 유의해주세요!
              <br>농활 신청기간 종료시 확정 농활 참여인원으로 간주되며, 취소할 수 없습니다.
              <br>저희가 약속드린 환불 가능일로부터 지연 발생 시 환불 처리는 느리게 진행되는 점 참고 부탁드립니다.</div>
    </v-flex>
    <!-- 그외세부정보 -->
    <v-flex style="background:white;">
      농활세부정보임
    </v-flex>
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
      userToken: 'isAuthenticated'
    })
  },
  methods: {
    showMap: function (idx) {
      this.$store.dispatch('nonghwalLocation', idx)
    },
    bookmarkNh: function (idx) {
      this.$store.dispatch('addnonghwalBookmark', {nhIdx: idx})
    }
  },
  props: ['nonghwalDetail', 'nonghalLocation']
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
