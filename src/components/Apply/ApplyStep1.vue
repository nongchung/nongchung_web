<template>
<v-layout column>
         <v-flex style="background: #CEEFEA; height:3rem;" text-xs-center>
           <v-flex style="margin-top: .7rem; color: #0ABD9D; font-family: sans-serif; font-weight: bold;">농활정보</v-flex>
           </v-flex>
         <v-flex pa-4>
           <v-layout>
             <v-flex sm5 :style="{backgroundImage: item}">
             </v-flex>
             <v-flex>
               <v-layout column pl-4 text-xs-left>
                 <v-flex>날짜날짜날짜날짜</v-flex>
                 <v-flex>제주행복감귤농장</v-flex>
                 <v-flex>주소주소주소</v-flex>
                 <v-flex>상세주소주소</v-flex>
               </v-layout>
             </v-flex>
           </v-layout>
         </v-flex>
         <v-flex style="background: #CEEFEA; height:3rem;" text-xs-center>
           <v-flex style="margin-top: .7rem; color: #0ABD9D; font-family: sans-serif; font-weight: bold;">대원정보</v-flex>
           </v-flex>
         <v-flex pa-4>
           <v-layout row>
             <v-flex sm3 ml-2>
               <v-avatar size="6rem"><img src="../../../static/ad_ex.png" alt="Avatar"></v-avatar>
             </v-flex>
             <v-flex sm7 ml-5>
               <!-- 신청자폼 시작 -->
               <v-form ref="form1" v-model="valid" lazy-validation>
                 <!-- 이름 -->
    <v-text-field
      v-model="name" :rules="nameRules" :counter="10" label="이름" placeholder="김청춘" required
    ></v-text-field>
    <!-- 생일선택 -->
    <v-menu ref="menu" :close-on-content-click="false" v-model="menu" :nudge-right="40"
    lazy transition="scale-transition" offset-y full-width min-width="20vw">
    <v-text-field slot="activator" v-model="date" label="생년월일" readonly required
    :rules="[v => !!v || '생일을 선택하세요!']"></v-text-field>
    <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)"
      min="1940-01-01" @change="save"></v-date-picker>
     </v-menu>
    <!-- 성별 선택 -->
    <v-layout column>
    <v-flex style=" font-size:.8rem; color:grey;" text-xs-left>성별</v-flex>
  <v-radio-group v-model="sex" row style="margin-top: 0; height: 2.7rem;">
      <v-radio label="여자" value="2" ></v-radio>
      <v-radio label="남자" value="1"></v-radio>
    </v-radio-group>
    </v-layout>
    <v-text-field
      v-model="email" :rules="emailRules" label="이메일" placeholder="chungchhon@naver.com" required
    ></v-text-field>
    <v-text-field
      v-model="hp" :rules="hpRules" label="전화번호" placeholder="-포함 입력" required
    ></v-text-field>
  </v-form>
             </v-flex>
           </v-layout>
         </v-flex>
        <!-- <v-flex sm2 text-sm-center mb-3>
        <v-btn color="primary" @click="e1 = 2">다음단계로 ></v-btn>
        </v-flex> -->
        </v-layout>
</template>

<script>
export default {
  data () {
    return {
      item: 'url("../../../static/ad_ex.png")',
      date: '2017-07-05',
      menu: false,
      valid: false,
      name: '',
      email: '',
      nameRules: [
        v => !!v || '이름을 입력해주세요!',
        v => (v && v.length <= 10) || '이름은 10글자 미만이어야 합니다.'
      ],
      emailRules: [
        v => !!v || '이메일을 입력해주세요!',
        v => /.+@.+/.test(v) || '유효한 이메일 주소를 입력해주세요!'
      ],
      hp: '',
      hpRules: [
        v => !!v || '전화번호를 입력해주세요',
        v => /^\d+[-]\d+[-]\d+$/.test(v) || '유효한 전화번호를 입력해주세요!'
      ],
      sex: null
    }
  },
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    }
  }
}
</script>

<style>

</style>
