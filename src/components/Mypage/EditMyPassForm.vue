<template>
   <v-layout row justify-center>
     <v-flex xs10 sm8 md4 lg3 xl3>
       <v-layout column>
      <v-flex style="margin-top:40px">
          기존 비밀번호 입력
         <v-text-field class="mt-2"
            v-model="oldPasswd"
            label="기존 비밀번호를 입력하세요."
            solo
            type="password"
            required
          ></v-text-field>
      </v-flex>
      <v-flex>
        새 비밀번호 입력
         <v-text-field class="mt-2"
            type="password"
            v-model="newPasswd"
            placeholder="새로운 비밀번호를 입력하세요."
            solo
            :rules="[passRules, checkNewPassword]"
            :counter="10"
            required
          ></v-text-field>
      </v-flex>
      <v-flex>
          새 비밀번호 확인
         <v-text-field class="mt-2"
            type="password"
            v-model="confirmPassword"
            placeholder="새로운 비밀번호 확인"
            solo
            :rules="[passRules, checkPassword]"
            :counter="10"
            v-validate="'required|confirmed:password'"
            required
          ></v-text-field>
          <!-- <v-text-field :counter="12" v-validate="'required|confirmed:password'" data-vv-as="password" label="confirmPassword" hint="비밀번호는 8자 ~ 12자로, 영문숫자 혼용, 특수문자 11개 를 사용하실 수 있습니다." required></v-text-field> -->

        <span style="font-size:.8rem;color:#bdbdbd;" class="mb-3">*비밀번호는 8자 이상 10자 이하의 영문과 숫자 조합으로 가능합니다.</span>
        <br>
      </v-flex>
      <v-flex>
        <v-btn @click="goMain">취소</v-btn>
        <v-btn @click="editMyPass" color="primary" dark>수정하기</v-btn>
      </v-flex>
      </v-layout>
      </v-flex>
   </v-layout>
</template>

<script>
export default {
  name: 'EditMyPassForm',
  data () {
    return {
      oldPasswd: '',
      newPasswd: '',
      confirmPassword: '',
      passRules: [
        v => !!v || 'password is required',
        v => (v && v.length <= 12 && v.length >= 8) || 'Name must be more than 8  less than 12 characters'
      ]
    }
  },
  computed: {
    checkPassword () {
      return this.newPasswd !== this.confirmPassword ? '비밀번호가 일치하지 않습니다.' : true
    },
    checkNewPassword () {
      return this.newPasswd === this.oldPasswd ? '기존 비밀번호와 똑같은 비밀번호로 바꿀 수 없습니다.' : true
    }
  },
  methods: {

    editMyPass () {
      if (this.checkPassword === true && this.checkNewPassword === true) {
        const {oldPasswd, newPasswd} = this
        if (confirm('비밀번호를 수정하시겠습니까?')) {
          this.$store.dispatch('editMyPassword', {oldPasswd, newPasswd})
        }
      } else {
        alert('입력된 값을 확인해주세요')
      }
    },
    goMain () {
      if (confirm('회원 정보 수정을 취소하시겠습니까?')) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scope>

</style>
