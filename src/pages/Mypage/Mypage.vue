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
    this.$store.dispatch('getLike')
  }
}
</script>

<style>

</style>
