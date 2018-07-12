<template>
  <v-layout row justify-center>
    <v-flex sm8 md6 lg5 xl5 my-4 text-xs-center>
  <v-stepper v-model="e1">
    <!-- 신청하기 스텝 헤더 -->
    <v-stepper-header style="display: flex; justify-content:center; align-items:center; height:23vh;">
      <v-layout column align-center>
      <v-stepper-step :complete="e1 > 1" step="1" mt-3 class="apply_step_header">
      </v-stepper-step>
          <v-flex>STEP 01</v-flex>
          <v-avatar size="6rem" class="my-2">
          <img :src="step1img" alt="Avatar">
          </v-avatar>
          <v-flex>정보입력</v-flex>
      </v-layout>
      <v-divider></v-divider>
       <v-layout column align-center>
      <v-stepper-step :complete="e1 > 2" step="2" mt-3 class="apply_step_header">
      </v-stepper-step>
          <v-flex>STEP 02</v-flex>
          <v-avatar size="6rem" class="my-2">
          <img :src="step2img" alt="Avatar">
          </v-avatar>
          <v-flex>결제예약</v-flex>
      </v-layout>
      <v-divider></v-divider>
       <v-layout column align-center>
      <v-stepper-step step="3" mt-3 class="apply_step_header">
      </v-stepper-step>
          <v-flex>STEP 03</v-flex>
          <v-avatar size="6rem" class="my-2">
          <img :src="step3img" alt="Avatar">
          </v-avatar>
          <v-flex>결제완료</v-flex>
      </v-layout>
    </v-stepper-header>

<!-- 신청하기스텝바디 -->
    <v-stepper-items>
      <!-- step1 -->
      <v-stepper-content step="1" style="padding: 0;">
       <v-layout column>
         <v-flex style="background: #E9EFFF; height:3rem;" text-xs-center>
           <v-flex style="margin-top: .7rem; color: #3470FF; font-family: sans-serif; font-weight: bold;">농활정보</v-flex>
           </v-flex>
         <v-flex pa-4>
           <v-layout>
             <v-flex sm5 :style="{backgroundImage: 'url(' + getSelectedNhImg  + ')'}">
             </v-flex>
             <v-flex>
               <v-layout column pl-4 text-xs-left>
                 <v-flex>{{getSelectedDate}}</v-flex>
                 <v-flex style="font-weight:800; font-size:1.5rem;">{{getSelectedNh}}</v-flex>
                 <v-flex mt-5>{{getSelectedNhAddr}}</v-flex>
               </v-layout>
             </v-flex>
           </v-layout>
         </v-flex>
         <v-flex style="background: #E9EFFF; height:3rem;" text-xs-center>
           <v-flex style="margin-top: .7rem; font-family: sans-serif; color: #3470FF; font-weight: bold;">대원정보</v-flex>
           </v-flex>
         <v-flex pa-4>
           <v-layout row>
             <v-flex xs4 sm3 ml-3>
               <v-avatar size="8rem"><img :src="userPersonalInfo.img" alt="Avatar"></v-avatar>
             </v-flex>
             <v-flex xs6 sm7 ml-5>
               <!-- 신청자폼 시작 -->
               <v-form ref="form1" v-model="valid1" lazy-validation>
                 <!-- 이름 -->
    <v-text-field
      v-model="userName" :rules="nameRules" :counter="10" label="이름" placeholder="김청춘" required
    ></v-text-field>
    <!-- 생일선택 -->
    <!-- 성별 선택 -->
    <v-layout column>
    <v-flex style=" font-size:.8rem; color:grey;" text-xs-left>성별</v-flex>
  <v-radio-group v-model="userSex" row style="margin-top: 0; height: 2.7rem;">
      <v-radio label="여자" value=2 ></v-radio>
      <v-radio label="남자" value=1></v-radio>
    </v-radio-group>
    </v-layout>
    <v-text-field
      v-model="userMail" :rules="emailRules" label="이메일" placeholder="chungchhon@naver.com" required
    ></v-text-field>
    <v-text-field
      v-model="userHP" :rules="hpRules" label="전화번호" placeholder="-포함 입력" required
    ></v-text-field>
  </v-form>
             </v-flex>
           </v-layout>
         </v-flex>
        </v-layout>
      </v-stepper-content>

