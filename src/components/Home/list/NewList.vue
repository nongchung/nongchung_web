<template>
  <v-layout class="newlist_layout" row justify-center>
    <v-flex xs12 sm10 md10 lg9 xl8>
      <v-container fluid style="margin-top:-2vw;">
        <v-layout row wrap px-5 mt-4>
          <!-- 농활카드하나씩 -->
          <v-flex tag="a" v-for="(item, index) in newList" :key="index" xs6 sm4 md4 lg4 xl4 id="card_gutter"  @click="goNonghwalDetail(item.nhIdx)">
            <v-card flat height="23rem" style="outline: .2px solid #e4e4e4;">
              <!-- 농활대표사진 -->
              <v-card-media :src="item.img" height="57%">
                <v-layout column >
                  <v-flex text-xs-right><v-btn v-if="isAuthenticated"
                :style="{color: item.isBooked ? '#F25620' : 'white'}"
                icon
                @click.stop="clickHeart(item)"
                class="heart"
              >
                <v-icon>favorite</v-icon>
              </v-btn></v-flex><v-spacer></v-spacer>
                <v-flex style="flex: 0 0 auto;"><span class="card_tip" v-bind:style="{ backgroundColor: getColorPeriod(item) }">{{item.period}}</span>
                </v-flex>
              </v-layout>
              </v-card-media>
              <!-- 농부사진 -->
              <!-- <v-avatar class="mr-4" style="float:right; margin-top:-10%;" size="4rem" color="grey lighten-4">
                <img src="http://citizen.edisha.gov.in/Content/assets/stylesheet/img/placeholder-user.png" alt="avatar">
              </v-avatar> -->
              <!-- 농활정보 -->
              <v-card-title primary-title class="pb-0 pt-3" style="width:100%; padding-top:1px; padding-bottom:5px;" >
                <v-layout column>
                  <v-flex class="card_title">{{item.name}}</v-flex>
                  <v-flex pt-1>{{item.addr}}</v-flex>
                  <v-flex mt-4>
                    <span class="card_detail" style="font-size:1.2rem; font-weight:900;">{{item.price}}원</span>
                    <span class="card_detail">(1박기준)</span>
                  </v-flex>
                </v-layout>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-btn color="white" v-if="isEndNew==0||isEndNew==[]"
          style="margin-left:1.2vw; margin-right:1.2vw;width:100%;height:3rem;
          box-shadow:none;margin-top:.5rem;outline:.2px solid #e4e4e4;" @click="morePlist()">더보기 +</v-btn>
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
      backgroundColor: 'black',
      morecount: 1
    }
  },
  computed: {
    ...mapGetters({
      newList: 'getNewList',
      isAuthenticated: 'isAuthenticated',
      isEndNew: 'getisEndNew'
    })
  },
  methods: {
    getColorPeriod (item) {
      if (item.period === '1박 2일') {
        return '#3470FF'
      } else if (item.period === '2박 3일') {
        return '#025F76'
      } else if (item.period === '당일 치기') {
        return '#00BE44'
      } else { return '#E9EFFF' }
    },
    goNonghwalDetail (nhIdx) {
      this.$router.push({name: 'Detail', params: { idx: nhIdx }})
    },
    morePlist () {
      if (this.isAuthenticated) {
        this.$store.dispatch('moreNewLogin', (this.morecount) * 6)
        this.morecount++
      } else {
        this.$store.dispatch('moreNew', (this.morecount) * 6)
        this.morecount++
      }
    },
    clickHeart (item) {
      if (this.isAuthenticated) {
        if (item.isBooked === 0) {
          this.$store.dispatch('addnonghwalBookmark', item.nhIdx)
          item.isBooked = 1
        } else {
          this.$store.dispatch('deletenonghwalBookmark', item.nhIdx)
          item.isBooked = 0
        }
      }
    }
  }
}
</script>

<style scoped>
.newlist_layout{
  padding: 15px 0;
}
.container{
  padding: 0;
}
.card_title{
  font-size: 1.3rem;
  font-weight: 900;
}
.card_detail{
  color:gray;
}
.card_tip{
  height: 2rem;
  padding: .3rem;
  color: white;
}
#card_gutter{
  padding: 1.2vw !important;
}
.heart{
  opacity: .8;
}
</style>
