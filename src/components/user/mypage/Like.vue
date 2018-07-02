<template>
    <div>
        <h1>찜한목록입니다.</h1>
        <button @click="getLike">찜한 목록보기</button>
    </div>
</template>

<script>

export default {
  name: 'Like',
  methods: {
    getLike () {
      this.$store.dispatch('getLike')
    }
  }
}
</script>

<style>

</style>
