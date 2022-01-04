<template>
  <div class="movie-info" :style="'background-image:url( ' + movieImg + ' )'">
    <img :src="movieImg" alt="" />
    <div class="info">
      <p class="name">{{ info.nm }}</p>
      <p>{{ info.enm }}</p>
      <p class="wish" v-if="info.sc">{{info.sc}}</p>
      <p class="wish" v-else>{{ info.wish }}人想看</p>
      <p>{{ info.cat }}</p>
      <p>{{ info.src }}/{{ info.dur }}</p>
      <p>{{ info.pubDesc }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "movieinfo",
  props: ["info"],
  computed: {
    movieImg() {
      if (!this.info.img) {
        return;
      }
      return this.info.img.replace("/w.h", "");
    },
  },
};
</script>

<style scoped lang="less">
.movie-info {
  height: 188px;
  box-sizing: border-box;
  padding: 19px;
  display: flex;
  img {
    width: 110px;
    height: 150px;
  }
  .info {
    width: 0;
    height: 150px;
    flex-grow: 1;
    margin-left: 1rem;
    p {
      font-size: 1.2erm;
      color: #fff;
      margin: 0;
      margin-top: 1rem;
      line-height: 1.2rem;
    }
    .name {
      font-size: 1.6rem;
      line-height: 1.6rem;
      font-weight: 700;
    }
    .wish {
      font-size: 1.6rem;
      line-height: 1.6rem;
      font-weight: 700;
      color: gold;
    }
  }
}
</style>
