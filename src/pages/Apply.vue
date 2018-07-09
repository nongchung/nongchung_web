<template>
  <v-layout row justify-center>
    <v-flex sm8 md6 lg5 xl5 my-4>
  <v-stepper v-model="e1">
    <v-stepper-header style="display: flex; justify-content:center; align-items:center; height:23vh;">
      <v-layout column align-center>
      <v-stepper-step :complete="e1 > 1" step="1" mt-3 class="apply_step_header">
      </v-stepper-step>
          <v-flex>STEP 01</v-flex>
          <v-avatar size="5.5rem" class="my-2">
          <img src="../../static/ad_ex.png" alt="Avatar">
          </v-avatar>
          <v-flex>정보입력</v-flex>
      </v-layout>
      <v-divider></v-divider>

       <v-layout column align-center>
      <v-stepper-step :complete="e1 > 2" step="2" mt-3 class="apply_step_header">
      </v-stepper-step>
          <v-flex>STEP 02</v-flex>
          <v-avatar size="5.5rem" class="my-2">
          <img src="../../static/ad_ex.png" alt="Avatar">
          </v-avatar>
          <v-flex>결제예약</v-flex>
      </v-layout>
      <v-divider></v-divider>

       <v-layout column align-center>
      <v-stepper-step step="3" mt-3 class="apply_step_header">
      </v-stepper-step>
          <v-flex>STEP 03</v-flex>
          <v-avatar size="5.5rem" class="my-2">
          <img src="../../static/ad_ex.png" alt="Avatar">
          </v-avatar>
          <v-flex>결제완료</v-flex>
      </v-layout>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1" style="padding: 0;">
       <v-layout column>
         <v-flex style="background: #CEEFEA; height:3rem;" text-xs-center>
           <v-flex style="margin-top: .7rem; color: #0ABD9D; font-family: sans-serif; font-weight: bold;">농활정보</v-flex>
           </v-flex>
         <v-flex pa-4>
           <v-layout>
             <v-flex sm5 :style="{backgroundImage: item}">
             </v-flex>
             <v-flex>
               <v-layout column pl-4>
                 <v-flex>날짜날짜날짜날짜</v-flex>
                 <v-flex>제주행복감귤농장</v-flex>
                 <v-flex>주소주소주소</v-flex>
                 <v-flex>상세주소주소</v-flex>
               </v-layout>
             </v-flex>
           </v-layout>
         </v-flex>
         <v-flex style="background: #CEEFEA; height:3rem;" text-xs-center>
           <v-flex style="margin-top: .7rem; color: #0ABD9D; font-family: sans-serif; font-weight: bold;">대원정보</v-flex>
           </v-flex>
         <v-flex pa-4>
           <v-layout row justify-center>
             <v-flex ml-4>
               <v-avatar size="6rem"><img src="../../static/ad_ex.png" alt="Avatar"></v-avatar>
             </v-flex>
             <v-flex sm7 mr-4>
               <v-form v-model="valid">
    <v-text-field
      v-model="name" :rules="nameRules" :counter="10" label="Name" placeholder="김청춘"
    ></v-text-field>
    <v-layout row>
      <v-select
          :items="items" label="년"
        ></v-select>
        <v-select
          :items="items" label="월"
        ></v-select>
        <v-select
          :items="items" label="일"
        ></v-select>
    </v-layout>
  <v-radio-group v-model="row" row>
      <v-radio label="여자" value="1" ></v-radio>
      <v-radio label="남자" value="0"></v-radio>
    </v-radio-group>
    <v-text-field
      v-model="email" :rules="emailRules" label="E-mail" placeholder="chungchhon@naver.com" required
    ></v-text-field>
    <v-text-field
      v-model="hp" :rules="hpRules" label="PhoneNumber" placeholder="-없이 입력" required
    ></v-text-field>
  </v-form>
             </v-flex>
           </v-layout>
         </v-flex>
        <v-flex sm2 text-sm-center mb-3>
        <v-btn color="primary" @click="e1 = 2">다음단계로 ></v-btn>
        </v-flex>
        </v-layout>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="200px"
        ></v-card>
        <v-btn color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn flat @click="e1 = 1">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      e1: 0,
      item: 'url("../../static/ad_ex.png")'
    }
  }
}
</script>

<style scoped>
.apply_step_header{
  display: none;
}
</style>
