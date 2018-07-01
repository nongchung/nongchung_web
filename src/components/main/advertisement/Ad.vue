<template>
     <v-carousel hide-delimiters style="height:30vh">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'http://dimg.podbbang.com/dailypod/article/content_1470192583.jpeg'
        },
        {
          src: 'http://www.usnews.co.kr/news/photo/200807/16939-1-8060.jpg'
        },
        {
          src: 'https://t1.daumcdn.net/cfile/tistory/1460A63F5022490603'
        },
        {
          src: 'http://farm.hansalim.or.kr/wp/wp-content/uploads/2017/06/%ED%8F%AC%EC%8A%A4%ED%84%B0-%EC%82%AC%EC%A7%84-1024x768.jpg'
        }
      ]
    }
  }
}
</script>

<style>
</style>