<!-- step2 -->
      <v-stepper-content step="2" style="padding:0;">
       <v-layout column>
         <v-flex style="background: #E9EFFF; height:3rem;" text-xs-center>
           <v-flex style="margin-top: .7rem; color: #3470FF; font-family: sans-serif; font-weight: bold;">결제 정보</v-flex>
           </v-flex>
           <v-flex style="padding-top: 2vh; padding: 2vh 3vw; padding-bottom: 1vh;">
             <v-layout column text-xs-left>
               <v-flex pa-1>교통비포함</v-flex>
               <v-flex pa-1>새참무료</v-flex>
               <v-flex pa-1>저녁뭐시기</v-flex>
               <v-flex pa-1 mb-2>과일작물수확가능</v-flex>
               <v-divider></v-divider>
               <v-flex style="display:flex; padding-top:1vh; padding-left: .3vw; padding-right: .3vw;">
               <v-flex >추가후원금</v-flex>
               <v-flex text-xs-right >20000원</v-flex>
               </v-flex>
             </v-layout>
           </v-flex>
           <v-flex style="background: #E9EFFF; padding: 2vh 3vw;">
             <v-layout column>
               <v-flex style="display:flex;" pa-1>
               <v-flex text-xs-left>농활가격</v-flex>
               <v-flex text-xs-right >20000원</v-flex>
               </v-flex>
               <v-flex style="display:flex;" pa-1 mb-2>
               <v-flex text-xs-left>수수료</v-flex>
               <v-flex text-xs-right >0원</v-flex>
               </v-flex>
               <v-divider style="background-color:#3470FF;"></v-divider>
               <v-flex style="display:flex; padding-top:1vh; padding-left: .3vw; padding-right: .3vw; color:#3470FF;" >
               <v-flex text-xs-left>최종 가격</v-flex>
               <v-flex text-xs-right >20000원</v-flex>
               </v-flex>
             </v-layout>
           </v-flex>
           <v-flex style="padding: 2vh 3.3vw;">
             <v-layout column>
               <v-flex text-xs-left>결제 수단</v-flex>
               <v-flex>
                 <v-btn color="primary" outline @click="accountTransfer">실시간 계좌이체</v-btn>
               </v-flex>
        </v-layout>
        </v-flex>
        </v-layout>
      </v-stepper-content>

