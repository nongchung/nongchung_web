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

            <!-- 약관동의 회원가입 첫 페이지 -->

            <v-stepper-content step="1">

                <v-card class="mb-5" height="500px">

                    <v-flex xs12>

                        <v-card>

                            <v-card-text>

                                <h3>이용약관</h3>

                            </v-card-text>

                        </v-card>

                    </v-flex>

                    <v-flex xs12>

                        <v-textarea>

                            <div slot="label">

                                Bio <small>(optional)</small>

                            </div>

                        </v-textarea>

                    </v-flex>

                    <v-flex xs12>

                        <v-checkbox v-model="agree1" label="이용약관에 동의합니다." color="success" value="success" hide-details></v-checkbox>

                    </v-flex>

                    <v-flex xs12>

                        <v-card>

                            <v-card-text>

                                <h3>회원가입 약관</h3>

                            </v-card-text>

                        </v-card>

                    </v-flex>

                    <v-flex xs12>

                        <v-textarea>

                            <div slot="label">

                                Bio <small>(optional)</small>

                            </div>

                        </v-textarea>

                    </v-flex>

                    <v-flex xs12>

                        <v-checkbox v-model="agree2" label="회원가입에 동의합니다." color="success" value="success" hide-details></v-checkbox>

                    </v-flex>

                    <v-flex xs12>

                        <v-checkbox v-model="agree3" label="전체 동의" color="success" value="success" hide-details @click="allCheck"></v-checkbox>

                    </v-flex>

                </v-card>

                <v-btn color="primary" @click="checkAgree">

                    확인

                </v-btn>

                <v-btn @click="cancel" flat>취소</v-btn>

            </v-stepper-content>

            <!-- 회원정보 입력 회원가입 두번째 페이지 -->

            <v-stepper-content step="2">

                <v-card class="mb-5" color="lighten-1" height="800px">

                    <v-form ref="form" v-model="valid" lazy-validation>

                        <v-container fluid>

                            <v-layout row>

                                <v-flex xs2>

                                    <v-card color="grey lighten-1">

                                        <v-card-text>닉네임</v-card-text>

                                    </v-card>

                                </v-flex>

                                <v-flex xs6>

                                    <v-text-field v-model="nickname" :rules="nameRules" :counter="10" label="Nickname" required></v-text-field>

                                </v-flex>

                                <v-flex xs3>

                                    <v-btn @click="dupCheckNickname">중복확인</v-btn>

                                </v-flex>

                            </v-layout>

                            <v-layout row>

                                <v-flex xs2>

                                    <v-card color="grey lighten-1">

                                        <v-card-text>이메일</v-card-text>

                                    </v-card>

                                </v-flex>

                                <v-flex xs2>

                                    <v-text-field v-model="emailID" label="이메일 계정" placeholder="example" suffix="@"></v-text-field>

                                </v-flex>

                                <v-flex xs2>

                                    <v-text-field v-model="emailAddr" label="Email address" placeholder="example.com"></v-text-field>

                                </v-flex>

                                <v-flex xs2>

                                    <v-select @change="inputAddr" v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="이메일 주소 선택" required></v-select>

                                </v-flex>

                                <v-flex xs3>

                                    <v-btn @click="validateMail">중복확인</v-btn>

                                </v-flex>

                            </v-layout>

                            <v-layout row>

                                <v-flex xs2>

                                    <v-card color="grey lighten-1">

                                        <v-card-text>비밀번호</v-card-text>

                                    </v-card>

                                </v-flex>

                                <v-flex xs6>

                                    <v-text-field v-model="password" :append-icon="show4 ? 'visibility_off' : 'visibility'" :rules="[rules.required, rules.min]" :type="show4 ? 'text' : 'password'" :counter="12" label="Password" hint="비밀번호는 8자 ~ 12자로, 영문숫자 혼용, 특수문자 11개 를 사용하실 수 있습니다." required></v-text-field>

                                </v-flex>

                            </v-layout>

                            <v-layout row>

                                <v-flex xs2>

                                    <v-card color="grey lighten-1">

                                        <v-card-text>비밀번호 확인</v-card-text>

                                    </v-card>

                                </v-flex>

                                <v-flex xs12 sm6>

                                    <v-text-field :append-icon="show4 ? 'visibility_off' : 'visibility'" :rules="[rules]" :type="show4 ? 'text' : 'password'" hint="At least 8 characters" @click:append="show4 = !show4"></v-text-field>

                                </v-flex>

                            </v-layout>

                            <v-layout row>

                                <v-flex xs2>

                                    <v-card color="grey lighten-1">

                                        <v-card-text>이름</v-card-text>

                                    </v-card>

                                </v-flex>

                                <v-flex xs12 sm6>

                                    <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Name" required></v-text-field>

                                </v-flex>

                            </v-layout>

                            <v-layout row>

                                <v-flex xs2>

                                    <v-card color="grey lighten-1">

                                        <v-card-text>휴대폰 번호</v-card-text>

                                    </v-card>

                                </v-flex>

                                <v-flex xs12 sm6>

                                    <v-text-field v-model="handphone" :rules="nameRules" label="HP" hint="'-'를 포함하여 입력해주세요 ex)010-1234-5678" required></v-text-field>

                                </v-flex>

                            </v-layout>

                            <v-layout row>

                                <v-flex xs2>

                                    <v-card color="grey lighten-1">

                                        <v-card-text>성별</v-card-text>

                                    </v-card>

                                </v-flex>

                                <v-flex xs12 sm6>

                                    <v-radio-group v-model="sex" :mandatory="false">

                                        <v-radio label="남성" value="1"></v-radio>

                                        <v-radio label="여성" value="2"></v-radio>

                                    </v-radio-group>

                                </v-flex>

                            </v-layout>

                            <v-layout row>

                                <v-flex xs2>

                                    <v-card color="grey lighten-1">

                                        <v-card-text>생년월일</v-card-text>

                                    </v-card>

                                </v-flex>

                                <v-flex xs12 sm6>

                                    <v-menu ref="menu" :close-on-content-click="false" v-model="menu" :nudge-right="40" lazy transition="scale-transition" offset-y full-width min-width="290px">

                                        <v-text-field slot="activator" v-model="birth" label="Birthday date" prepend-icon="event" readonly></v-text-field>

                                        <v-date-picker ref="picker" v-model="birth" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>

                                    </v-menu>

                                </v-flex>

                            </v-layout>

                        </v-container>

                    </v-form>

                </v-card>

                <v-btn color="primary" @click="e1 = 3">

                    Continue

                </v-btn>

                <v-btn @click="cancel" flat>Cancel</v-btn>

            </v-stepper-content>

            <!-- 회원가입 완료 세번째 페이지 -->

            <v-stepper-content step="3">

                <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>

                <v-btn color="primary" @click="goRoute('/')">

                    초기화면 이동

                </v-btn>

                <v-btn flat @click="goRoute('/Login')">로그인하기</v-btn>

            </v-stepper-content>

        </v-stepper-items>

    </v-stepper>
