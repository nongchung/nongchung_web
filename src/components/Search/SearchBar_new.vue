<template>
<v-layout row justify-center>
  <v-flex xs12 sm11 md10 lg9 xl8>
    <v-layout row py-3>
  <v-flex xs4 id="search_box">
      <v-flex style="flex:none;flex-grow:10;">
        <input type="text" style="height:100%;" placeholder="농활 검색하기"></v-flex>
      <v-flex style="flex:none;flex-grow:1;" text-xs-right>
        <v-icon style="height:100%;">search</v-icon></v-flex>
  </v-flex>
  <v-flex xs1 id="filter_btn">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
      style="height:100%;"
    >
      <v-btn
        slot="activator"
        color="primary"
        class="ml-3"
        style="margin:0;height:95%;"
      >
        Filter
        <v-icon class="pl-2">tune</v-icon>
      </v-btn>

      <v-card>
        <v-list>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>날짜</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <input type="date">
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="message" color="purple"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>Enable messages</v-list-tile-title>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="hints" color="purple"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>Enable hints</v-list-tile-title>
          </v-list-tile>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn flat @click="menu = false">Cancel</v-btn>
          <v-btn color="primary" flat @click="menu = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-flex>
  </v-layout>
  </v-flex>
</v-layout>

</template>

<script>
export default {
  data () {
    return {
      scontent: ''
    }
  }
}
</script>

<style scoped>
#search_box{
border: .2px solid #e4e4e4;
  padding: 10px 15px;
  background-color: white;
  display:flex;
}
#search_box input:focus{
  outline:none;
}
</style>
