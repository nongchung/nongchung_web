<template>
   <div class="header">
     <v-spacer></v-spacer>
      <v-flex xs3 offset-xs4 style="margin-top:40px">
         <v-layout xs2>
             프로필 사진
              <v-avatar style="margin-left:20%"
                  size="104px">
                <img :src="getPersonalUserInfo.img" alt="avatar">
              </v-avatar>
          </v-layout>
      </v-flex>
      <v-flex xs3 offset-xs4>
          닉네임
         <v-text-field
            v-model="nickname"
            placeholder="바꿀 닉네임을 입력하세요"
            solo
          ></v-text-field>
      </v-flex>
      <v-flex xs3 offset-xs4 :readonly="true">
          이름
          <v-text-field
            v-model="getPersonalUserInfo.name"
            label="name"
            disabled
          ></v-text-field>
        </v-flex>
      <v-flex xs3 offset-xs4 :readonly="true">
          이메일
          <v-text-field
            v-model="getPersonalUserInfo.mail"
            label="mail"
            disabled
          ></v-text-field>
        </v-flex>
      <v-flex xs3 offset-xs4 :readonly="true">
          핸드폰번호
          <v-text-field
            v-model="getPersonalUserInfo.hp"
            label="HP"
            disabled
          ></v-text-field>
        </v-flex>
      <v-flex xs3 offset-xs4>
        <v-btn @click="login">취소</v-btn>
        <v-btn @click="editMyInfo" color="primary" dark>수정하기</v-btn>
      </v-flex>
   </div>
</template>

<script>
export default {
  name: 'EditMyInfoForm',
  data () {
    return {
      newNickname: '',
      newImage: null
    }
  },
  computed: {
    userInfo () {
      return !this.$store.getters.getUserInfo ? false : this.$store.getters.getUserInfo
    },
    getPersonalUserInfo () {
      return !this.$store.getters.getuserPersonalInfo ? false : this.$store.getters.getuserPersonalInfo
    }
  },
  methods: {
    editMyInfo () {
      const nickname = this.newNickname
      this.$store.dispatch('edit', nickname)
    }
  },
  created () {
    console.log(this.userInfo.mail)
  }
}
</script>

<style scope>
  .header {
    width: 100%;
  }
  .content{
    margin-left: 20%;
  }
  .find {
    text-align:center;
    margin-top: 10px;
  }
</style>
