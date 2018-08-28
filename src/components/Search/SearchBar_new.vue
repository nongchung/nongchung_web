<template>
<v-layout row justify-center>
  <v-flex xs12 sm11 md10 lg8 xl8 pl-4>
    <v-layout row py-3>
      <v-flex xs1 hidden-sm-and-up></v-flex>
  <v-flex xs5 sm4 id="search_box">
      <v-flex style="flex:none;flex-grow:10;">
        <input type="text" v-model="scontent" style="height:100%;width:100%;" placeholder="농활 검색하기" @keyup.enter="goFilter"></v-flex>
      <v-flex style="flex:none;flex-grow:1;cursor:pointer;" text-xs-right @click="goFilter">
        <v-icon style="height:100%;">search</v-icon></v-flex>
  </v-flex>
  <v-flex xs1 id="filter_btn">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="250"
      offset-y
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
        <v-list class="px-3 py-2">
          <v-list-tile class="py-2">
            <v-list-tile-content style="flex: 0 0 auto;" class="pr-4">
              <v-list-tile-title>날짜</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-layout>
                <v-flex>
                  <!-- <div id="start_date" @click="clickStartDate">
                    <span>{{showStartDate}}</span>
                    <span><v-icon size="1.3rem">calendar_today</v-icon></span>
                  </div> -->
                  <v-menu ref="menu2" :close-on-content-click="false" v-model="menu2" :nudge-right="40" :return-value.sync="start_date" lazy transition="scale-transition" offset-y full-width min-width="290px">
                    <!-- <v-text-field slot="activator" v-model="start_date" readonly height="0" style="font-size:0px;"></v-text-field> -->
                    <div id="start_date" @click="clickStartDate" slot="activator">
                    <span>{{showStartDate}}</span>
                    <span style="margin-left: -50px; color: #ccc;" v-show="!showStartDate">날짜선택</span>
                    <span><v-icon size="1.3rem">calendar_today</v-icon></span>
                  </div>
                    <v-date-picker v-model="start_date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="touchFilter">Today</v-btn>
                    <v-btn flat color="primary" @click="startDateSave">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-flex>
                <span style="padding: 10px 15px;">-</span>
                <v-flex>
                  <!-- <div id="end_date" @click="clickEndDate">
                    <span>{{showEndDate}}</span>
                    <span><v-icon size="1.3rem">calendar_today</v-icon></span>
                  </div> -->
                  <v-menu ref="menu3" :close-on-content-click="false" v-model="menu3" :nudge-right="40" :return-value.sync="end_date" lazy transition="scale-transition" offset-y full-width min-width="290px">
                    <!-- <v-text-field slot="activator" v-model="end_date" readonly height="0" style="font-size:0px;"></v-text-field> -->
                    <div id="end_date" @click="clickEndDate" slot="activator">
                    <span>{{showEndDate}}</span>
                    <span style="margin-left: -50px; color: #ccc;" v-show="!showEndDate">날짜선택</span>
                    <span><v-icon size="1.3rem">calendar_today</v-icon></span>
                  </div>
                    <v-date-picker v-model="end_date" no-title scrollable :min="start_date">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="$refs.menu3.save(end_date)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-flex>
              </v-layout>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile class="py-2">
            <v-list-tile-content style="flex: 0 0 auto;" class="pr-4">
              <v-list-tile-title>인원</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-layout>
                <table style="width: 13rem;border-collapse: collapse;">
                  <tr>
                    <td class="person" style="cursor:pointer;" @click="substractPerson"><v-icon size="1.3rem">remove</v-icon></td>
                    <td class="person" style="width:70%;text-align:center;">{{showPerson}}</td>
                    <td class="person" style="cursor:pointer;" @click="addPerson"><v-icon size="1.3rem">add</v-icon></td>
                  </tr>
                </table>
                <input type="text" id="person_real" v-model="person">
              </v-layout>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile class="py-2">
            <v-list-tile-content style="flex: 0 0 auto;" class="pr-4">
              <v-list-tile-title>지역</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-menu offset-y max-height="200">
                <div slot="activator" id="region">
                  <span>{{region_name}}</span><v-icon>arrow_drop_down</v-icon>
                </div>
                <v-list dense>
                <v-list-tile v-for="(item, index) in regions" :key="index" @click="selectRegion(item)" style="border-bottom: .2px solid #e4e4e4;">
                  <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                </v-list-tile>
                </v-list>
                </v-menu>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn flat @click="menu = false">취소</v-btn>
          <v-btn color="primary" flat @click="goFilter">적용</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-flex>
  </v-layout>
  </v-flex>
