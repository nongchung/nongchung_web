<template>
  <v-layout column>
    <!-- 농활정보 및 신청, 추가기능 -->
    <v-flex px-4 py-2 style="background: white;">
      <v-layout column>
        <v-flex pa-2 style="font-family:sans-serif;font-size:1.7rem;">20000원</v-flex>
        <v-flex pa-1 d-flex>
          <v-icon class="mr-3" style="flex: 0 0 auto !important;">assignment</v-icon>
          <v-select :items="items" label="날짜 선택" solo flat dense style="border: 1px solid grey; height:2.7rem; min-height: initial; font-family:sans-serif !important; flex: 0 0 auto !important;"></v-select>
        </v-flex>
        <v-flex pa-1><v-icon class="mr-3">place</v-icon>주소</v-flex>
        <v-flex pa-1><v-icon class="mr-3">person</v-icon>총030명 (최소5명)</v-flex>
        <v-flex pa-1><v-icon class="mr-3">access_time</v-icon>마감일시</v-flex>
        <v-flex pa-1><v-btn large block color="primary" @click="clickApplyBtn">신청하기</v-btn></v-flex>
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
      items: ['Foo', 'Bar', 'Fizz', 'Buzz']
    }
  },
  props: ['isBooked', 'nhIdx'],
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated'
    }),
    getPath: function () {
      return this.$route.params.idx
    },
    isBookedColor: function () {
      if (this.isBooked.length === 0) { return 'black' } else { return 'primary' }
    },
    getnhIdx: function () {
      return this.nhIdx
    }
  },
  methods: {
    clickBookmarkBtn: function () {
      if (!this.isAuthenticated) {
        this.$store.dispatch('addnonghwalBookmark', this.getnhIdx())
      } else {
        alert('로그인기기')
      }
    },
    clickApplyBtn: function () {
      if (!this.isAuthenticated) {
        console.log('hihi')
      }
    }
  },
  created () {
    console.log(this.isBooked)
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
