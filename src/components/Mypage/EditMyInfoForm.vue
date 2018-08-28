<template>
   <div class="header">
     <v-spacer></v-spacer>
      <v-flex xs3 offset-xs4 style="margin-top:40px">
         <v-layout xs5>
           <p width="110px">
           프로필사진
           </p>
            <v-spacer></v-spacer>
           <v-layout row>
             <v-avatar v-if="beforeChangeImg" style="margin-left:20% padding-left:20px"
                  size="104px">
                <img :src="getPersonalUserInfo.img" alt="avatar">
              </v-avatar>
              <v-avatar v-if="!beforeChangeImg" style="margin-left:20% padding-left:20px"
                  size="104px">
                <img :src="img" alt="avatar">
              </v-avatar>
              <div class="img-upload-cont">
                <div class="dropboxq">
                <input
                    type="file"
                    class="input-imageq"
                    :multiple="false"
                    @change="onFileChange"
                    accept="image/*">
                </div>
            </div>
           </v-layout>

          </v-layout>
      </v-flex>
      <v-flex xs3 offset-xs4>
          닉네임
         <v-text-field class="mt-2"
            v-model="newNickname"
            placeholder="바꿀 닉네임을 입력하세요"
            solo
          ></v-text-field>
      </v-flex>
      <v-flex xs3 offset-xs4 :readonly="true">
          이름
          <v-text-field class="mt-2"
            v-model="getPersonalUserInfo.name"
            disabled
          ></v-text-field>
        </v-flex>
      <v-flex xs3 offset-xs4 :readonly="true">
          이메일
          <v-text-field class="mt-2"
            v-model="getPersonalUserInfo.mail"
            disabled
          ></v-text-field>
        </v-flex>
      <v-flex xs3 offset-xs4 :readonly="true">
          핸드폰번호
          <v-text-field class="mt-2"
            v-model="getPersonalUserInfo.hp"
            disabled
          ></v-text-field>
        </v-flex>
      <v-flex xs5 offset-xs4>
        <v-btn @click="goMain">취소</v-btn>
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
      newImage: null,
      beforeChangeImg: true,
      file: null
    }
  },
  computed: {
    getPersonalUserInfo () {
      return !this.$store.getters.getuserPersonalInfo ? false : this.$store.getters.getuserPersonalInfo
    }
  },
  methods: {
    editMyInfo () {
      if (confirm('프로필을 수정하시겠습니까?')) {
        const nickname = this.newNickname
        if (!this.beforeChangeImg && this.newNickname !== '') {
          this.$store.dispatch('editMyNickname', {nickname})
          this.makeFormData()
          this.$router.push('/')
        } else if (this.beforeChangeImg && this.newNickname !== '') {
          this.$store.dispatch('editMyNickname', {nickname})
          this.$router.push('/')
        } else if (!this.beforeChangeImg && this.newNickname === '') {
          this.makeFormData()
          this.$router.push('/')
        } else {
          alert('바꿀 항목을 입력해주세요')
        }
      }
    },
    goMain () {
      if (confirm('회원 정보 수정을 취소하시겠습니까?')) {
        this.$router.push('/')
      }
    },
    makeFormData () {
      const data = new FormData()
      data.append('image', this.file)
      this.$store.dispatch('editMyPhoto', data)
    },
    onFileChange (event) {
      if (event.target.files[0]['type'].split('/')[0] === 'image') {
        this.file = event.target.files[0]
        this.getImage(this.file)
      }
    },
    getImage (file) {
      const fileReader = new FileReader()
      fileReader.onload = () => {
        this.img = fileReader.result
        this.beforeChangeImg = false
      }
      fileReader.readAsDataURL(file)
    }
  }
}
</script>

<style scope>
  .dropboxq{
    margin-top: 70px;
    background: url('../../../static/big_camera.png') no-repeat ;
}
.dropbox p{
    text-align: center;
    line-height: 20vh;
}
.input-imageq{

    opacity: 0;
    width: 70px;
    height: 36px;
}
.my_image{
     width: 70%;
    height: 200px;
  }
</style>
