<template>
  <v-layout row wrap>
    <v-flex xs5 offset-xs3>
      <v-card>
      <v-card-title class="headline font-weight-regular white--text title"><span class="titleFont">농활 정보</span></v-card-title>
      <v-flex>
        <v-avatar
          :tile="tile"
          :size="avatarSize"
          color="grey lighten-4"
        >
          <img src="/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
      </v-flex>
      <v-flex>
      <v-card-text>
        <v-subheader class="pa-0">Where do you live?</v-subheader>
      </v-card-text>
      </v-flex>
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
export default {
  name: 'Writereview',
  computed: {
    getPath: function () {
      return this.$route.params.idx
    }
  },
  created () {
    this.$store.dispatch('nonghwalDetail')
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
