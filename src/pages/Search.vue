<template>
<div>
    <search-bar></search-bar>
    <search-result></search-result>
</div>
</template>

<script>
import SearchBar from '../components/Search/SearchBar_new'
import SearchResult from '../components/Search/SearchResult'
export default {
  name: 'Search',
  components: {
    SearchBar,
    SearchResult
  }
}
</script>

<style>

</style>
