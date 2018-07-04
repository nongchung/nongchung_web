<template>
<v-layout class="popularfarm_layout" row justify-center>
  <v-flex xs12 sm11 md10 lg8 xl8>
  <div class="subheading">인기 농장</div>
    <v-container fluid grid-list-xl>
    <v-layout row wrap class="popularfarm_layout_content">
      <v-flex v-for="item in popularFarm" :key="item.name" xs6 sm4 md4 lg4 xl3>
        <v-card>
          <!-- <v-card-media :src="item.img" height="150px">
            <v-container fill-height fluid pa-2>
          <v-layout fill-height>
            <v-flex lg4 align-end flexbox>
        <v-card-actions>
        <v-btn icon><v-icon>favorite_border</v-icon></v-btn>
        </v-card-actions>
        </v-flex>
        </v-layout>
        </v-container>
          </v-card-media> -->
          <v-card-title primary-title class="pb-0">
            <div>
              <h3 class="mb-0">{{item.name}}</h3>
              <span>{{item.address}} </span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn icon v-if="!isAuthenticated">
              <v-icon>favorite_border</v-icon>
            </v-btn>
            <v-btn flat color="orange">상세보기</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </v-flex>
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
</style>
