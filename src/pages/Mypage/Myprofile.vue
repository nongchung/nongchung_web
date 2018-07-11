<template>
  <div>
    <edit-my-info></edit-my-info>
  </div>
</template>

<script>
import EditMyInfo from '../../components/Mypage/Myprofile'
export default {
  name: 'Myprofile',
  components: {
    EditMyInfo
  },
  created () {
    this.$store.dispatch('userPersonalInfo')
    // this.$store.dispatch('getMyInfo')
  }
}
</script>

<style>

</style>
