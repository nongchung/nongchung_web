<template>
<v-layout row justify-center>
  <v-flex sm10 md9 lg8>
  <v-layout column>
    <v-flex mt-4 class="text-md-center">
      <div style="font-size:2rem; font-weight:700;">{{getNonghwalDetail.nhInfo.name}}</div>
      </v-flex>

    <v-layout mt-5>
      <v-flex md8 style="height:25vw; width:40vw; background:gray;">
    <img id="nhdetail_img" src="http://farm.hansalim.or.kr/wp/wp-content/uploads/2017/06/%ED%8F%AC%EC%8A%A4%ED%84%B0-%EC%82%AC%EC%A7%84-1024x768.jpg">
    </v-flex>
    <v-flex ml-5 md4 style="background:yellow;">
      <v-flex ma-4>
      <div style="font-size:2rem;">20000원</div>
      <div>
        <el-select v-model="value" placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
      </div>
      <div>총인원 | 최소인원</div>
      <div>{{getNonghwalDetail.nhInfo.addr}}</div>
      <div>마감일시</div>
      </v-flex>
    </v-flex>
    </v-layout>
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
      options: [{
        value: 'Option1',
        label: 'Option1'
      }, {
        value: 'Option2',
        label: 'Option2'
      }, {
        value: 'Option3',
        label: 'Option3'
      }, {
        value: 'Option4',
        label: 'Option4'
      }, {
        value: 'Option5',
        label: 'Option5'
      }],
      value: ''
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

<style scopde>
*{
  font-family: sans-serif;
}
#nhdetail_img{
  max-width:100%;
  max-height:100%;
  margin:auto;
  display:block;
}
.day_select{
}
</style>
