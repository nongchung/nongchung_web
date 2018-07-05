<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <v-layout ma-4 px-5>
        <strong class="subheading ma-2 px-5">농촌에서 활짝피는 청춘, 농활청춘<br>&copy;2018 — <strong>nonghwal</strong></strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-2"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
</v-layout>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      icons: [
        'fab fa-facebook',
        'fab fa-instagram'
      ]
    }
  }
}
</script>

<style>

</style>
