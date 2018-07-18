<template>
 <v-layout justify-center my-5>
     <v-flex lg10>
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
                        <v-textarea
                        readonly=true,
                        value='제1장 총칙
제1조 (목적)

본 약관은 농활청춘(이하 “회사”)와 회사가 제공하는 농활청춘 서비스를 이용하는 회원 간의 서비스를 이용하는 회원(이하 “회원”) 간의 서비스 이용에 관한 권리·의무 관련
사항을 정함을 그 목적으로 합니다.

제2조 (정의)

본 약관에서 사용하는 용어의 정의는 다음 각 호와 같습니다.
1. 서비스 : 회원이 전자적 시스템에 접속하여 홈페이지에서 온라인상의 거래 등을 할 수 있게 본 약관에 따라 회사가 제공하는 서비스를 말합니다.
2. 홈페이지 : 본 약관에 따라 회사가 제공하는 서비스가 구현되는 온라인상의 웹페이지를 말합니다.'
                        >

                        </v-textarea>
                    </v-flex>
                    <v-flex xs12>
                        <v-checkbox v-model="agree1" label="이용약관에 동의합니다." color="primary" value="primary" hide-details></v-checkbox>
                    </v-flex>
                    <v-flex xs12>
                        <v-card>
                            <v-card-text>
                                <h3>회원가입 약관</h3>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                     <v-flex xs12>
                        <v-textarea
                        readonly=true,
                        value='여러분을 환영합니다.

                            농활청춘 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 농활청춘 서비스의 이용과 관련하여 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 농활청춘 허비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 농활청춘 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                            농활청춘  서비스를 이용하시거나 농활청춘 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.
                            다양한 농촌활동 즐겨보세요.

                            농활청춘은 웹사이트 및 응용프로그램(어플리케이션, 앱)을 통해 정보 검색, 다른 이용자와의 커뮤니케이션, 콘텐츠 제공, 상품 쇼핑 등 여러분의 생활에 편리함을 더할 수 있는 다양한 서비스를 제공하고 있습니다.
                            여러분은 PC, 휴대폰 등 인터넷 이용이 가능한 각종 단말기를 통해 각양각색의 농활청춘 서비스를 자유롭게 이용하실 수 있으며,
                            농활청춘은 기본적으로 여러분 모두에게 동일한 내용의 서비스를 제공합니다. 다만, 청소년보호법 등 관련 법령이나 기타 개별 서비스 제공에서의 특별한 필요에 의해서 연령 또는 일정한 등급을 기준으로 이용자를 구분하여 제공하는 서비스의 내용, 이용 시간, 이용 횟수 등을 다르게 하는 등 일부 이용을 제한하는 경우가 있습니다. 자세한 내용은 역시 각 서비스 상의 안내, 공지사항, 고객센터 도움말 등에서 확인하실 수 있습니다.'
                        >

                        </v-textarea>
                    </v-flex>
                    <v-flex xs12>
                        <v-checkbox v-model="agree2" label="회원가입에 동의합니다." color="primary" value="primary" hide-details></v-checkbox>
                    </v-flex>
                    <v-flex xs12>
                        <v-checkbox v-model="agree3" label="전체 동의" color="primary" value="primary" hide-details @click="allCheck"></v-checkbox>
                    </v-flex>
                </v-card>
                <v-btn color="primary" @click="checkAgree">
                    확인
                </v-btn>
                <v-btn @click="cancel" flat>취소</v-btn>
            </v-stepper-content>

            <!-- 회원정보 입력 회원가입 두번째 페이지 -->
            <v-stepper-content step="2">
                <v-card class="mb-5" color="lighten-1">
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-container fluid>
                            <v-layout row justify-center style="margin-left:110px">
                                <v-flex xs3>
                                    <v-card color="registerBtn">
                                        <v-card-text>닉네임</v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs6>
                                    <v-text-field v-model="nickname" :rules="nameRules" :counter="10" label="Nickname" required></v-text-field>
                                </v-flex>
                                <v-flex xs2>
                                    <v-btn @click="dupCheckNickname">중복확인</v-btn>
                                </v-flex>
                            </v-layout>
                                <v-layout row justify-center style="margin-left:110px">
                                <v-flex xs3>
                                    <v-card color="registerBtn">
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
                                <v-flex xs2>
                                    <v-btn @click="validateMail">중복확인</v-btn>
                                </v-flex>
                            </v-layout>
                            <v-layout row justify-center>
                                <v-flex xs2>
                                    <v-card color="registerBtn">
                                        <v-card-text>비밀번호</v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs6>
                                    <v-text-field v-model="password" :append-icon="show4 ? 'visibility_off' : 'visibility'" :rules="passRules" :type="show4 ? 'text' : 'password'" :counter="12" @click:append="show4 = !show4" label="Password" hint="비밀번호는 8자 ~ 12자로, 영문숫자 혼용, 특수문자 11개 를 사용하실 수 있습니다." required></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row justify-center>
                                <v-flex xs2>
                                    <v-card color="registerBtn">
                                        <v-card-text>비밀번호 확인</v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-text-field v-model="confirmPassword" :append-icon="show4 ? 'visibility_off' : 'visibility'" :rules="[passRules, checkPassword]" :type="show4 ? 'text' : 'password'" :counter="12" v-validate="'required|confirmed:password'" data-vv-as="password" label="confirmPassword" hint="비밀번호는 8자 ~ 12자로, 영문숫자 혼용, 특수문자 11개 를 사용하실 수 있습니다." required></v-text-field>
                             </v-flex>
                            </v-layout>
                            <v-layout row justify-center>
                                <v-flex xs2>
                                    <v-card color="registerBtn">
                                        <v-card-text>이름</v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Name" required></v-text-field>
                                </v-flex>
                            </v-layout>
                           <v-layout row justify-center>
                                <v-flex xs2>
                                    <v-card color="registerBtn">
                                        <v-card-text>휴대폰 번호</v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-text-field v-model="handphone" :rules="hpRules" label="HP" hint="'-'를 포함하여 입력해주세요 ex)010-1234-5678"></v-text-field>
                                </v-flex>
                            </v-layout>
                           <v-layout row justify-center>
                                <v-flex xs2>
                                    <v-card color="registerBtn">

                                        <v-card-text>성별</v-card-text>

                                    </v-card>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-radio-group v-model="sex" :mandatory="false" required>
                                        <v-radio label="남성" value="1"></v-radio>
                                        <v-radio label="여성" value="2"></v-radio>
                                    </v-radio-group>
                                </v-flex>
                            </v-layout>
                            <v-layout row justify-center>
                                <v-flex xs2>
                                    <v-card color="registerBtn">
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
                <v-btn color="primary" @click="register">
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
    </v-flex>
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
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
    confirmPassword: '',
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
    passRules: [
      v => !!v || 'password is required',
      v => (v && v.length <= 12 && v.length >= 8) || 'Name must be more than 8  less than 12 characters'
    ],
    hpRules: [
      v => !!v || 'HP number is required',
      v => /^\d{3}-\d{3,4}-\d{4}$/.test(v) || 'HP number must be valid'
    ]
  }),
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  computed: {
    ...mapGetters({
      isDup: 'isDupCheck'
    }),
    checkPassword () {
      return this.password !== this.confirmPassword ? '비밀번호가 일치하지 않습니다.' : true
    }
  },
  methods: {
    cancel () {
      console.log(this.birth)
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
      if (this.isDup[0] && this.isDup[1]) {
        const {email, password, nickname, name, sex, handphone, birth} = this
        this.$store.dispatch('register', {email, password, nickname, name, sex, handphone, birth}).then(this.e1 = 3)
      } else {
        alert('중복체크를 해 주세요')
      }
    },
    inputAddr () {
      if (this.select === '직접입력하기') {
        this.emailAddr = this.emailAddr
      } else {
        this.emailAddr = this.select
      }
    }

  }

}
</script>

<style>

</style>
