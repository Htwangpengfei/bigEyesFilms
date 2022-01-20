<template>
  <div class="my_video">
    <div class="name" v-html="html"></div>
    <div v-if="html.code !== 200">网络不给力，请返回上层重试</div>
  </div>
</template>

<script>
import http from "@/axios/index.js";
export default {
  name:"myvideo",
  data() {
    return {
      cinemaSrc: `/api/asgard/movie/${this.$store.state.cinemaId}?channelId=4&cityId=1`,
      html: ''
    }
  },
  created() {
    this.$store.commit('hideTabbar')
    this.$store.commit('hideNavbar')
    http.getHtmlText(this.cinemaSrc).then((res) => {
      this.html = res.data
      console.log(res.data)
    })
  },
  methods: {},
  beforeDestroy() {
    this.$store.commit('showTabbar')
    this.$store.commit('showNavbar')
  }
}
</script>

<style scoped lang="less">
.my_video{
  background-color: rgb(217, 243, 147);
  position: relative;
  .name{
    position: absolute;
    top: -100px;
    width: 100%;
    height: 100%;
  }
}
</style>
