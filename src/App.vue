<template>
  <div id="app">
     <ul>
        <router-link to="/" tag="li" exact activeClass="select">Home</router-link>
        <router-link to="/register" tag="li" activeClass="select" v-if="!isAuthenticated">Register</router-link>
        <router-link to="/mypage" tag="li" activeClass="select">mypage</router-link>
      </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
    }
    li {
      flex: 1;
      background-color: #495057;
      display: flex;
      padding: 1rem;
      justify-content: center;
      font-weight: bold;
      color: #fff;
    }
    li.select {
      background-color: #212529;
    }
</style>