<!-- step3 -->
      <v-stepper-content step="3" style="padding:0;">
        <v-layout column>
         <v-flex style="background: #CEEFEA;" text-xs-center>
           <v-flex style="margin-top: 2rem; color: black; font-family: sans-serif; font-weight: bold;font-size:1.5rem;">{{this.userPersonalInfo.name}}님</v-flex>
          <v-flex style="margin: 2rem 0; color: black; font-family: sans-serif; font-size:1rem;">조금만 기다려주세요! 곧 신나는 농활을 경험할 수 있습니다.</v-flex>
           </v-flex>
           <v-flex>
          <ul>

            <li>문의사항은.......로 연락주세요</li>
            <li>문의사항은.......로 연락주세요</li>
            <li>문의사항은.......로 연락주세요</li>
            <li>문의사항은.......로 연락주세요</li>

  </ul></v-flex>
        </v-layout>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  <v-btn v-if="e1==1" class="mt-3" color="primary" :disabled="!valid1"
      @click="goNext()">다음단계로 ></v-btn>
  <v-form ref="form2" v-model="valid2" lazy-validation v-if="e1==2">
  <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || '동의해주세요!']"
      label="본인은 개인정보 제 3자 제공 동의에 관한 내용을 모두 이해하였으며 이에 동의합니다."
      required
    ></v-checkbox>
  </v-form>
  <v-btn v-if="e1==2" class="mt-3" color="primary" @click="submit(getnhIdx, getschIdx)" :disabled="!valid2">참가신청</v-btn>
  <v-btn v-if="e1==2" class="mt-3" color="primary" outline flat @click="e1 = 1">뒤로가기</v-btn>
  <v-btn v-if="e1==3" class="mt-3" color="warning" @click="goHome()">홈으로</v-btn>
  </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      userName: '',
      userMail: '',
      userSex: 1,
      userImg: '',
      userHP: '',
      userBirth: '',
      // step이미지
      stepimg: [
        {focus: require('../../static/process1@2x.png'),
          blur: require('../../static/process1_uncheck@2x.png') },
        {focus: require('../../static/process2@2x.png'),
          blur: require('../../static/process2_uncheck@2x.png') },
        {focus: require('../../static/process3@2x.png'),
          blur: require('../../static/process3_uncheck@2x.png') }
      ],
      e1: 0,
      // step1데이터
      menu: false,
      nameRules: [
        v => !!v || '이름을 입력해주세요!',
        v => (v && v.length <= 10) || '이름은 10글자 미만이어야 합니다.'
      ],
      emailRules: [
        v => !!v || '이메일을 입력해주세요!',
        v => /.+@.+/.test(v) || '유효한 이메일 주소를 입력해주세요!'
      ],
      hpRules: [
        v => !!v || '전화번호를 입력해주세요',
        v => /^\d+[-]\d+[-]\d+$/.test(v) || '유효한 전화번호를 입력해주세요!'
      ],
      valid1: true,
      // step2데이터
      checkbox: false,
      valid2: true
    }
  },
  computed: {
    ...mapGetters({
      userPersonalInfo: 'getuserPersonalInfo',
      isAuthenticated: 'isAuthenticated',
      nonghwalApplyResult: 'getnonghwalApplyResult'
    }),
    step1img: function () {
      if (this.e1 === 1) { return this.stepimg[0].focus } else { return this.stepimg[0].blur }
    },
    step2img: function () {
      if (this.e1 === 2) { return this.stepimg[1].focus } else { return this.stepimg[1].blur }
    },
    step3img: function () {
      if (this.e1 === 3) { return this.stepimg[2].focus } else { return this.stepimg[2].blur }
    },
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.required && errors.push('주의사항에 동의해주세요!')
      return errors
    },
    getSelectedDate: function () {
      return this.$route.params.selectedDate
    },
    getSelectedNh: function () {
      return this.$route.params.selectedNhName
    },
    getSelectedNhAddr: function () {
      return this.$route.params.selectedNhAddr
    },
    getSelectedNhImg: function () {
      return this.$route.params.selectedNhImg
    },
    getschIdx: function () {
      return this.$route.params.schIdx
    },
    getnhIdx: function () {
      return this.$route.params.nhIdx
    },
    getuserBirth () {
      return this.userPersonalInfo.birthYear + '-' + this.userPersonalInfo.birthMonth + '-' + this.userPersonalInfo.birthDay
    }
  },
  methods: {
    // step1메소드
    goNext () {
      if (this.$refs.form1.validate()) {
        this.e1 = 2
      }
    },
    save (date) {
      this.$refs.menu.save(date)
    },
    // step2메소드
    submit (nhIdx, schIdx) {
      if (this.$refs.form2.validate()) {
        this.callaction(nhIdx, schIdx)
      }
    },
    async fetchUserInfo () {
      const result = await this.$store.dispatch('userPersonalInfo')
      this.userName = result.data[0].name
      this.userMail = result.data[0].mail
      this.userSex = result.data[0].sex
      console.log(this.userSex)
      this.userImg = result.data[0].img
      this.userHP = result.data[0].hp
      this.userBirth = result.data[0].birthYear + '-' + result.data[0].birthMonth + '-' + result.data[0].birthDay
    },
    async callaction (nhIdx, schIdx) {
      await this.$store.dispatch('nonghwalApply', {nhIdx: nhIdx, schIdx: schIdx})
        .then((msg) => {
          this.e1 = 3
        }).catch((err) => {
          console.log(err)
          if (err === 'No token') {
            alert('로그인이 필요합니다.')
          } else if (err === 'Null Value') {
            alert('농활 또는 농활스케줄 오류')
          } else if (err === 'Invalid nhIdxnd schIdx') {
            alert('유효하지 않은 농활 또는 농활스케줄입니다.')
          } else if (err === 'Invalid schIdx') {
            alert('신청불가능한 농활 스케줄입니다.')
          } else if (err === 'Duplicate To Time') {
            alert('이미 신청한 농활 스케줄과 중복됩니다.')
          } else if (err === 'Fail To Request For Application, No Available Person Number') {
            alert('여석이 없습니다. 다른 농활을 신청해주세요.')
          } else { alert('서버에러입니다.') }
        })
    },
    accountTransfer: function () {
      alert('계좌이체 했겠죠?ㅎㅎ 안했다면 양심 쑤레기~')
    },
    // 유저정보통신
    // fetchuserData: function () {
    //   return this.$store.dispatch('userPersonalInfo')
    // },
    goHome: function () {
      this.$router.push('/')
    }
  },
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  created () {
    // this.fetchuserData()
    this.fetchUserInfo()
  }
}
</script>

<style scoped>
.apply_step_header{
  display: none;
}
</style>
