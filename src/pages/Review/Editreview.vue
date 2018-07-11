<template>
<div>
    <edit-header></edit-header>
    <editreview-form></editreview-form>
</div>
</template>

<script>
import EditHeader from '../../components/Review/EditHeader'
import EditreviewForm from '../../components/Review/EditreviewForm'

export default {
  name: 'Editreview',
  created () {
    this.$store.dispatch('getMyInfo')
    this.$store.dispatch('getMyhistory')
  },
  components: {
    EditHeader,
    EditreviewForm
  }
}
</script>

<style>

</style>
