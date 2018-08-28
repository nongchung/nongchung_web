<template>
<v-layout column>
  <v-layout pa-4 column style="background:white; border: .1px solid #cccccc;">
    <v-flex>
      <v-layout column>
        <v-flex style="font-weight:bold; color:#4d4d4d;">FAQ</v-flex>
        <v-flex v-for="(item, index) in qna" :key="index" class="my-3">
        <v-flex d-flex>
          <v-flex style="font-weight:bold; color:#4d4d4d; width:5%;">Q</v-flex>
          <v-flex style="color:#4d4d4d; width:95%;">{{item.q}}</v-flex>
        </v-flex>
        <v-flex d-flex class="pt-2">
        <v-flex style="font-weight:bold; color:#4d4d4d; width:5%;">A</v-flex>
        <v-flex style="color:#4d4d4d; width:95%; white-space: pre;" >{{item.a}}</v-flex>
        </v-flex>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-divider></v-divider>
    <v-flex>
      <v-layout my-3 column>
        <v-flex style="font-weight:bold; color:#4d4d4d;">Q &#38; A</v-flex>
        <v-flex class="my-3">
        <v-textarea
        style="padding: .5rem; font-size:1rem; border: .1px solid #cccccc; height:130px;"
          solo
          flat
          placeholder="문의 작성 전 확인해주세요!
수집된 문의는 담당자에게 전달되며,
정리된 상태로 FAQ에 업로드됩니다.
긴급한 문의는 (담당자)010-3240-0736로 직접 전화 부탁드립니다!"
          v-model="userquestion"
        ></v-textarea></v-flex>
        <v-flex text-xs-right>
        <v-btn style="width:9vw;" color="warning" @click="sendQna()">문의하기</v-btn></v-flex>
      </v-layout>
    </v-flex>
  </v-layout>

  <!-- <v-layout column>
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
        </v-layout> -->
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data () {
    return {
      userquestion: '',
      qna: [
        { q: '서리해도 되나요?', a: '안됩니다. 서리하면 잡혀가요. ' },
        {
          q: '새참도 제공해주시나요?',
          a: '맛있는 새참이 기다리고 있습니다. 어서 농활 신청하러 와주세요~! '
        },
        {
          q: '친구랑 같이 가고 싶은데 한번에 두명 신청 안되나요?',
          a: '안됩니다. 개별 신청이 원칙입니다. ㅠㅠ!'
        },
        {
          q: '결제가 되지 않아요.',
          a:
            '결제가 되지 않을시 (담당자)010-6577-9381 또는 카카오 친구로 연락주세요.'
        },
        {
          q: '환불은 어떻게 되나요? ',
          a:
            '1. 출발 3일전까지 환불하셔야 100% 환불이 가능합니다.\n2. 출발 2일전과 1일 2일 전은 40%만 환불 가능합니다.\n3. 당일최소는 환불 불가능합니다.'
        },
        {
          q: '우천시에는 농활 어떻게 하나요? ',
          a:
            '강수량에 따라 취소될수도 있습니다. \n취소되면 연락을 드리고 환불처리 해드리며, 환불은 3일이내 처리됩니다.'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      getDetailQna: 'getDetailQna'
    })
  },
  methods: {
    sendQna () {
      this.$store.dispatch('sendDetailQna', {
        idx: this.nhIdx,
        question: this.userquestion
      })
    }
  },
  created () {
    // this.$store.dispatch('getDetailQna', this.nhIdx)
    // console.log(this.getDetailQna)
  },
  props: ['nhIdx']
}
</script>

<style scoped>
</style>
