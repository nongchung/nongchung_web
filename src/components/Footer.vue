<template>
  <v-footer class="footer" height="7rem">
    <v-layout column pl-5 ml-5>
    <div>농촌에서 활짝 피는 청춘, 농활청춘</div>
    <div>&copy;Chungchoon Corp</div>
    </v-layout>
    <v-layout row justify-end mr-5 pr-5>
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
  background: #0ABD9D;
}

</style>
