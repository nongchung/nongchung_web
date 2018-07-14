<template>
   <div class="header">
     <v-spacer></v-spacer>
     <v-flex xs12>
        <v-card>
       <v-layout row>
          <v-layout>
          <v-card-text style="margin-left:10%">
            <p class="content" style="margin-top:20px; font-size:30px"><strong>{{farmInfo.farmerInfo.farmName}}</strong></p>
            <p class="content" style="font-size:20px">
             <span style="color:#666666">{{farmInfo.farmerInfo.farmAddr}}</span>
            </p>
             <span style="color:#666666">언제나 여러분들을 환영합니다. 저희 농장은 감귤이 주렁주렁 아주 그냥 주렁주렁 달려있답니다. 만나서 반갑습니다. 반가워요. 반갑습니다. 반가워요!</span>
              <!-- <v-btn outline class="content" @click="editMyInfo">프로필 편집</v-btn> -->
              </v-card-text>
          </v-layout>
          <v-layout xs2 style="margin-left:20%">
              <v-avatar style="margin-left:20%"
                  size="104px">
                <img :src="farmInfo.nhInfo[0].farmImg" alt="avatar" style="margin-top:135px">
              </v-avatar>
          </v-layout>
       </v-layout>
           <v-divider :key="index"></v-divider>
           <v-layout xs2 style="margin-left:10% margin-top:20px">
              <v-avatar
                  size="60px">
                <img style="margin-top:20px;" :src="farmInfo.farmerInfo.farmerImg" alt="avatar" >
              </v-avatar>
            <p class="content" style="margin-top:20px; margin-left:10px; font-size:30px"><strong>{{farmInfo.farmerInfo.farmerName}}</strong>농부</p>
            <v-btn style="margin-top:20px" flat outline color="primary">연락하기</v-btn>
          </v-layout>
        </v-card>
      </v-flex>
   </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'FarmHeader',
  computed: {
    ...mapGetters({
      farmInfo: 'getFarmInfo'
    })
  }
}
</script>

<style>

</style>
