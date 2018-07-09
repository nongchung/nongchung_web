<template>
   <div class="header">
     <v-spacer></v-spacer>
     <v-flex xs12>
        <v-card height="180px">
          <v-card-text xs12>
            <h2 class="content" style="margin-top:10px">
              후기작성
                <v-avatar style="margin-left:50%"
                  size="103px"
                  color="grey lighten-4">
                <img :src="userInfo.img" alt="avatar">
              </v-avatar>
            </h2>
            <p class="content">여러분의 솔직한 후기를 들려주세요</p>
            </v-card-text>
        </v-card>
      </v-flex>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WriteHeader',
  computed: {
    ...mapGetters({
      userInfo: 'getUserInfo'
    })
  }
}
</script>

<style>

</style>
