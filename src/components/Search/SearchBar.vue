<template>
    <v-toolbar color="white" height="100px" flat>
  <v-layout row justify-center style="margin-top:50px;">
    <v-flex xs12 sm11 md10 lg9 xl8>
      <v-layout row py-3>
          <span>
          <v-text-field
            label="Search Keyword"
            v-model="keyword"
            key
          >
          </v-text-field>
        </span>
            <v-icon @click="search()">search</v-icon>
        <span>
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x
          >
            <v-btn
            slot="activator"
            color="primary"
            dark
          >
          filter
      </v-btn>
       <v-list-tile-title>인원</v-list-tile-title>
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
            <v-list-tile-title>지역</v-list-tile-title>
            <v-card flat>
            <v-btn outline :color="this.pushRegion" depressed>
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
            </v-card>
            </v-card>
            <v-list-tile-title>날짜</v-list-tile-title>
            <v-card flat>
              <v-flex xs12 sm6>
                <!-- <v-menu ref="menu" :close-on-content-click="true" v-model="menu" :nudge-right="40" lazy transition="scale-transition" offset-y full-width min-width="290px"> -->
                    <v-text-field slot="activator" v-model="startDate" label="Birthday date" prepend-icon="event" readonly></v-text-field>
                    <v-date-picker ref="picker" v-model="startDate" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                <!-- </v-menu> -->
            </v-flex>
            -
            <v-flex xs12 sm6>
                    <v-text-field slot="activator" v-model="endDate" label="Birthday date" prepend-icon="event" readonly></v-text-field>
                    <v-date-picker ref="picker" v-model="endDate" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
            </v-flex>
            </v-card>
      </v-menu>
        </span>
      </v-layout>
    </v-flex>
  </v-layout>
</v-toolbar>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      menu: false,
      separator: ' ~ ',
      keyword: null,
      startDate: null,
      endDate: null,
      person: null,
      region: '',
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
       ],
      regionSelected: [17]
    }
  },
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  computed: {
    pushRegion: function () {
      if (this.region !== '') { return 'primary' } else { return 'grey' }
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
    }

  },
  methods: {
    save (Date) {
      this.$refs.menu.save(Date)
    },
    search () {
      // const {keyword, startDate, endDate, person, regionSelected} = this
      // console.log(regionSelected)

      // this.$store.dispatch('getSearchResult', {regionSelected})
      // this.$store.dispatch('getSearchResult', {keyword, startDate, endDate, person, regionSelected})
    },
    personValuePlus: function () {
      this.person += 1
    },
    personValueMinus: function () {
      if (this.person > 0) { this.person -= 1 }
    },
    regionre (re) {
      this.region = re
    }
  }
}
</script>

<style>

</style>
