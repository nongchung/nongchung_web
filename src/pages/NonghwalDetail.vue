<template>
<div>
    <div>농활세부정보</div>
    <div>{{getNonghwalDetail.nhInfo}}</div>
    <div>{{getNonghwalDetail.farmerInfo}}</div>
    <div>{{getNonghwalDetail.schedule}}</div>
    <button @click="showMap(getPath)">지도보기</button>
    <div>{{getNonghwalLocation.location}}</div>
    <div>{{getNonghwalLocation.geoLocation}}</div>
    <button @click="bookmarkNh(getPath)" v-if="!isAuthenticated">찜하기</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
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

<style>

</style>
