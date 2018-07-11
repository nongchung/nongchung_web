<template>
      <v-layout column>
      <!-- 농활이미지와 농활제목 -->
      <v-flex lg12 text-sm-center>
        <div style="background-size:100%; height:25vh; padding-top:8vh;" v-bind:style="{ backgroundImage: 'url(' + getNonghwalDetail.image[0] + ')' }">
          <div style="font-family:sans-serif; font-size:1.7rem; font-weight:700;">{{getNonghwalDetail.nhInfo.description}}</div>
          <div style="font-family:sans-serif; font-size:2.7rem; font-weight:900;">{{getNonghwalDetail.nhInfo.name}}</div>
        </div>
      </v-flex>
      <!-- 탭바 -->
      <v-flex lg12>
    <v-tabs slot="extension" v-model="tabnumber" color="white" slider-color="primary" height="60vh" id="detail_tab">
      <v-flex sm1 md1 lg2 xl2></v-flex>
      <v-tab :ripple="false" v-for="i in 3" :key="i" :href="`#tab-${i}`">
        <span style="font-size:1.1rem; font-family:san-serif; font-weight:500;">{{tabname[i-1]}}</span>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tabnumber">
      <v-layout row justify-center mt-3>
        <!-- 왼쪽라인 -->
        <v-flex sm7 md6 lg5 xl5 pr-3>
      <v-tab-item id="tab-1" color="white">
          <!-- 농활정보 -->
          <nonghwal-info :nonghwalDetail="getNonghwalDetail" :nonghwalLocation="getNonghwalLocation"></nonghwal-info>
      </v-tab-item>
      <v-tab-item id="tab-2" color="white">
          <!-- Q&A -->
          <nonghwal-qanda></nonghwal-qanda>
      </v-tab-item>
      <v-tab-item id="tab-3" color="white">
          <!-- 농활후기 -->
          <nonghwal-review></nonghwal-review>
      </v-tab-item>
      </v-flex>

      <!-- 오른쪽라인 -->
      <v-flex sm5 md4 lg3 xl2 pl-4>
        <apply-etc :nhIdx="this.getPath"></apply-etc>
      </v-flex>
      </v-layout>
    </v-tabs-items>
  </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import NonghwalInfo from '../components/NonghwalDetail/NonghwalInfo'
import NonghwalQanda from '../components/NonghwalDetail/NonghwalQanda'
import NonghwalReview from '../components/NonghwalDetail/NonghwalReview'
import ApplyEtc from '../components/NonghwalDetail/ApplyEtc'
export default {
  data () {
    return {
      tabnumber: '',
      tabname: [
        '농활정보', 'Q & A', '농활후기'
      ]
    }
  },
  components: {
    NonghwalInfo,
    NonghwalQanda,
    NonghwalReview,
    ApplyEtc
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
      if (!this.isAuthenticated) { this.$store.dispatch('nonghwalDetail', idx) } else {
        this.$store.dispatch('nonghwalDetailLogin', idx)
      }
    }
  }
}
</script>

<style scoped>
#detail_tab{
  font-family: sans-serif !important;
  border-bottom: 2px inset;
  border-bottom-color: rgba(0,0,0,.08);
  /* box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12) !important; */
}
.v-text-field.v-text-field--enclosed .v-text-field__details{
  margin-bottom: -40px !important;
}
</style>