</v-layout>

</template>

<script>
import { mapGetters } from 'vuex'
import { eventBus } from '../../main.js'
export default {
  data () {
    return {
      menu: false,
      menu2: false,
      menu3: false,
      scontent: '',
      regions:
       [{name: '전국', value: 17},
         {name: '서울특별시', value: 0},
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
         {name: '제주특별자치도', value: 15},
         {name: '세종특별시', value: 16}
       ],
      start_date: '',
      end_date: '',
      person: 1,
      region_name: '전국',
      region_value: 17
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated'
    }),
    showStartDate () {
      return this.start_date
    },
    showEndDate () {
      return this.end_date
    },
    showPerson () {
      return this.person
    }
  },
  methods: {
    clickStartDate () {
      this.menu2 = true
    },
    clickEndDate () {
      this.menu3 = true
    },
    selectRegion (item) {
      this.region_name = item.name
      this.region_value = item.value
    },
    substractPerson () {
      if (this.person > 1) {
        this.person -= 1
      }
    },
    addPerson () {
      if (this.person < 20) {
        this.person += 1
      }
    },
    startDateSave () {
      this.$refs.menu2.save(this.start_date)
      if (this.end_date < this.start_date) {
        this.end_date = this.start_date
      }
    },
    goFilter () {
      this.menu = false
      const SearchCondition = {start: this.start_date, end: this.end_date, person: this.person, scontent: this.scontent, area: '[' + this.region_value + ']'}
      console.log(SearchCondition)
      eventBus.$emit('sendSearchCondition', SearchCondition)
    },
    touchFilter () {
      // 해당 버튼을 click할때 디폴트 날짜 오늘, 내일로 설정되게끔
      let today = new Date()
      this.start_date = today.getFullYear() + '-' + ((today.getMonth() + 1) > 9 ? '' : '0') + (today.getMonth() + 1) + '-' + (today.getDate() > 9 ? '' : '0') + today.getDate()

      let nextday = new Date()
      nextday.setDate(nextday.getDate() + 1)
      this.end_date = nextday.getFullYear() + '-' + ((nextday.getMonth() + 1) > 9 ? '' : '0') + (nextday.getMonth() + 1) + '-' + (nextday.getDate() > 9 ? '' : '0') + nextday.getDate()
    }
  },
  created () {
    eventBus.$emit('sendSearchCondition', {start: '', end: '', person: this.person, scontent: this.scontent, area: '[' + this.region_value + ']'})
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

#start_date{
  border: .2px solid #e4e4e4;
  padding: 10px 15px;
  width: 10rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
#start_date_real{
  /* outline:none; */
  display: none;
}

#end_date{
  border: .2px solid #e4e4e4;
  padding: 10px 15px;
  width: 10rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
#end_date_real{
  /* outline:none; */
  display: none;
}

.person{
  border: .2px solid #e4e4e4;
  padding: 10px 10px;
}
#person_real{
  display:none;
}

#region{
  border: .2px solid #e4e4e4;
  padding: 10px 15px;
  width: 13rem;
  display:flex;
  justify-content: space-between;
}
#region select:focus{
  outline: none;
}
</style>
