<template>
   <v-layout row justify-center>
     <!-- <v-flex xs12 sm11 md10 lg9 xl8> -->
     <v-layout column>
     <!-- <v-flex> -->
        <!-- <v-card> -->
       <v-layout row  justify-center style="background:white;">
         <v-flex xs12 sm11 md10 lg9 xl8 mt-4 style="display:flex;justify-content:space-between;padding:0 4vw;">
          <v-flex style="flex: 0 0 auto;">
          <v-card-text style="padding:0;">
            <p style="margin-top:20px; font-size:30px"><strong>{{userInfo.name}}</strong>님</p>
            <p style="font-size:25px">
              <strong>총 <span style="color:#FDC948">{{getTotalHistory.tcount}} 건</span> <span style="color:#3470FF">{{getTotalHistory.ttime}}시간</span>의 활동을</strong> 농활청춘과 함께했어요.
            </p>
              <v-btn outline @click="editMyInfo">프로필 편집</v-btn>
              </v-card-text>
          </v-flex>
          <v-flex style="flex: 0 0 auto;">
              <v-avatar
                  size="104px">
                <img :src="userInfo.img" alt="avatar" style="margin-top:135px">
              </v-avatar>
          </v-flex>
          </v-flex>
       </v-layout>
        <!-- </v-card> -->
         <v-tabs slot="extension" v-model="tabnumber" color="white" slider-color="primary" id="home_tab">
      <v-flex sm1 md2 lg2 xl2></v-flex>
      <v-tab :ripple="false" v-for="i in 3" :key="i" :href="`#tab-${i}`">
        <span style="font-size:1.2rem;font-weight:800;">{{tabname[i-1]}}</span>
      </v-tab>
    </v-tabs>
      <!-- </v-flex> -->
      <v-tabs-items v-model="tabnumber">
      <v-tab-item v-for="i in 3" :id="`tab-${i}`" :key="i" color="white">
        <v-layout column>
          <myhistory v-show="firsttab()"></myhistory>
          <mylike v-show="secondtab()"></mylike>
          <myactivity v-show="thirdtab()"></myactivity>
        </v-layout>
      </v-tab-item>
    </v-tabs-items>
    </v-layout>
    <!-- </v-flex> -->
   </v-layout>
</template>

<script>
import Mylike from './Mylike'
import Myhistory from './Myhistory'
import Myactivity from './Myactivity'

export default {
  name: 'Mypage',
  data () {
    return {
      tabnumber: '',
      tabname: [
        '다녀온 농활', '찜한 농활', '내 활동 신청내역'
      ]
    }
  },
  methods: {
    firsttab () {
      if (this.tabnumber === 'tab-1') { return true } else return false
    },
    secondtab () {
      if (this.tabnumber === 'tab-2') { return true } else return false
    },
    thirdtab () {
      if (this.tabnumber === 'tab-3') { return true } else return false
    },
    editMyInfo () {
      this.$router.push('/Myprofile')
    }
  },
  computed: {
    userInfo () {
      return !this.$store.getters.getUserInfo ? false : this.$store.getters.getUserInfo
    },
    getTotalHistory () {
      return !this.$store.getters.getTotalHistory ? false : this.$store.getters.getTotalHistory
    }
  },
  components: {
    Myhistory,
    Mylike,
    Myactivity
  }
}
</script>

<style scope>
  .content{
    margin-left: 20%;
  }
  .find {
    text-align:center;
    margin-top: 10px;
  }
  #home_tab{
  border-bottom: 2px inset;
  border-bottom-color: rgba(0,0,0,.08);
  /* box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12) !important; */
}
</style>
