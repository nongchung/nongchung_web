<template>
    <v-stepper v-model="e1">

        <v-stepper-header>

            <v-stepper-step :complete="e1 > 1" step="1">

                <h3>STEP 1</h3>

                <h4>약관동의</h4>

            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">

                <h3>STEP 2</h3>

                <h4>회원정보 입력</h4>

            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">

                <h3>STEP 3</h3>

                <h4>회원가입 완료</h4>

            </v-stepper-step>

        </v-stepper-header>

        <v-stepper-items>
            <agree-form></agree-form>
            <input-form></input-form>
            <success-reg></success-reg>
        </v-stepper-items>

    </v-stepper>
</template>

<script>
import AgreeForm from './AgreeForm'
import InputForm from './InputForm'
import SuccessReg from './SuccessReg'
export default {

  name: 'RegisterForm',

  data: () => ({

    e1: 0,

    agree1: '',

    agree2: '',

    agree3: '',

    nickname: '',

    email: '',

    emailID: '',

    emailAddr: '',

    password: '',

    sex: '',

    handphone: '',

    birth: ''

  }),
  components: {
    AgreeForm,
    InputForm,
    SuccessReg
  },
  computed () {

  },

  methods: {

    cancel () {
      if (confirm('회원가입을 취소하시겠습니까?')) {
        this.$store.dispatch('exitMain')
      }
    },

    checkAgree () {
      if ((this.agree1 && this.agree2) || this.agree3) {
        this.e1 = 2
      } else {
        console.log(this.agree1)

        alert('약관에 동의하여 주십시오.')
      }
    },

    allCheck () {
      this.agree1 = 'success'

      this.agree2 = 'success'
    }

  }

}
</script>

<style>

</style>
