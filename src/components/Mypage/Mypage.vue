<template>
   <div class="header">
     <v-spacer></v-spacer>
     <v-flex xs12>

        <v-card height="260px">
       <v-layout row>
          <v-layout>
          <v-card-text style="margin-left:10%">
            <p class="content" style="margin-top:40px; font-size:30px">{{userInfo.name}}님</p>
            <p class="content" style="font-size:25px">
              농활청춘과 함께한 {{getTotalHistory.tcount}} 번 {{getTotalHistory.ttime}}시간
            </p>
              <v-btn outline class="content">프로필 편집</v-btn>
              </v-card-text>
          </v-layout>
          <v-layout xs2>
              <v-avatar style="margin-left:40%"
                  size="104px">
                <img :src="userInfo.img" alt="avatar" style="margin-top:135px">
              </v-avatar>
          </v-layout>
       </v-layout>
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
      if (this.tabnumber === 'tab-1') { return true } else return false
    },
    secondtab () {
      if (this.tabnumber === 'tab-2') { return true } else return false
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
