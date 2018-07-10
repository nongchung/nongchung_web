<template>
<v-layout column>
         <v-flex style="background: #CEEFEA; height:3rem;" text-xs-center>
           <v-flex style="margin-top: .7rem; color: #0ABD9D; font-family: sans-serif; font-weight: bold;">결제 정보</v-flex>
           </v-flex>
           <v-flex style="padding-top: 2vh; padding: 2vh 3vw; padding-bottom: 1vh;">
             <v-layout column text-xs-left>
               <v-flex pa-1>교통비포함</v-flex>
               <v-flex pa-1>새참무료</v-flex>
               <v-flex pa-1>저녁뭐시기</v-flex>
               <v-flex pa-1 mb-2>과일작물수확가능</v-flex>
               <v-divider></v-divider>
               <v-flex style="display:flex; padding-top:1vh; padding-left: .3vw; padding-right: .3vw;">
               <v-flex >추가후원금</v-flex>
               <v-flex text-xs-right >20000원</v-flex>
               </v-flex>
             </v-layout>
           </v-flex>
           <v-flex style="background: #CEEFEA; padding: 2vh 3vw;">
             <v-layout column>
               <v-flex style="display:flex;" pa-1>
               <v-flex text-xs-left>농활가격</v-flex>
               <v-flex text-xs-right >20000원</v-flex>
               </v-flex>
               <v-flex style="display:flex;" pa-1 mb-2>
               <v-flex text-xs-left>수수료</v-flex>
               <v-flex text-xs-right >0원</v-flex>
               </v-flex>
               <v-divider style="background-color: #0ABD9D;"></v-divider>
               <v-flex style="display:flex; padding-top:1vh; padding-left: .3vw; padding-right: .3vw; color:#0ABD9D;" >
               <v-flex text-xs-left>최종 가격</v-flex>
               <v-flex text-xs-right >20000원</v-flex>
               </v-flex>
             </v-layout>
           </v-flex>
           <v-flex style="padding: 2vh 3.3vw;">
             <v-layout column>
               <v-flex text-xs-left>결제 수단</v-flex>
               <v-flex>
                 <v-btn color="primary" outline @click="accountTransfer">실시간 계좌이체</v-btn>
               </v-flex>
        </v-layout>
        </v-flex>
        </v-layout>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    accountTransfer: function () {
      alert('계좌이체 했겠죠?ㅎㅎ')
    }
  }
}
</script>

<style scoped>
</style>
