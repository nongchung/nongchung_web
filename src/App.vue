<template>
  <v-app>
    <navigation-bar></navigation-bar>
    <v-content class="hidden-xs-only">
      <router-view/>
    </v-content>
    <v-layout column class="hidden-sm-and-up" id="mobile" style="background-color:white;" align-center>
      <v-flex mt-5 pt-4 class="bold-txt no-flex">지금 바로 다운로드 받으세요</v-flex>
      <v-flex mt-1 class="regular-txt no-flex">농활청춘 앱에서 따뜻한 이야기를 만나 볼 수 있습니다</v-flex>
      <v-flex mt-5 class="no-flex" id="ios-down"><a href="https://itunes.apple.com/kr/app/%EB%86%8D%ED%99%9C%EC%B2%AD%EC%B6%98/id1414459324?mt=8" target="blank"><img src="../static/mobile_ios_down.png" style="width: 100%;"></a></v-flex>
      <v-flex mt-4 class="no-flex" id="android-down"><a href="https://play.google.com/store/apps/details?id=com.youth.farm_volunteering" target="blank"><img src="../static/mobile_android_down.png" style="width: 100%;"></a></v-flex>
    </v-layout>
    <footer-bar class="hidden-xs-only"></footer-bar>
  </v-app>
</template>

<script>
import NavigationBar from './components/NavigationBar';
import FooterBar from './components/Footer';
export default {
  name: 'App',
  components: {
    NavigationBar,
    FooterBar
  },
  data () {
    return {}
  }
}
</script>

<style>
#mobile {
  width: 100%;
  height: 400px;
  background-image: url(../static/mobile_bg2.png);
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
}

#mobile .no-flex {
  flex: 0 0 auto;
}

#mobile .bold-txt {
  font-weight: 900;
  font-size: 2.2rem;
}

#mobile .regular-txt {
  font-weight: 500;
  font-size: 1.1rem;
  color: #707070;
}

#ios-down,
#android-down {
  width: 42%;
}
</style>
