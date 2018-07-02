<template>
  <v-container fluid grid-list-xl>
    <v-layout row justify-space-between>
      <span class="subheading">새로운농활목록</span>
      <v-spacer></v-spacer>
      <span class="subheading">모두보기> </span>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-for="item in newList" :key="item.nhIndex" lg3 md3 sm4 xs4>
        <v-card id="popular_list_item" height="32vh">
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
          <v-card-title primary-title class="pb-0">
            <div>
              <h3 class="title mb-0">{{item.name}}</h3>
              <span class="body-1">{{item.price}}원, </span>
              <span class="body-1">{{item.period}}</span>
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
      newList: 'getNewList',
      isAuthenticated: 'isAuthenticated'
    })
  },
  methods: {}
}
</script>

<style scoped>
</style>
