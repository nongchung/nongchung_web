<template>
       <v-layout row justify-center>
            <v-layout column>
              <v-layout row justify-center style="background:white;">
              <v-flex xs12 sm11 md10 lg9 xl8 mt-4 style="display:flex;justify-content:space-between;padding:0 4vw;">
           <v-flex style="flex: 0 0 auto;">
            <v-card-text style="padding:0;">
            <p style="margin-top:20px; font-size:30px;p"><strong>{{farmInfo.farmerInfo.farmName}}</strong></p>
            <p style="font-size:20px;">
             <span><v-icon color="gray">location_on</v-icon></span>
             <span style="color:#666666">{{farmInfo.farmerInfo.farmAddr}}</span>
            </p>
             <p style="color:#666666">{{farmInfo.farmerInfo.farmerComment}}</p>
              <!-- <v-btn outline class="content" @click="editMyInfo">프로필 편집</v-btn> -->
              </v-card-text>
              </v-flex>

          <v-flex style="flex: 0 0 auto;" class="mr-4">
              <v-avatar
                  size="7rem">
                <img :src="farmInfo.nhInfo[0].farmImg" alt="avatar" style="margin-top:60px">
              </v-avatar>
          </v-flex>
          </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row justify-center style="background:white;" class="elevation-1" >
            <v-flex xs12 sm11 md10 lg9 xl8 mt-2 style="display:flex;
            justify-content:start;padding:0 4vw;align-items:center;" pb-2>
            <v-flex style="flex:0 0 auto;"><v-avatar
                  size="3rem">
                <img :src="farmInfo.farmerInfo.farmerImg" alt="avatar" >
              </v-avatar></v-flex>
            <v-flex ml-3 style="flex:0 0 auto;;font-size:1rem"><strong>{{farmInfo.farmerInfo.farmerName}}</strong>농부</v-flex>
           <v-flex ml-3 style="flex:0 0 auto;"><v-btn small flat outline color="primary">연락하기</v-btn></v-flex>
          </v-flex>
          </v-layout>
          </v-layout>
           </v-layout>
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
