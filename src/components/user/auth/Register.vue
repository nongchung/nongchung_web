<template>
    <div>
        <h1>회원가입하기</h1>
    <input type="email" v-model="email" placeholder="email"><br>
    <input type="text" v-model="password" placeholder="password"><br>
    <input type="text" v-model="nickname" placeholder="nickname"><button @click="dup">중복확인</button><br>
    <input type="text" v-model="name" placeholder="name"><br>
    <input type="text" v-model="sex" placeholder="sex"><br>
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
    dup () {
      const email = this.email
      this.$store.dispach('dup', {email})
    }
    // localRegister () {
    //   const { email, password, displayName } = this
    //     this.$store.dispatch('register', { email, password, displayName })
    //   },
    // dup () {

    // }
  },
  mounted () {

  }
}
</script>

<style>

</style>
