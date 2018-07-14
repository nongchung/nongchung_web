<template>
<v-toolbar color="white" height="70px" flat>
  <v-layout row justify-center>
    <!-- 인원 -->
    <v-flex xs12 sm11 md10 lg9 xl8>
      <v-layout row py-3>
          <span>
          <v-text-field
            style="margin-top:8px"
            label="Search Keyword"
            v-model="keyword"
             v-on:keyup.13="search()"
            key
          >
          </v-text-field>
        </span>
            <!-- <v-icon @click="search()">search</v-icon> -->
        <span>
          <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" transition="slide-y-transition" bottom>
            <v-btn slot="activator" outline :color="this.pushPerson" depressed @click="clickPerson()">
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
                <v-btn color="primary" small depressed @click="personClose()" style="min-width:55px; font-size: .7rem;">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
          <a tag="button" @click="clearPerson()" v-show="person" style="color:grey; margin-left:-3px;">
            <i class="fas fa-times-circle"></i>
          </a>
        </span>

        <!-- 지역 -->
        <span>
          <v-menu v-model="menu2" :close-on-content-click="false" :nudge-width="200" transition="slide-y-transition" bottom>
            <v-btn slot="activator" outline :color="this.pushRegion" depressed>
              {{regionValue}}
            </v-btn>
            <v-card>
              <v-layout row pt-3 justify-center>
              <v-layout column pl-3 style="border-right:1px solid black;">
                <v-checkbox height="1.2rem" style="flex: none !important;" v-model="regionSelected" v-for="(i,a) in regions.slice(0,8)" :key="a" :label="i.name" :value="i.name"></v-checkbox>
              </v-layout>
              <v-layout column px-3>
                <v-checkbox height="1.2rem" v-model="regionSelected" v-for="(k,b) in regions.slice(8,16)" :key="b" :label="k.name" :value="k.name"></v-checkbox>
              </v-layout>
              </v-layout>
              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn color="primary" small depressed @click="regionsClose()" style="min-width:55px; font-size: .7rem;">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
          <a tag="button" @click="clearRegion()" v-show="region" style="color:grey; margin-left:-3px;">
            <i class="fas fa-times-circle"></i>
          </a>
        </span>
        <!-- <button @click="transfer()">변환하기</button> -->
        <!-- 날짜 -->
        <span sm3>
          <VueHotelDatepicker style="height:0; width: 10px;" :ref="dpkr16.datePickerId" :datePickerId="dpkr16.datePickerId" :autoClose="dpkr16.autoClose"
            :separator="separator" v-on:updateDateRange="updateDateRange" />
          <v-btn depressed outline :color="this.pushDate" @click="toggle(dpkr16.datePickerId)">
            {{dateValue}}
          </v-btn>
          <a tag="button" @click="clearDate(dpkr16.datePickerId)" v-show="dpkr16.value" style="color:grey; margin-left:-3px;">
            <i class="fas fa-times-circle"></i>
          </a>
        </span>
            <v-icon @click="search()">search</v-icon>
        <!-- <span style="padding:1rem 1rem;">적용</span> -->
        <v-spacer></v-spacer>
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
      isChange: [0, 0, 0],
      keyword: '',
      start: '1950-01-01',
      end: '2500-01-01',
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
    search () {
      console.log(this.sendCondition())
      this.$store.dispatch('getSearchResult', this.sendCondition())
    },
    personClose: function () {
      this.menu = false
    //   this.$emit('getCondition', this.sendCondition())
    },
    sendCondition: function () {
      console.log(this.transfer)
      if (this.transfer === []) {
        return {start: this.start, end: this.end, person: this.person, region: [17]}
      } else {
        return {scontent: this.keyword, start: this.start, end: this.end, person: this.person, region: this.transfer}
      }
    },
    regionsClose: function () {
      this.menu2 = false
      // 에밋
    //   this.$emit('getCondition', this.sendCondition())
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
