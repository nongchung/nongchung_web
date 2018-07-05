<template>
    <!-- 회원정보 입력 회원가입 두번째 페이지 -->

            <v-stepper-content step="2">

                <v-card class="mb-5" height="500px">

                    <v-container fluid>

                        <v-layout row>

                            <v-flex xs2>

                                <v-card color="grey lighten-1">

                                    <v-card-text>닉네임</v-card-text>

                                </v-card>

                            </v-flex>

                            <v-flex xs6>

                                <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Name" required></v-text-field>

                            </v-flex>

                            <v-flex xs3>

                                <v-btn>중복확인</v-btn>

                            </v-flex>

                        </v-layout>

                    </v-container>

                </v-card>

                <v-btn color="primary" @click="e1 = 3">

                    확인

                </v-btn>

                <v-btn @click="cancel" flat>취소</v-btn>

            </v-stepper-content>
</template>

<script>
export default {
  name: 'InputForm'
}
</script>

<style>

</style>
