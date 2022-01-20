<template>
  <div class="my_video">
    <div class="name" v-html="html"></div>
    <!-- <div v-if="html.code !== 200">网络不给力，请返回上层重试</div> -->
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
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      this.html = res.data
      loading.close();
    }).catch(()=> {
      this.$notify({
        title: 'error',
        message: '加载出错，返回首页'
      });
      this.$router.push({
        path: '/home/hot'
      })
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
  // background-color: rgb(217, 243, 147);
  position: relative;
  .name{
    position: absolute;
    top: -100px;
    width: 100%;
    height: 100%;
  }
}
</style>
