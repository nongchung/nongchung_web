<template>
    <v-flex>
        <h2 class="headline">전국의 특색있는 농활을 예약해보세요!</h2>
          <v-text-field
            placeholder="검색창이다."
            solo
            single-line
            append-icon="search"
            clearable
            v-on:focus="searchFilter=true"
          ></v-text-field>
          <div id="search_filter" v-if="searchFilter">
            <v-btn color="success">날짜</v-btn>
            <v-btn color="success">인원</v-btn>
            <v-btn color="success">위치</v-btn>
            </div>
        </v-flex>
</template>

<script>
export default {

}
</script>

<style>

</style>
