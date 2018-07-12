<template>
<v-layout column>
  <v-layout pa-4 column style="background:white; border: .1px solid #cccccc;">
    <v-flex>
      <v-layout column>
        <v-flex style="font-family:sans-serif; font-weight:bold; color:#4d4d4d;">FAQ</v-flex>
        <div v-for="(item, index) in getDetailQna" :key="index" class="my-3">
        <v-flex d-flex>
          <v-flex  py-2 style="font-family:sans-serif; font-weight:bold; color:#4d4d4d; width:5%;">Q</v-flex>
          <v-flex  py-2 style="font-family:sans-serif; color:#4d4d4d; width:95%;">{{item.title}}</v-flex>
        </v-flex>
        <v-flex d-flex >
        <v-flex style="font-family:sans-serif; font-weight:bold; color:#4d4d4d; width:5%;">A</v-flex>
        <v-flex style="font-family:sans-serif; color:#4d4d4d; width:95%;" >{{item.description}}</v-flex>
        </v-flex>
        </div>
      </v-layout>
    </v-flex>
    <v-divider></v-divider>
    <v-flex>
      <v-layout my-3 column>
        <v-flex style="font-family:sans-serif; font-weight:bold; color:#4d4d4d;">Q &#38; A</v-flex>
        <v-flex class="my-3" style="border: .1px solid #cccccc; height: 15vh;">
        <v-textarea
        style="padding: .5rem .5rem;"
          solo
          flat
          name="input-7-4"
          placeholder="문의 작성 전 확인해주세요! (100자이내)
해당 게시판에 개인의 연락처를 남기거나 적절하지 않은 문의를 남길 시
동의없이 삭제될 수 있습니다."
          v-model="userquestion"
        ></v-textarea></v-flex>
        <v-flex text-xs-right>
        <v-btn style="width:9vw;" color="warning" @click="sendQna()">문의하기</v-btn></v-flex>
      </v-layout>
    </v-flex>
  </v-layout>

  <v-layout column>
    <v-expansion-panel>
    <v-expansion-panel-content
      v-for="(item,i) in userquestion"
      :key="i"
      expand-icon="arrow_drop_down">
      <div slot="header">{{item.name}}</div>
      <v-card>
        <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
        </v-layout>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      userquestion: ''
    }
  },
  computed: {
    ...mapGetters({
      getDetailQna: 'getDetailQna'
    })
  },
  methods: {
    sendQna () {
      this.$store.dispatch('sendDetailQna', {idx: this.nhIdx, question: this.userquestion})
    }
  },
  created () {
    this.$store.dispatch('getDetailQna', this.nhIdx)
    console.log(this.getDetailQna)
  },
  props: ['nhIdx']
}
</script>

<style scoped>
</style>
