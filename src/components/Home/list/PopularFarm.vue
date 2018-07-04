<template>
<v-layout class="popularfarm_layout" row justify-center>
  <v-flex xs12 sm11 md10 lg8 xl8>
  <div class="subheading">인기 농장</div>
    <v-container fluid grid-list-xl>
    <v-layout row wrap class="popularfarm_layout_content">
      <v-flex v-for="item in popularFarm" :key="item.name" xs6 sm4 md4 lg4 xl3 class="card_gutter">
        <v-card flat ripple>
          <v-card-media src="http://media.graytvinc.com/images/810*569/Potato+Farm1.jpg" height="150px">
        <v-card-title>
          <h3 style="color:white;">{{item.name}}</h3>
              <span>{{item.address}} </span>
        </v-card-title>
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </v-flex>
  <!-- 슬라이더 추가 -->
  <!-- <agile>
            <div class="slide slide__1"><h3>slide 1</h3></div>
    <div class="slide slide--2"><h3>slide 2</h3></div>
    <div class="slide slide--3"><h3>slide 3</h3></div>
    <div class="slide slide--4"><h3>slide 4</h3></div>
    <div class="slide slide--5"><h3>slide 5</h3></div>
    <div class="slide slide--6"><h3>slide 6</h3></div>
        </agile> -->
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      popularFarm: 'getPopularFarm',
      isAuthenticated: 'isAuthenticated'
    })
  },
  methods: {}
}
</script>

<style scoped>
.popularfarm_layout{
  padding: 15px 0;
}
.container{
  padding: 0;
}
.popularfarm_layout_content{
  padding-top: 10px;
}
.card_gutter{
  padding: 1vw !important;
}
</style>
