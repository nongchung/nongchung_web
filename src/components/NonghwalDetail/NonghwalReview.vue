<template>
  <v-layout column>
    <v-layout column style="background:white; border: .1px solid #cccccc;">
      <v-flex pt-4 pb-2 px-4>
        <v-layout column>
          <v-flex style="font-weight:bold; color:#4d4d4d;">농활후기</v-flex>
          <v-layout mt-2 py-1 row>
            <v-flex style="font-size:3rem;flex:initial;font-weight:bold;">{{averageStar}}</v-flex>
            <v-flex ml-4 pt-2 style="display:flex;flex-direction:column;flex:initial;">
              <v-flex style="flex:initial;">
                <star-rating style="height:1.5rem;" active-color="#000" :show-rating="false" :increment="0.01" :rating="averageStar" :read-only="true"
                  :star-size="17"></star-rating>
              </v-flex>
              <v-flex style="flex:initial;">후기 {{countReview}}개</v-flex>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-flex>
      <!-- 후기내용 -->
      <!-- 하나씩 돌린다 -->
      <v-flex v-for="(item, index) in nonghwalreview" :key="index" v-show="!noreview">
        <hr style="border:0; height:1px; background: #ccc;">
        <v-layout column ma-4>
          <v-layout row>
            <v-avatar size="3.5rem">
              <img :src="item.uimg">
              <!-- <img src="../../../static/ad_ex.png"> -->
            </v-avatar>
            <v-flex style="display:flex;flex-direction:column;flex:0 0 auto;">
              <v-flex px-4 style="font-weight:bold; color:#4d4d4d;">{{item.name}}</v-flex>
              <v-flex px-4 style="color:#4d4d4d;">{{item.startDate}} 참여</v-flex>
            </v-flex>
          </v-layout>
          <v-flex my-2 pt-1>
            <star-rating style="height:1.5rem;" active-color="#000" :show-rating="false" :increment="0.5" :rating="item.star/2" :read-only="true"
              :star-size="16"></star-rating>
          </v-flex>
          <v-flex mb-2>{{item.content}}</v-flex>
          <v-layout row>
            <v-flex>
              <v-avatar size="5rem" tile class="mr-2" v-for="(img, i) in item.rvImages" :key="i">
                <img v-if="img" :src="img">
              </v-avatar>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-flex>
      <v-flex v-show="noreview">
        <v-divider></v-divider>
        <v-flex text-xs-center ma-4>리뷰없음</v-flex></v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data () {
    return {
      noreview: false
    }
  },
  computed: {
    ...mapGetters({
      nonghwalreview: 'getnonghwalreview'
    }),
    countReview: function () {
      if (!this.noreview) {
        return this.nonghwalreview.length
      } else {
        return '0';
      }
    },
    averageStar: function () {
      let sum = 0
      let avg = 0
      if (!this.noreview) {
        for (let i = 0; i < this.nonghwalreview.length; i++) {
          sum += this.nonghwalreview[i].star
        }
        console.log(this.nonghwalreview.length)

        avg = sum / this.nonghwalreview.length / 2
        return avg
      } else {
        return 0
      }
    }
  },
  props: ['nhIdx'],
  methods: {
    async getAllReview () {
      await this.$store
        .dispatch('getReview', this.nhIdx)
        .then()
        .catch(err => {
          if (err === 'No Reviews') {
            this.noreview = true
          }
        })
    }
  },
  created () {
    this.getAllReview()
  }
}
</script>

<style>
</style>
