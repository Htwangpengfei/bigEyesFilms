<template>
  <div class="will-movie">
    <p class="head">近期最受期待</p>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(type, index) in images" :key="index">
        <div id="head">
          <div class="word" :style="'background-image:url(' + type.img + ')'">
            <p class="xin">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAABGdBTUEAALGPC/xhBQAAAytJREFUWAnVmLtrFFEUh3cWFAtRE5FEEUREsFAkooUIgl3+CUEU7LVR1LBIMERCLFLZRG1CrFJYpLBQENRGC4n4wBeKRUQ2PlAQX+v3m70z7MzemZ3HZp05cPbce86553w7O7Mzc51KjDQaDYfwDvSAseux69Cv6Ef0LXoHXXAc5y82UqhVJbgLPYhuQTega9DPaB19ht6VpVYDaxUBWYUGewkcQzdbE4LOJabXaHQ76G7OqHWI0RG0v+mJ/XxPdJpaD2xZbcAUX0XiSXS/bUEH3yPil2imL1Chln6RE+huzVPKffJV60frugAwDfoI1tBtrUkpx4vknzVrLmAHU65vTX/F5DzQnzynDwzsCpwX0e1eMIfV+S3ReZpXXlDgFNC/VEgXgifHGXQDVvUE2g1Y1RKT2FxxgTm6cg4bXxHNsGH0j/DhIlKGmFzGKuSbCAyFgkWcDsG6UaeE/m/LIvsEvKcstGIV8ECJgAcErJtFWaRPwCvLQitWAbv3/ZJALwlYj3ZlkbqA9YBRFnkp4HtloRWrgJ+g/uNbgeHF+LTKY5tebWYLDOqhzYpVR1hyE33njor5ITYxNp/WIP/DeBINvI4ooQAipknD6D9eVnC8JjCOxr799vgLiGXcsLmtvVPCnRB4yGDanRTjQ2/PYvIlACwvCTcwM37G/xvMGJYAQRuwoiRex8wFMns7mTMMbV2twMpiwVXMfNuK5XfMm97WTpHAJvsy9pZ15fI41Us9IyUWmG+qPa4ptBe3b/WYMj2zAWsVBfQfPYEGrlbFuiiqPWF6xZaNPcLeSgr9ZjyGLni+LlrVHDM9OpZNBKwqFPyJGUWfa94lUa1RUztRSX9vLVE2SewNrMboaG9NuiYi7w3+M8B+i4hb3amBVQXotRjdxpPsHWtJWLQHfBrYL+FAp3kmYBUFWnu/2u1Mu03wgTXajaxjU0tmYHUCehAj6H7NE4ggBSvoTJL4orNVp/Eifm1eJ/lplXMuD6wYcgGrAAA6H0fQ75pHiGIjJjciJZk7N7DaAKIrvobarnj5aiaHYT7JdQ6HW5sL8Sj+nSb2GHsF2EwXWLi+5v8ArR6xIZ+h44wAAAAASUVORK5CYII="
                alt=""
              />
            </p>
            <span class="xiangkan">{{ type.id }}人想看</span>
          </div>
          <p class="name">{{ type.nm }}</p>
          <p class="time">{{ type.comingTitle }}</p>
        </div>
      </swiper-slide>
    </swiper>
    <ul>
      <div class="date" v-for="(date, index) in Object.keys(getTime)" :key="'date' + index">
        <div :id="date">{{ date }}</div>
        <div v-for="(type, index) in images2" :key="index">
          <div v-if="date == type.comingTitle">
            <Willtext :type="type" />
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import Willtext from "@/components/willMovieText.vue";
import "swiper/css/swiper.css";
import http from "@/axios/index.js";
export default {
  name: "willmovie",
  components: { Swiper, SwiperSlide, Willtext },
  data() {
    return {
      headerList: [],
      wordList: [],
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 10,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  created() {
    http.getWillHeader().then((res) => {
      this.headerList = res.data.coming;
    });
    http.getWillText().then((res) => {
      this.wordList = res.data.coming;
    });
  },
  computed: {
    images() {
      return this.headerList.map((head) => {
        head.img = head.img.replace("/w.h", "");
        return head;
      });
    },
    images2() {
      return this.wordList.map((head) => {
        head.img = head.img.replace("/w.h", "");
        return head;
      });
    },
    getTime() {
      let obj = {};
      this.wordList.forEach(date => {
        let type = date.comingTitle;
        if (obj[type]) {
          obj[type].push(date);
        } else {
          obj[type] = [date];
        }
      });
      return obj;
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
.xiangkan{
  font-weight: 500;
  font-size: 16px !important;
  width:80px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  color: #FAAF00;
}
.will-movie {
  width: 100%;
  padding-bottom: 50px;
  padding-top: 40px;
  background-color: rgb(218, 218, 218);
}
.head {
  font-size: 1.5rem;
  color: black;
  line-height: 1.8rem;
  padding: 10px;
  background-color: white;
}
.swiper-container {
  height: 180px;
  background-color: white;
  .swiper-slide {
    padding: 0 10px;
    height: 160px;
    width: 90px;
    .word {
      position: relative;
      width: 85px;
      height: 115px;
      background-size: cover;
      background-position: center center;
      .xin {
        width: 28px;
        height: 28px;
        line-height: 28px;
        background: rgba(61, 63, 71, 0.6);
        text-align: center;
        border-bottom-right-radius: 10px;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        img {
          display: inline-block;
          width: 10px;
          height: 10px;
          background-size: 100%;
          background-repeat: no-repeat;
        }
      }
      span {
        font-size: 0.8rem;
        position: absolute;
        bottom: 10px;
        left: 5px;
        color: gold;
      }
    }
    .name {
      font-size: 13px;
      line-height: 2.2rem;
      color: #222;
      margin-bottom: 3px;
      font-weight: 700;
      width: 85px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .time {
      font-size: 8px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .word {
      font-size: 17px;
      font-weight: 600;
    }
  }
}
</style>
