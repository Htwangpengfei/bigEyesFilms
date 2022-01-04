<template>
  <div class="hot-movie">
    <div v-show="false" v-html="hp" ref="hpData"></div>
    <div class="good">
      <p class="title">最受好评的电影</p>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(movie, index) in hps" :key="index" @click="showDetail(movie.id)"> 
          <div :style="'background-image:url(' + movie.img + ')'">
            <p v-if="movie.score" class="grade">评分：{{movie.score}}</p>
            <p v-else class="wish">{{movie.wish}}人想看</p>
          </div>
          <p class="name">{{ movie.nm }}</p>
        </swiper-slide>
      </swiper>
    </div>
    <div class="film">
      <ul>
        <div v-for="(movie, index) in movies" :key="index" @click="showDetail(movie.id,movie.nm)">
          <hot-cell :movie="movie"/>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import http from "@/axios/index";

import HotCell from "../../components/HotCell.vue";
export default {
  name: "hotmovie",
  components: { Swiper, SwiperSlide, HotCell },
  data() {
    return {
      hp: "",
      movieList: [],
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 14,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  methods: {
    showDetail(movieid,nm){
      // 动态路由
      this.$router.push({
        path:'/detail/'+movieid,
        query:{title:nm},
      });
    }
  },
  computed: {
    hps() {
      // 处理hp，获取需要的信息
      let d = document.createElement("div");
      d.innerHTML = this.hp;
      let ds = d.querySelectorAll(".top-rated-item");
      let arr = [];
      [...ds].forEach((node) => {
        // console.log(node);
        let obj = {
          id: node.getAttribute("data-id"),
          nm: node.querySelector("h5").innerHTML,
          img: node.querySelector("img").src,
        };
        if (node.querySelector(".rated-score")) {
          obj.score = node.querySelector(".rated-score").innerHTML;
        } else {
          obj.wish = node.querySelector(".wish-num").innerHTML;
        }
        arr.push(obj);
      });
      // console.log(arr);
      return arr;
    },
    movies() {
      return this.movieList.map((movie) => {
        movie.img = movie.img.replace("/w.h", "");
        return movie;
      });
    },
  },
  created() {
    // 首页 热门 好评
    http.getHotHp().then((res) => {
      this.hp = res.data;
    });
    // 首页 热门 列表
    http.getHotMovieList().then((res) => {
      this.movieList = res.data.movieList;
      // console.log(this.movieList);
    });
  },
};
</script>

<style scoped lang="less">
* {
  box-sizing: border-box;
}
ul {
  padding-bottom: 50px;
}
.good {
  padding: 1.5rem;
  background-color: white;
  .title {
    font-size: 1.4rem;
    color: #666;
  }
  .swiper-container {
    height: 150px;

    .swiper-slide {
      width: 85px;

      div {
        width: 85px;
        height: 115px;
        position: relative;
        background-size: cover;
        background-position: center center;
        overflow: hidden;
        .grade,.wish {
          position: absolute;
          bottom: 0;
          left: 0;
          color: gold;
          line-height: 2rem;
          font-size: 1.2rem;
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .name {
        font-size: 1.6rem;
        color: black;
        font-weight: 700;
        line-height: 35px;
      }
    }
  }
}
</style>
