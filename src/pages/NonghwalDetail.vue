<template>
<v-layout row justify-center>
  <v-flex sm10 md9 lg8>
  <v-layout column>
    <v-flex mt-4 class="text-md-center">
      <div style="font-size:2rem; font-weight:700; font-family:sans-serif;">농활제목:{{getNonghwalDetail.nhInfo.name}}</div>
      </v-flex>

    <v-layout mt-5 >
      <v-flex md7>
      <div style="height:20rem; width:40vw; background:white;">
    <img id="nhdetail_img" src="http://farm.hansalim.or.kr/wp/wp-content/uploads/2017/06/%ED%8F%AC%EC%8A%A4%ED%84%B0-%EC%82%AC%EC%A7%84-1024x768.jpg">
    </div>
    </v-flex>
    <v-flex ml-5 md4 style="background:white; height: 20rem;">
      <v-flex ma-4 sm10 md12 lg12>
      <div style="font-size:2rem; font-family:sans-serif;">20000원</div>
      <div>
        <v-select
          :items="items"
          label="날짜 선택"
          solo
          flat
          dense
          style="border: 1px solid grey; height:2.7rem; margin-bottom:1rem; font-family:sans-serif !important;"
        ></v-select>
      </div>
      <div style="margin:1rem 0;">총인원 | 최소인원</div>
      <div style="margin:1rem 0;">{{getNonghwalDetail.nhInfo.addr}}</div>
      <div style="margin:1rem 0;">마감일시</div>
      <v-btn block color="primary">신청하기</v-btn>
      </v-flex>
    </v-flex>
    </v-layout>
<div><p></p></div>
    <div>{{getNonghwalDetail.farmerInfo}}</div>
    <div>{{getNonghwalDetail.schedule}}</div>
    <button @click="showMap(getPath)">지도보기</button>
    <div>{{getNonghwalLocation.location}}</div>
    <div>{{getNonghwalLocation.geoLocation}}</div>
    <button @click="bookmarkNh(getPath)" v-if="!isAuthenticated">찜하기</button>
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
