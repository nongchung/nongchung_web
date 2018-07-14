<template>
  <v-footer class="footer" height="7rem">
    <v-layout column pl-5 ml-5>
      <v-flex style="display:flex;">
        <v-flex style="flex: 0 0 auto;"><img src="../../static/footer.png" height="16px"></v-flex>
        <!-- <v-flex style="height:16px;"></v-flex> -->
    <v-flex ml-3 style="flex: 0 0 auto;">농촌에서 활짝 피는 청춘, 농활청춘</v-flex></v-flex>
    <v-flex style="margin-left:5.8rem;">&copy;Chungchoon Corp</v-flex>
    </v-layout>
    <v-layout row justify-end mr-5 pr-5 class="hidden-xs-only">
        <v-btn flat large fab><v-icon>android</v-icon></v-btn>
        <v-btn flat large fab><v-icon>fab fa-apple</v-icon></v-btn>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      icons: [
        'fab fa-facebook',
        'fab fa-instagram'
      ]
    }
  }
}
</script>

<style scoped>
.footer{
  background: #E2E2E2;
}

</style>
