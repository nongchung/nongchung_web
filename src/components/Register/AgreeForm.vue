<template>
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
</template>

<script>
export default {
  name: 'AgreeForm'
}
</script>

<style>

</style>
