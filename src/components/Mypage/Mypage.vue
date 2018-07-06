<template>
   <div class="header">
     <v-spacer></v-spacer>
     <v-flex xs12>
        <v-card height="250px">
          <v-card-text class="px-0">
            <h2 class="content" style="margin-top:40px"> 님</h2>
            <p class="content">
              회원으로 가입하기 위해서는 먼저, 이용약관 및 개인정보 처리방침을 읽어보시고 동의 후, 개인정보를 입력하시면 됩니다.
                <v-avatar right
                  color="grey lighten-4">
                <img src="" alt="avatar">
              </v-avatar>
            </p>
              </v-card-text>
              <v-btn outline class="content">프로필 편집</v-btn>
        </v-card>
         <v-tabs slot="extension" v-model="tabnumber" color="white" slider-color="cyan" id="home_tab">
      <v-flex sm1 md1 lg2 xl2></v-flex>
      <v-tab :ripple="false" v-for="i in 3" :key="i" :href="`#tab-${i}`">
        <span style="font-size:1.2rem; font-family:san-serif; font-weight:700;">{{tabname[i-1]}}</span>
      </v-tab>
    </v-tabs>
      </v-flex>
      <v-tabs-items v-model="tabnumber">
      <v-tab-item v-for="i in 3" :id="`tab-${i}`" :key="i" color="white">
        <v-layout column>
          <myhistory v-show="firsttab()"></myhistory>
          <mylike v-show="secondtab()"></mylike>
        </v-layout>
      </v-tab-item>
    </v-tabs-items>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Mylike from './Mylike'
import Myhistory from './Myhistory'

export default {
  name: 'Mypage',
  data () {
    return {
      tabnumber: '',
      tabname: [
        '다녀온 농활', '찜한 농활'
      ]
    }
  },
  methods: {
    firsttab () {
      console.log(this.userInfo)
      if (this.tabnumber === 'tab-1') { return true } else return false
    },
    secondtab () {
      if (this.tabnumber === 'tab-2') { return true } else return false
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'userInfo'
    })
  },
  components: {
    Myhistory,
    Mylike
  }
}
</script>

<style scope>
.header {
    width: 100%;
  }
  .content{
    margin-left: 20%;
  }
  .find {
    text-align:center;
    margin-top: 10px;
  }
  #home_tab{
  font-family: sans-serif !important;
  border-bottom: 2px inset;
  border-bottom-color: rgba(0,0,0,.08);
  /* box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12) !important; */
}
</style>
