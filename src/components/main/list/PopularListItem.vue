<template>
    <v-card>
        <v-card-media
          src="{{item.img}}"
          height="200px"
        ></v-card-media>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{item.title}}</h3>
            <div>{{item.detail}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
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
