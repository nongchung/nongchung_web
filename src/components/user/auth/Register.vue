<template>
    <div>
        <h1>회원가입하기</h1>
    <input type="email" v-model="email" placeholder="email"><button @click="validateMail">중복확인</button><br>
    <input type="text" v-model="password" placeholder="password"><br>
    <input type="text" v-model="nickname" placeholder="nickname"><br>
    <input type="text" v-model="name" placeholder="name"><br>
    <select name="sex" v-model="sex">
        <option value="" selected>성별을 입력해주세요</option>
        <option value=1>남성</option>
        <option value=2>여성</option>
    </select><br>
    <input type="text" v-model="hp" placeholder="hp"><br>
    <input type="text" v-model="birth" placeholder="birth"><br>
    <button @click="localRegister">가입하기</button>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      nickname: '',
      password: '',
      name: '',
      sex: '',
      hp: '',
      birth: ''

    }
  },
  computed: {

  },
  methods: {
    validateMail () {
      const email = this.email
      const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
      if (email.match(regExp) != null) {
        this.dup(email)
      } else {
        alert('올바른 이메일 형식을 입력하세요')
      }
    //   this.dup(email)
    },
    dup (email) {
      this.$store.dispach('dup', {email})
    },
    register () {
      const {email, password, nickname, name, sex, hp, birth} = this
      this.$store.dispach('register', {email, password, nickname, name, sex, hp, birth})
    }
  },
  mounted () {

  }
}
</script>

<style>

</style>
