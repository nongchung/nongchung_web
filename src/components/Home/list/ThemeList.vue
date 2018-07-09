<template>
<v-layout row justify-center>
  <v-flex xs12 sm11 md10 lg8 xl8>
    <v-container fluid column>
      <!-- 테마버튼 -->
  <v-layout>
    <v-btn v-for="(item, index) in themeButton" :key="index" flat outline color="primary">{{item}}</v-btn>
  </v-layout>
      <!-- 테마내용 -->
  <v-layout>
    <v-flex>
    <v-card
        :color="colors[color]"
        class="custom-ripple"
        ripple
        height="500"
        @click.native="color = (color + 1) % colors.length"
      >
        <div class="title white--text pl-3 pt-3">{{ colors[color] }}</div>
      </v-card>
      <v-carousel hide-delimiters>
    <v-carousel-item src="../../../../static/ad_ex.png" reverse-transition="fade"
        transition="fade" class="home_ads">
      <div class="ads_text">
      <div class="black--text ads_theme">농활 테마기획전</div>
      <div class="black--text ads_title">dkssu</div>
      <div class="black--text ads_title">"머야"</div>
      </div>
    </v-carousel-item>
  </v-carousel>
      </v-flex>
  </v-layout>
  </v-container>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  data () {
    return {
      themeButton: ['힐링 농활', '맛있는 농활', '과일 농활', '그린 투어리즘', '오직 8월에만'],
      color: 0,
      colors: [
        'red',
        'pink',
        'purple',
        'deep-purple',
        'indigo',
        'blue',
        'light-blue',
        'cyan',
        'teal',
        'green',
        'light-green',
        'lime',
        'yellow',
        'amber',
        'orange',
        'deep-orange',
        'brown',
        'blue-grey',
        'grey'
      ]
    }
  }

}
</script>

<style scoped>
</style>
