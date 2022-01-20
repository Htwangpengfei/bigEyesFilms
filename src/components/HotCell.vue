<template>
  <li>
    <img :src="movie.img" alt="" />
    <div class="info">
      <div @click="gotoMenu(movie.id)">
        <p class="name">{{movie.nm}}</p>
        <p class="score">评分<span>{{movie.sc}}</span></p>
        <p class="actors">主演：{{movie.star}}</p>
        <p class="num">{{movie.showInfo}}</p>
      </div>
      <p class="buy" @click="showDetail(movie.id,movie.nm)">影院</p>
    </div>
  </li>
</template>
<script>
export default {
  name: "cell",
  props:["movie"],
  data() {
    return {}
  },
  methods: {
    gotoMenu(id) {
      this.$store.commit('getCinemaId', id)
      this.$router.push({
        path: '/video'
      })
    },
    showDetail(movieid,nm){
      // 动态路由
      this.$router.push({
        path:'/detail/'+movieid,
        query:{title:nm},
      });
    }
  }
};
</script>


<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  height: 114px;
  padding: 12px;
  display: flex;
  img {
    width: 64px;
    height: 90px;
  }

  .info {
    width: 0;
    height: 102px;
    flex-grow: 1;
    margin-left: 10px;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div {
      width: 65%;
      height: 90px;
      overflow: hidden;
      float: left;
      p {
        height: 2rem;
        line-height: 2rem;
        font-size: 1.4rem;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .name {
        height: 3rem;
        line-height: 3rem;
        font-size: 1.8rem;
        color: black;
        font-weight: 700;
      }
    }

    .buy {
      float: right;
      width: 47px;
      height: 27px;
      background-color: #e74847;
      text-align: center;
      line-height: 27px;
      color: white;
      border-radius: 4px;
    }
  }
}
</style>