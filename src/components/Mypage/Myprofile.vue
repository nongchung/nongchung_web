<template>
   <div class="header">
     <v-spacer></v-spacer>
     <v-flex>
        <v-card>
       <v-layout row>
          <v-layout>
          <v-card-text>
            <p class="content" style="margin-top:20px; font-size:30px"><strong>{{getPersonalUserInfo.name}}</strong>님</p>
            <p class="content" style="margin-bottom:20px; font-size:20px">회원가입시에 입력한 사용자 정보를 수정할 수 있습니다.</p>
              </v-card-text>
          </v-layout>
       </v-layout>
        </v-card>
         <v-tabs slot="extension" v-model="tabnumber" color="white" slider-color="primary" id="home_tab">
      <v-flex sm1 md1 lg2 xl2></v-flex>
      <v-tab :ripple="false" v-for="i in 3" :key="i" :href="`#tab-${i}`">
        <span style="font-size:1.2rem; font-weight:800;" class="mx-2">{{tabname[i-1]}}</span>
      </v-tab>
    </v-tabs>
      </v-flex>
      <v-tabs-items v-model="tabnumber">
      <v-tab-item v-for="i in 3" :id="`tab-${i}`" :key="i" color="white">
        <v-layout column>
          <edit-my-info-form v-show="firsttab()"></edit-my-info-form>
          <edit-my-pass-form v-show="secondtab()"></edit-my-pass-form>
        </v-layout>
      </v-tab-item>
    </v-tabs-items>
   </div>
</template>

<script>
import EditMyInfoForm from './EditMyInfoForm'
import EditMyPassForm from './EditMyPassForm'

export default {
  name: 'EditMyInfo',
  data () {
    return {
      tabnumber: '',
      tabname: [
        '프로필 설정', '계정 설정'
      ]
    }
  },
  components: {
    EditMyInfoForm,
    EditMyPassForm
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
    getPersonalUserInfo () {
      return !this.$store.getters.getuserPersonalInfo ? false : this.$store.getters.getuserPersonalInfo
    }
  }
}
</script>

<style scope>
.header {
    width: 100%;
  }
  .content{
    margin-left: 10%;
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
