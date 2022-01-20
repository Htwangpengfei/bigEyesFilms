<template>
  <div class="older-movie">
    <!-- 经典电影{{filmText}} -->
    <div v-for="(movie, index) in filmText" :key="index" class="movie">
      <div class="img">
        <img :src="movie.img" alt="" />
      </div>
      <div class="info">
        <p class="name">{{ movie.nm }}</p>
        <p class="enm">{{movie.enm}}</p>
        <p class="actor">{{movie.actors}}</p>
        <p class="show-info">{{movie.time}}</p>
      </div>
      <div class="score">
        <p v-if="movie.grade">
          <span class="grade">{{movie.grade}}</span>
          <span>分</span>
        </p>
        <p v-else class="grade">暂无评分</p>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/axios/index.js";
export default {
  name: "oldermovie",
  data() {
    return {
      films: [],
    };
  },
  created() {
    http.getOldCityList().then((res) => {
      this.films = res.data;
    });
  },
  computed: {
    filmText() {
      let d = document.createElement("div");
      d.innerHTML = this.films;
      let ds = d.querySelectorAll(".classic-movie");
      let arr = [];
      [...ds].forEach((node) => {
        let obj = {
          nm: node.querySelector(".title").innerHTML,
          enm: node.querySelector(".english-title").innerHTML,
          actors: node.querySelector(".actors").innerHTML,
          time: node.querySelector(".show-info").innerHTML,
          img: node.querySelector("img").src,
        };
        if (node.querySelector(".grade")) {
          obj.grade = node.querySelector(".grade").innerHTML;
        }
        arr.push(obj);
      });
      return arr;
    },
  },
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.older-movie {
  padding-top: 50px;
}
.movie {
  height: 94px;
  line-height: 18px;
  margin-left: 20px;
  margin-bottom: 20px;
  display: flex;
  padding: 10px 10px;
  .img {
    height: 94px;
    img {
      height: 94px;
    }
  }
}
.info {
  width: 0;
  flex-grow: 1;
  height: 94px;
  margin-left: 10px;
  .name {
    height: 24px;
    line-height: 24px;
    font-size: 17px;
    font-weight: 600;
    color: #333;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .enm {
    height: 18px;
    font-size: 13px;
    margin-bottom: 4px;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .actor {
    height: 18px;
    font-size: 13px;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .score {
    width: 60px;
    margin-left: 20px;
    span {
      font-size: 12px;
      line-height: 17px;
    }
    .grade {
      color: #faaf00;
      font-size: 15px;
    }
  }
}
</style>
