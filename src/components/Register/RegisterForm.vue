<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"><h3>STEP 1</h3><h4>약관동의</h4></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"><h3>STEP 2</h3><h4>회원정보 입력</h4></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"><h3>STEP 3</h3><h4>회원가입 완료</h4></v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="500px"
        >
        약관 동의하시오
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn @click="cancel" flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-5"
          color="lighten-1"
          height="500px"
        >
      <v-form ref="form" v-model="valid" lazy-validation>
  <v-container fluid>
    <v-layout row>
      <v-flex xs3>
        <v-card color="grey lighten-1">
          <v-card-text>닉네임</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
           <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="10"
      label="Name"
      required
    ></v-text-field>
      </v-flex>
      <v-flex xs3>
        <v-btn>중복확인</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs3>
        <v-card color="grey lighten-1">
          <v-card-text>이메일</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-text-field
      v-model="mailID"
      :rules="emailRules"
      label="이메일 계정"
      v-bind="select"
      required
    ></v-text-field>
      </v-flex>

      <v-flex xs2>
        <v-text-field
      v-model="mailAddress"
      :rules="emailRules"
      label="이메일 주소"
      required
    >
    {{select}}</v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="이메일 주소 선택"
      required
    ></v-select>
      </v-flex>
      <v-flex xs3>
        <v-btn>중복확인</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 sm6 md3 order-md4 order-sm2>
        <v-card dark tile flat color="red darken-2">
          <v-card-text>#1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 order-md3 order-sm1>
        <v-card dark tile flat color="deep-orange lighten-1">
          <v-card-text>#2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 order-md2 order-sm4>
        <v-card dark tile flat color="deep-orange darken-3">
          <v-card-text>#3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 order-md1 order-sm3>
        <v-card dark tile flat color="deep-orange">
          <v-card-text>#4</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</v-form>
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn @click="cancel" flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="500px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn @click="cancel" flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  data: () => ({
    el: 1,
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: false
  }),

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        // axios.post('/api/submit', {
        //   name: this.name,
        //   email: this.email,
        //   select: this.select,
        //   checkbox: this.checkbox
        // })
      }
    },
    clear () {
      this.$refs.form.reset()
    },
    cancel () {
      this.$store.dispatch('exitMain')
    }
  }
}
</script>

<style>

</style>
