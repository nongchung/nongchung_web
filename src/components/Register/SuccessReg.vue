<template>
     <!-- 회원가입 완료 세번째 페이지 -->

            <v-stepper-content step="3">

                <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>

                <v-btn color="primary" @click="e1 = 1">

                    초기화면 이동

                </v-btn>

                <v-btn flat>로그인하기</v-btn>

            </v-stepper-content>

</template>

<script>
export default {
  name: 'SuccessReg'
}
</script>

<style>

</style>
