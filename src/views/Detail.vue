<template>
  <div>
    <Navbar dw="static" />
    <Movieinfo :info="movieInfo" />
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(time, index) in myTimes" :key="index">
        <p :class="{ choose: dateIndex == index }" @click="changeDate(index)">
          {{ time }}
        </p>
      </swiper-slide>
    </swiper>
    <selectcard />
    <ul>
      <Cinemacell v-for="(cinema,index) in cinemas" :key="index" :info="cinema"/>
    </ul>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import http from "@/axios/index.js";
import Navbar from "@/components/Navbar.vue";
import Movieinfo from "@/components/MovieInfo.vue";
import selectcard from "@/components/SelectCard.vue";
import Cinemacell from "@/components/Cinema.vue";
export default {
  name: "detail",
  data() {
    return {
      movieId: '',
      movieData: '',
      dateIndex: 0,
      times: [],
      cinemas: [],
      movieInfo: {}, // 影片详情
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 0,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  components: {
    Navbar,
    Movieinfo,
    Swiper,
    SwiperSlide,
    selectcard,
    Cinemacell
  },
  methods: {
    getNowTime() {
      let data = new Date();
      let y = data.getFullYear();
      let m = data.getMonth() + 1;
      let d = data.getDate();
      return y + "-" + m + "-" + d;
    },
    changeDate(index) {
      this.dateIndex = index;
      this.movieData = this.times[index].date.toString()
      http.getDataForCinema(this.movieId, this.$store.state.city.id, this.movieData).then((res)=>{
        this.cinemas = res.data.data.cinemas
      })
    },
  },
  computed: {
    myTimes() {
      let exs = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      let arr = [];
      this.times.forEach((time, index) => {
        let date = new Date(time.date);
        let ex = "";
        if (index == 0) {
          ex = "今天";
        } else if (index == 1) {
          ex = "明天";
        } else if (index == 2) {
          ex = "后天";
        } else {
          ex = exs[date.getDay()];
        }
        let m = date.getMonth() + 1;
        if (m < 10) {
          m = "0" + m;
        }
        ex = ex + m + "月";
        let d = date.getDate();
        if (d < 10) {
          d = "0" + d;
        }
        ex = ex + d + "日";
        arr.push(ex);
      });
      return arr;
    },
  },
  created() {
    //   修改bar
    this.movieId = window.location.hash.slice(9,window.location.hash.indexOf('?'))
    this.$store.commit("hideTabbar");
    this.$store.commit("hideNavbar");
    this.$store.commit("showMine", {
      isLeft: true,
      title: this.$route.query.title,
      isRight: false,
    });
    // 请求数据----------------
    // 影片详情
    http.getMovieDetail(this.$route.params.movieid).then((res) => {
      this.movieInfo = res.data.data.movie;
    });
    // 影院列表
    http.getDetailCinemas(
        this.$route.params.movieid,
        this.getNowTime(),
        this.$store.state.city.id
      )
      .then((res) => {
        this.cinemas = res.data.data.cinemas;
      });
    // 选项卡
    http.getDetailSelect(this.$route.params.movieid, this.getNowTime(), this.$store.state.city.id).then((res) => {
      });
    http.getDetailTime(this.$route.params.movieid, this.$store.state.city.id)
      .then((res) => {
        this.times = res.data.data.dates;
      });
  },
  destroyed() {
    this.$store.commit("showTabbar");
    this.$store.commit("showNavbar");
    this.$store.commit("showMine", {
      isLeft: false,
      title: "咕咕查电影",
      isRight: false,
    });
  },
};
</script>

<style scoped lang="less">
.swiper-container {
  height: 45px;
  box-sizing: border-box;
  border-bottom: 1px solid lightgray;
  .swiper-slide {
    width: 115px;
    height: 45px;
    line-height: 45px;
    padding: 0 4px;
    .choose {
      width: 100px;
      height: 100%;
      text-align: center;
      border-bottom: 2px solid #f03d37;
      color: #f03d37;
    }
  }
}
</style>
