<template>
   <div class="header">
     <v-spacer></v-spacer>
     <v-flex xs12>
        <v-card height="180px">
          <v-card-text class="px-0">
            <h2 class="content" style="margin-top:40px">로그인</h2>
            <p class="content">
              회원으로 가입하기 위해서는 먼저, 이용약관 및 개인정보 처리방침을 읽어보시고 동의 후, 개인정보를 입력하시면 됩니다.
            </p>
              </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3 offset-xs4 style="margin-top:40px">
         <v-text-field
            label="email"
            v-model="email"
            placeholder="이메일 입력"
            solo
          ></v-text-field>
      </v-flex>
      <v-flex xs3 offset-xs4>
        <v-text-field  @keyup.13="login"
            type="password"
            label="password"
            v-model="password"
            placeholder="비밀번호 입력"
            solo
          ></v-text-field>
      </v-flex>
      <v-flex xs3 offset-xs4>
        <v-btn @click="login" block color="primary" dark>로그인</v-btn>
      </v-flex>
      <v-flex xs3 offset-xs4>
        <p class="find">아이디 찾기 | 비밀번호 찾기</p>
      </v-flex>
      <v-flex xs3 offset-xs4>
        <p class="find">아직 농활청춘 회원이 아니신가요? <router-link to="/register" activeClass="select" >회원가입</router-link></p>
      </v-flex>
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
      const { email, password } = this
      this.$store.dispatch('login', {email, password})
    }
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
</style>
