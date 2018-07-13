<template>
    <div>
        hello
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'SearchResult',
  computed: {
    ...mapGetters({
      searchResult: 'getSearchResult'
    })
  }
}
</script>

<style>

</style>
