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
  computed: {
    getPath: function () {
      return this.$route.params.idx
    }
  },
  created () {
    console.log(this.getPath)
    this.$store.dispatch('getMyInfo')
    this.fetchData(this.getPath)
    console.log(this.nhDeatail.image[0])
  },
  methods: {
    fetchData: function (idx) {
      this.$store.dispatch('nonghwalDetail', idx)
    }
  },
  components: {
    WriteHeader,
    WritereviewForm
  }
}
</script>

<style>

</style>