</template>

<script>
export default {

  name: 'RegisterForm',

  data: () => ({

    e1: 0,

    valid: true,

    show4: false,

    agree1: '',

    agree2: '',

    agree3: '',

    nickname: '',

    email: '',

    emailID: '',

    emailAddr: '',

    name: '',

    password: '',

    sex: 1,

    handphone: '',

    birth: '',

    menu: false,

    select: null,

    items: [

      '직접입력하기',

      'naver.com',

      'gmail.com',

      'daum.net'

    ],

    nameRules: [

      v => !!v || 'Name is required',

      v => (v && v.length <= 10) || 'Name must be less than 10 characters'

    ],

    emailRules: [

      v => !!v || 'E-mail is required',

      v => /.+@.+/.test(v) || 'E-mail must be valid'

    ],

    rules: [

      v => !!v || 'Name is required',

      v => (v && v.length <= 10) || 'Name must be less than 10 characters'

    ]

  }),

  computed () {

  },

  watch: {

    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },

  methods: {

    cancel () {
      if (confirm('회원가입을 취소하시겠습니까?')) {
        this.$router.push('/')
      }
    },

    clear () {
      this.$refs.form.reset()
    },

    save (birth) {
      this.$refs.menu.save(birth)
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
    },
    goRoute (path) {
      this.$router.push(path)
    },
    validateMail () {
      this.email = this.emailID + '@' + this.emailAddr
      console.log(this.email)
      const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
      if (this.email.match(regExp) != null) {
        this.dupCheckEmail(this.email)
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
    register () {
      console.log(this)
      const {email, password, nickname, name, sex, handphone, birth} = this
      this.$store.dispatch('register', {email, password, nickname, name, sex, handphone, birth})
    },
    inputAddr () {
      if (this.select === '직접입력하기') {
        this.emailAddr = ''
      } else {
        this.emailAddr = this.select
      }
    }

  }

}
</script>

<style>

</style>
