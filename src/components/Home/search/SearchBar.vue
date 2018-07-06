<template>
  <v-layout row justify-center style="height: 70px;">
    <!-- 인원 -->
    <v-flex xs12 sm11 md10 lg8 xl8 mt-4>
      <v-layout row>
        <span>
          <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" transition="slide-y-transition" bottom>
            <v-btn slot="activator" :color="this.pushPerson" depressed @click="clickPerson()">
              {{personValue}}
            </v-btn>
            <v-card>
              <v-list>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-btn fab depressed outline small color="primary" @click="personValueMinus()">
                      <v-icon dark>remove</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                  <v-list-tile-title>{{person}}</v-list-tile-title>
                  <v-list-tile-action>
                    <v-btn fab depressed outline small color="primary" @click="personValuePlus()">
                      <v-icon dark>add</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" small depressed @click="menu = false" style="min-width:55px; font-size: .7rem;">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
          <a tag="button" @click="clearPerson()" v-show="person" style="color:grey;">
            <i class="fas fa-times-circle"></i>
          </a>

        </span>
        <!-- 지역 -->
        <span>
          <v-menu v-model="menu2" :close-on-content-click="false" :nudge-width="200" transition="slide-y-transition" bottom>
            <v-btn slot="activator" :color="this.pushRegion" depressed>
              지역
            </v-btn>
            <v-card>
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
                <v-btn flat @click="menu2 = false">Cancel</v-btn>
                <v-btn color="primary" flat @click="menu2 = false">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </span>
        <!-- 날짜 -->
        <span sm3>
          <VueHotelDatepicker style="height:0; width: 10px;" :ref="dpkr16.datePickerId" :datePickerId="dpkr16.datePickerId" :autoClose="dpkr16.autoClose"
            :separator="separator" v-on:updateDateRange="updateDateRange" />
          <v-btn depressed :color="this.pushDate" @click="toggle(dpkr16.datePickerId)">
            {{dateValue}}
          </v-btn>
          <a tag="button" @click="clearDate(dpkr16.datePickerId)" v-show="dpkr16.value" style="color:grey;">
            <i class="fas fa-times-circle"></i>
          </a>
        </span>
        <v-spacer></v-spacer>
        <v-flex sm4>
          <v-text-field solo-inverted flat append-icon="search" color="black"></v-text-field>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>

</template>

<script>
import VueHotelDatepicker from 'vue-hotel-datepicker'
export default {
  data () {
    return {
      start: '',
      end: '',
      scontent: '',
      person: '',
      region: '',
      dpkr16: {
        value: '',
        datePickerId: 'datePickerId',
        autoClose: false
      },
      button: '날짜',
      backgroundColor: 'white',
      separator: ' ~ ',
      button2: '인원',
      fav: true,
      menu: false,
      message: false,
      hints: true,
      menu2: false
    }
  },
  computed: {
    dateValue: function () {
      if (this.dpkr16.value !== '') {
        return this.dpkr16.value
      } else {
        return this.button
      }
    },
    pushDate: function () {
      if (this.dpkr16.value !== '') {
        return 'primary'
      } else { return 'white' }
    },
    pushPerson: function () {
      if (this.person === '' || this.person === 0) { return 'white' } else { return 'primary' }
    },
    pushRegion: function () {
      if (this.region !== '') { return 'primary' } else { return 'white' }
    },
    personValue: function () {
      if (this.person === '') {
        return this.button2
      } else if (this.person === 0) {
        return this.button2
      } else {
        return this.person
      }
    }
  },
  methods: {
    searchGo () {
      const {start, end, person, scontent} = this
      this.$store.dispatch('search', {start, end, person, scontent})
    },
    toggle (datePickerId) {
      this.$refs[datePickerId].toggle()
    },
    getValue (datePickerId) {
      return this.$refs[datePickerId].getValue()
    },
    setValue (datePickerId, val) {
      this.$refs[this.datePickerId].setValue(val)
    },
    open (datePickerId, sinceDate, untilDate) {
      this.$refs[datePickerId].open()
      if (sinceDate && untilDate) {
        this.$refs[datePickerId].setRange(sinceDate, untilDate)
      }
    },
    close (datePickerId) {
      this.$refs[datePickerId].close()
    },
    getDatePicker (datePickerId) {
      const hdpkr = this.$refs[datePickerId].getDatePicker()
      return hdpkr // console.log(hdpkr)
    },
    setRange (datePickerId, d1, d2) {
      this.$refs[datePickerId].setRange(d1, d2)
    },
    hideDateInput (dpkr) {
      const hdpkrInput = document.querySelector(`#${dpkr.datePickerId}`)
      if (hdpkrInput && hdpkrInput.style) {
        hdpkrInput.style.display = 'none'
      }
    // },
    // updateDateRange: function (newDateRange, datePickerId) {
    //   Object.keys(this.$data).map(key => {
    //     if (typeof (this.$data[key]) === 'object') {
    //       if (this.$data[key].datePickerId === datePickerId) {
    //         this.$data[key].value = newDateRange
    //       }
    //     }
    //   })
    },
    clearDate: function (datePickerId) {
      this.dpkr16.value = ''
    },
    personValuePlus: function () {
      this.person += 1
    },
    personValueMinus: function () {
      if (this.person > 0) { this.person -= 1 }
    },
    clickPerson () {
      if (this.person === '') {
        this.person = 0
      }
    },
    clearPerson () {
      this.person = 0
    }
  },
  components: {
    VueHotelDatepicker
  },
  mounted () {
    const DP = document.querySelector(`#${this.dpkr16.datePickerId}`)
    if (DP) {
      DP.style.display = 'none'
    }
  }
}
</script>

<style scoped>
/* .application .theme--light.v-text-field--solo .v-input__slot,.theme--light .v-text-field--solo .v-input__slot
{background: white !important; border: 1px solid #bcbcbc !important;}
.primary--text{
  color: black !important;
} */
</style>
