<template>
  <v-layout class="myHistory_layout" row justify-center>
    <v-flex xs12 sm11 md10 lg8 xl8>
      <!-- <div class="subheading">다녀온 농활 목록</div> -->
      <v-container fluid>
          <v-layout row wrap>
             <v-flex v-for="(item, index) in getMyHistory" :key="item.idx" xs6 sm4 md4 lg4 xl3 id="card_gutter">
            <v-card flat height="40vh">
              <v-card-media :src="item.img" height="50%">
                <v-spacer></v-spacer>
                <!-- <span class="card_tip" v-bind:style="{ backgroundColor: getColorPeriod(item) }">{{item.period}}</span> -->
              </v-card-media>
              <v-card-title primary-title class="pb-0">
                <div style="width:100%">
                  <div class="card_title">{{item.name}}</div>
                  <div style="overflow:hidden">
                    <!-- <span class="card_detail" style="float:left">{{item.addr}}</span>
                    <span class="card_detail" style="float:right">{{item.price}}원</span> -->
                  </div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn icon v-if="!isAuthenticated">
                  <v-icon>favorite_border</v-icon>
                </v-btn>
                <v-btn flat @click="goNonghwalDetail(item.idx)">상세보기</v-btn>
                <v-btn flat v-if="item.rState!=0" @click="writeReview(item.idx, index)">후기작성</v-btn>
                <v-btn flat v-if="item.rState===0">후기작성 완료</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      backgroundColor: 'black'
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated'
    }),
    getMyHistory () {
      return !this.$store.getters.getMyHistory ? false : this.$store.getters.getMyHistory
    }
  },
  methods: {
    getColorPeriod (item) {
      if (item.period === '1박2일') {
        return 'lightgreen'
      } else if (item.period === '2박3일') {
        return 'palevioletred'
      } else if (item.period === '당일치기') {
        return 'lightblue'
      } else { return 'yellow' }
    },
    goNonghwalDetail (idx) {
      this.$router.push({name: 'Detail', params: { idx: idx }})
    },
    writeReview (idx, arrindex) {
      // this.$router.push('/Writereview')
      this.$router.push({name: 'Writereview', params: { idx: idx, arrIndex: arrindex }})
    }
  }
}
</script>

<style scoped>
/* .application.theme--light{
      background: #fff !important;
    } */
.myHistory_layout{
  padding: 15px 0;
}
.container{
  padding: 0;
}
.card_title{
  font-size: 1.3rem;
  font-family: sans-serif;
  font-weight: 700;
}
.card_tip{
  height: 1.3rem;
  color: white;
}
#card_gutter{
  padding: 1.8vw !important;
}
</style>
