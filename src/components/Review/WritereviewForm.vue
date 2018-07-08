<template>
  <v-layout row justify-center>
    <v-flex xs6 mt-4>
      <v-card>
      <v-card-title class="headline font-weight-regular white--text title"><span class="titleFont">농활 정보</span></v-card-title>
      <v-layout row justify-center pa-4>
      <v-flex>
        <v-card-media :src="nhDeatail.image[0]" height="151px" width="253px"></v-card-media>
      </v-flex>
      <v-flex>
      <v-card-text>
        <v-layout column>
        <v-subheader class="pa-0">Where do you live?</v-subheader>
        <v-subheader class="pa-0">Where do you live?</v-subheader>
        </v-layout>
      </v-card-text>
      </v-flex>
      </v-layout>
    </v-card>
      <v-card>
      <v-card-title class="headline font-weight-regular white--text title"><span class="titleFont">농활 후기</span></v-card-title>
      <v-card-text>
        <v-subheader class="pa-0">Where do you live?</v-subheader>
      </v-card-text>
    </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Writereview',
  computed: {
    ...mapGetters({
      nhDeatail: 'getNonghwalDetail'
    })
  }
}
</script>

<style>
 .title {
   /* background-color: #2BCAB0;
   opacity: 0.1; */
   background: #2BCAB0;
   background: rgba(43, 202, 176, 0.1)
 }
 .titleFont {
   color: #2BCAB0;
 }
</style>
