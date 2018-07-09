<template>
  <v-layout row justify-center>
    <v-flex xs6 mt-4>
      <v-card>
      <v-card-title class="headline font-weight-regular white--text title"><span class="titleFont">농활 정보</span></v-card-title>
      <v-layout row justify-center pa-4>
      <v-flex>
        <v-card-media :src="myHistory[getPath].img" height="151px" width="253px"></v-card-media>
      </v-flex>
      <v-layout row justify-center pa-4>
        <v-flex>
        <span>{{this.makeAllDate()}} {{myHistory[getPath].period}} 동안</span>
        <h3>{{myHistory[getPath].name}}</h3>
        <v-subheader class="pa-0">{{myHistory[getPath].addr}}</v-subheader>
      </v-flex>
      </v-layout>
      </v-layout>
    </v-card>
      <v-card>
      <v-card-title class="headline font-weight-regular white--text title"><span class="titleFont">농활 후기</span></v-card-title>
        <v-layout column justify-center pa-4>
      <v-flex>
        <v-subheader class="pa-0">별점</v-subheader>
      </v-flex>
      <v-layout>
        <v-flex>
        <v-textarea v-model="content"
          solo
          name="input-7-4"
          label="Solo textarea"
          placeholder="후기를 작성해주세요. 욕설 허위 사실 개인정보 기재할시에 민형사상 처벌을 받을 수 있습니다."
        ></v-textarea>
      </v-flex>
      </v-layout>
      </v-layout>
    </v-card>
    <v-layout justify-center>
      <v-btn color="primary" @click="submitReview">등록완료</v-btn>
    </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Writereview',
  data: function () {
    return {
      content: '',
      star: 0,
      rImages: [],
      allDate: ''
    }
  },
  computed: {
    getPath: function () {
      return this.$route.params.arrIndex
    },
    getScheIdx: function () {
      return this.$route.params.idx
    },
    ...mapGetters({
      myHistory: 'getMyHistory'
    })
  },
  created () {
    console.log(this.getPath)
    this.makeAllDate()
  },
  methods: {
    makeAllDate: function () {
      const splitEndDate = this.myHistory[this.getPath].endDate.split('-')
      const splitStartDate = this.myHistory[this.getPath].startDate.split('-')
      this.allDate = splitStartDate[0] + '년' + splitStartDate[1] + '월' + splitStartDate[2] + '일' + '~' + splitEndDate[2] + '일'
      return this.allDate
    },
    submitReview: function () {
      const {rImages, content, star} = this
      const scheIdx = this.getScheIdx
      this.$store.dispatch('writeReview', {scheIdx, rImages, content, star})
    }
  }
}
</script>

<style>
 .title {
   /* background-color: #2BCAB0;
   opacity: 0.1; */
   background: #2BCAB0;
   background: rgba(43, 202, 176, 0.1)
 }
 .titleFont {
   color: #2BCAB0;
 }
</style>
