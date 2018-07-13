<template>
<v-toolbar color="white" height="50px">
  <v-layout row justify-center style="margin-top:-5px;">
    <!-- 인원 -->
    <v-flex xs12 sm11 md10 lg9 xl8>
      <v-layout row py-3>
          <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
<v-btn
        slot="activator"
        color="indigo"
        dark
      >
       filter
      </v-btn>

      <v-card>
        <v-divider></v-divider>

        <v-list>
          <!-- <v-list-tile>
            <v-list-tile-title>날짜</v-list-tile-title>
            <v-list-tile-action>
              <v-menu ref="menu" :close-on-content-click="false" v-model="menu" :nudge-right="40" lazy transition="scale-transition" offset-y full-width min-width="290px">
                                        <v-text-field slot="activator" v-model="birth" label="Birthday date" prepend-icon="event" readonly></v-text-field>
                                        <v-date-picker ref="picker" v-model="birth" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                                    </v-menu>
            </v-list-tile-action>
          </v-list-tile> -->
          <v-list-tile>
            <v-list-tile-title>지역</v-list-tile-title>
            <v-list-tile-action>
              <v-select
          :items="regions"
            item-text="name"
          item-value="value"
          v-model="regionSelected"
          label="Select"
          multiple
          chips
          hint="What are the target regions"
          persistent-hint
        ></v-select>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-title>인원</v-list-tile-title>
            <v-list-tile-action>
              <v-btn slot="activator" outline :color="this.pushPerson" depressed @click="clickPerson()">
              {{personValue}}
            </v-btn>
            <v-card flat>
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
            </v-card>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn flat @click="menu = false">Cancel</v-btn>
          <v-btn color="primary" flat @click="menu = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
      </v-layout>
    </v-flex>
  </v-layout>
</v-toolbar>
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
      dpkr16: {
        value: '',
        datePickerId: 'datePickerId',
        autoClose: false
      },
      button: '날짜',
      backgroundColor: 'white',
      separator: ' ~ ',
      button2: '인원',
      menu: false,
      menu2: false,
      button3: '지역',
      region: '',
      regionSelected: [],
      regions:
       [{name: '서울특별시', value: 0},
         {name: '부산광역시', value: 1},
         {name: '대구광역시', value: 2},
         {name: '인천광역시', value: 3},
         {name: '광주광역시', value: 4},
         {name: '대전광역시', value: 5},
         {name: '울산광역시', value: 6},
         {name: '경기도', value: 7},
         {name: '강원도', value: 8},
         {name: '충청남도', value: 9},
         {name: '충청북도', value: 10},
         {name: '경상남도', value: 11},
         {name: '경상북도', value: 12},
         {name: '전라남도', value: 13},
         {name: '전라북도', value: 14},
         {name: '제주도', value: 15}
       ]
    }
  },
  computed: {
    dateValue: function () {
      if (this.dpkr16.value !== '') {
        this.parsingDate()
        this.$emit('getCondition', this.sendCondition())
        return this.dpkr16.value
      } else {
        // this.$emit('getCondition', this.sendCondition())
        return this.button
      }
    },
    pushDate: function () {
      if (this.dpkr16.value !== '') {
        return 'primary'
      } else { return 'grey' }
    },
    pushPerson: function () {
      if (this.person === '' || this.person === 0) { return 'grey' } else { return 'primary' }
    },
    pushRegion: function () {
      if (this.region !== '') { return 'primary' } else { return 'grey' }
    },
    personValue: function () {
      if (this.person === '') {
        return this.button2
      } else if (this.person === 0) {
        return this.button2
      } else {
        return this.person
      }
    },
    regionValue: function () {
      let re = ''
      if (this.regionSelected.length === 0) {
        this.regionre(re)
        return this.button3
      } else {
        console.log(this.regionSelected)
        for (let i = 0; i < this.regionSelected.length; i++) {
          re = re.concat(this.regionSelected[i] + ',')
        }
        this.regionre(re)
        return re
      }
    },
    transfer () {
      let regionTransfer = []
      if (this.regionSelected.length > 0) {
        for (let j = 0; j < this.regionSelected.length; j++) {
          for (let i = 0; i < this.regions.length; i++) {
            if (this.regionSelected[j] === this.regions[i].name) {
              regionTransfer.push(this.regions[i].value)
            }
          }
        }
        console.log(regionTransfer)
        return regionTransfer
      } else { return regionTransfer }
    }
  },
  methods: {
    personClose: function () {
      this.menu = false
      this.$emit('getCondition', this.sendCondition())
    },
    sendCondition: function () {
      return {start: this.start, end: this.end, person: this.person, region: this.transfer}
    },
    regionsClose: function () {
      this.menu2 = false
      // 에밋
      this.$emit('getCondition', this.sendCondition())
    },
    parsingDate () {
      if (this.dpkr16.value !== '') {
        let parseDate = this.dpkr16.value.split('~')
        this.start = parseDate[0]
        this.end = parseDate[1]
        console.log(this.start, this.end)
      }
    },
    regionre (re) {
      this.region = re
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
      // console.log('안닫히나?')

      // 에밋
      // this.$emit('getCondition', this.sendCondition())
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
    },
    updateDateRange: function (newDateRange, datePickerId) {
      Object.keys(this.$data).map(key => {
        if (typeof (this.$data[key]) === 'object') {
          if (this.$data[key].datePickerId === datePickerId) {
            this.$data[key].value = newDateRange
          }
        }
      })
    },
    clearDate: function (datePickerId) {
      this.dpkr16.value = ''
      this.start = ''
      this.end = ''
      this.$emit('getCondition', this.sendCondition())
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
    },
    clearRegion () {
      this.region = ''
      this.regionSelected = []
      this.regionTransfer = []
    },
    allCrear () {
      this.region = ''
      this.regionSelected = []
      this.regionTransfer = []
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
  },
  updated () {
    // $EventBus.$emit('this-is-condition', {start: this.dpkr16.value})
    // this.parsingDate()
  }
}
</script>

<style scoped>
/* .application .theme--light.v-text-field--solo .v-input__slot,.theme--light .v-text-field--solo .v-input__slot
{background: white !important; border: 1px solid #bcbcbc !important;}
.primary--text{
  color: black !important;
} */
.v-input{
  margin-top: 0;
}
.v-input--selection-controls{
  padding: 0 0;
}
</style>
