<template>
  <div>
    <v-card flat height="30vh">
          <slot name="header">
          <v-card-media src="http://www.ijejutoday.com/news/photo/201707/203893_161637_1345.jpg" height="50%">
          <v-spacer></v-spacer>
          <span class="card_tip">

            {{item.period}}
            </span>
          </v-card-media>
          <slot name="header">
          </slot>
          <v-card-title primary-title class="pb-0">
            <div style="width:100%">
            <div class="card_title">{{item.name}}</div>
            <div style="overflow:hidden">
            <span class="card_detail" style="float:left">{{item.addr}}</span>
            <span class="card_detail" style="float:right">{{item.price}}원</span>
            </div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn icon v-if="!isAuthenticated">
              <v-icon>favorite_border</v-icon>
            </v-btn>
            <v-btn flat>상세보기</v-btn>
          </v-card-actions>
        </v-card>

        </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      item: 'allPopularList'
    })
  }
}
</script>

<style>

</style>
