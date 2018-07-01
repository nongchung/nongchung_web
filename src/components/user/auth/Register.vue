<template>
    <div>
        <h1>회원가입하기</h1>
    <input type="email" v-model="email" placeholder="email"><button @click="validateMail">중복확인</button><br>
    <input type="password" v-model="password" placeholder="password"><br>
    <input type="text" v-model="nickname" placeholder="nickname"><button @click="dupCheckNickname">중복확인</button><br>
    <input type="text" v-model="name" placeholder="name"><br>
    <select name="sex" v-model="sex">
        <option value="" selected>성별을 입력해주세요</option>
        <option value=1>남성</option>
        <option value=2>여성</option>
    </select><br>
    <input type="text" v-model="handphone" placeholder="handphone"><br>
    <input type="date" v-model="birth" placeholder="birth"><br>
    <button @click="regValidate">가입하기</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      nickname: '',
      password: '',
      name: '',
      sex: '',
      handphone: '',
      birth: ''
    }
  },
  computed: {
    ...mapGetters([
      'isDupCheck'
    ])
  },
  methods: {
    validateMail () {
      const email = this.email
      const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
      if (email.match(regExp) != null) {
        this.dupCheckEmail(email)
      } else {
        alert('올바른 이메일 형식을 입력하세요')
      }
    },
    dupCheckEmail (email) {
      this.$store.dispatch('dupEmail', {email})
    },
    dupCheckNickname () {
      const nickname = this.nickname
      this.$store.dispatch('dupNickname', {nickname})
    },
    regValidate () {
      console.log(this.isDupCheck)
      if (this.isDupCheck[0] && this.isDupCheck[1]) {
        this.register()
      } else {
        alert('중복체크를 해 주세요')
      }
    },
    register () {
      console.log(this)
      const {email, password, nickname, name, sex, handphone, birth} = this
      this.$store.dispatch('register', {email, password, nickname, name, sex, handphone, birth})
    }
  },
  mounted () {

  }
}
</script>

<style>

</style>
