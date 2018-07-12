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
        <star-rating v-model="star" :increment="0.5" :star-size="30"></star-rating>
      </v-flex>
      <v-layout>
        <v-flex>
        <v-textarea v-model="content"
          solo
          name="input-7-4"
          label="Solo textarea"
        ></v-textarea>
        <v-flex xs12 sm6 offset-sm3>
          <v-flex xs12 sm8 offset-sm2>
            <div class="dropbox">
              <input class="input-image" type="file" :multiple="true" @change="onFileChangeReview" accept="image/*">
            </div>
            <v-flex v-for="(item, index) in img" :key="index">
              <img class="reviewImg" :src="item" v-if="img" alt="">
            </v-flex>
              <!-- <img class="reviewImg" :src="img" v-if="img" alt=""> -->
          </v-flex>
        </v-flex>
      </v-flex>
      </v-layout>
      </v-layout>
    </v-card>
    <v-layout justify-center>
      <v-btn color="primary" @click="updateReview">등록완료</v-btn>
    </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Editreview',
  data: function () {
    return {
      content: '',
      star: 0,
      rImages: [],
      allDate: '',
      file: [],
      img: [],
      beforeImage: 1
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
    this.makeAllDate()
    this.fetchData()
  },
  methods: {
    makeAllDate: function () {
      const splitEndDate = this.myHistory[this.getPath].endDate.split('.')
      const splitStartDate = this.myHistory[this.getPath].startDate.split('.')
      this.allDate = splitStartDate[0] + '년' + splitStartDate[1] + '월' + splitStartDate[2] + '일' + '~' + splitEndDate[2] + '일'
      return this.allDate
    },
    updateReview () {
      const data = new FormData()

      data.append('scheIdx', this.getScheIdx)
      data.append('content', this.content)
      data.append('star', this.star)
      for (let index = 0; index < this.file.length; index++) {
        data.append('rImages', this.file[index])
      }
      this.$store.dispatch('updateReview', data)
    },
    onFileChangeReview (event) {
      for (let index = 0; index < event.target.files.length; index++) {
        if (event.target.files[index]['type'].split('/')[0] === 'image') {
          this.file[index] = event.target.files[index]
          this.getImage(this.file[index], index)
        }
      }
    },
    getImage (file, index) {
      const fileReader = new FileReader()
      fileReader.onload = () => { // fileRoader가 불러왓을때 이미지에 들어갈 속성
        this.img[index] = fileReader.result
        this.$forceUpdate()
      }
      fileReader.readAsDataURL(file) // data 에서 URL을 긁어옴.
    },
    async fetchData () {
      const result = await this.$store.dispatch('getMyReview', this.getScheIdx)
      this.star = result.data.star
      this.content = result.data.content
      this.img = result.data.img
      this.rIdx = result.data.rIdx
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
 .reviewImg{
     width: 200px;
    height: 200px;
  }
</style>
