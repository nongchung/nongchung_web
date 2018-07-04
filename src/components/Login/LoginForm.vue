<template>
    <div>
        <h1>로그인하기</h1>
        <input type="email" v-model="email" placeholder="email"><br>
        <input type="password" v-model="password" placeholder="password"><br>
        <button @click="login">로그인하기</button>
        <router-link to="/register" tag="li" activeClass="select" >회원가입</router-link>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log(this)
      const { email, password } = this
      this.$store.dispatch('login', {email, password})
    }
  }
}
</script>

<style>

</style>
