<template>
<div>
   <farm-header></farm-header>
   <farm-content></farm-content>
</div>
</template>

<script>
import FarmContent from '../../components/Nhpage/FarmContent'
import FarmHeader from '../../components/Nhpage/FarmHeader'
export default {
  name: 'FarmInfo',
  computed: {
    getPath: function () {
      return this.$route.params.idx
    }
  },
  created () {
    console.log(this.getPath)

    this.$store.dispatch('getFarmInfo', this.getPath)
  },
  components: {
    FarmHeader,
    FarmContent
  }
}
</script>

<style>

</style>
