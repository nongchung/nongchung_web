<template>
    <div>
        <mypage></mypage>
    </div>
</template>

<script>
import Mypage from '../../components/Mypage/Mypage'
export default {
  name: 'MyPage',
  components: {
    Mypage
  },
  created () {
    // this.$forceUpdate()
    this.$store.dispatch('getLike')
    this.$store.dispatch('getMyhistory')
    this.$store.dispatch('getMyInfo')
  }
}
</script>

<style>

</style>
