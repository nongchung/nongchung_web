<template>
  <v-container fluid grid-list-xl>
    <div>인기농활목록</div>
    <v-layout row wrap>
      <v-flex v-for="item in popularList" :key="item.title" lg3 md3 sm4 xs4>
        <v-card id="popular_list_item" height="35vh">
          <v-card-media :src="item.img" height="150px">
            <!-- <v-container fill-height fluid pa-2>
          <v-layout fill-height>
            <v-flex lg4 align-end flexbox>
        <v-card-actions>
        <v-btn icon><v-icon>favorite_border</v-icon></v-btn>
        </v-card-actions>
        </v-flex>
        </v-layout>
        </v-container> -->
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{item.title}}</h3>
              <div>{{item.detail}}</div>
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
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      popularList: 'getPopularList',
      isAuthenticated: 'isAuthenticated'
    })
  },
  methods: {},
  created () {
    console.log('hello')
    console.log(this.popularList)
  }
}
</script>

<style scoped>
#popular_list_item{
  overflow-y: auto;
  max-height: 30vh;
}
</style>
