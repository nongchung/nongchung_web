<template>
<div>
  <write-header></write-header>
  <writereview-form></writereview-form>
</div>
</template>

<script>

import WriteHeader from '../../components/Review/WriteHeader'
import WritereviewForm from '../../components/Review/WritereviewForm'
export default {
  name: 'Writereview',
  created () {
    this.$store.dispatch('getMyInfo')
    this.$store.dispatch('getMyhistory')
  },
  components: {
    WriteHeader,
    WritereviewForm
  }
}
</script>

<style>

</style>
