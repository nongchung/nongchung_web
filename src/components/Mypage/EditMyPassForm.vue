<template>
   <div class="header">
     <v-spacer></v-spacer>
      <v-flex xs3 offset-xs4 style="margin-top:40px">
          기존 비빌번호 입력
         <v-text-field
            flat
            v-model="newNickname"
            placeholder="기존 비밀번호를 입력하세요."
            solo
          ></v-text-field>
      </v-flex>
      <v-flex xs3 offset-xs4>
        새 비밀번호 입력
         <v-text-field
            flat
            v-model="newNickname"
            placeholder="새로운 비밀번호를 입력하세요."
            solo
          ></v-text-field>
      </v-flex>
      <v-flex xs3 offset-xs4>
          새 비밀번호 확인
         <v-text-field
            :type="password"
            flat
            v-model="newNickname"
            placeholder="새로운 비밀번호 확인"
            solo
          ></v-text-field>
      </v-flex>
      <v-flex xs3 offset-xs4>
        <v-btn @click="goMain">취소</v-btn>
        <v-btn @click="editMyPass" color="primary" dark>수정하기</v-btn>
      </v-flex>
   </div>
</template>

<script>
export default {
  name: 'EditMyPassForm',
  data () {
    return {
      oldPasswd: '',
      newPasswd: ''
    }
  },
  methods: {
    editMyPass () {
      confirm('비밀번호를 수정하시겠습니까?')
    }
  }
}
</script>

<style scope>

</style>
