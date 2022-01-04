<template>
  <div class="cinema">
    <sellectcard />
    <div class="list" v-for="(movie, index) in cinemaText" :key="index">
      <div class="idd">
        <span class="movieid">{{ movie.id }}</span>
        <p>
          <span class="price">{{ movie.price }}</span
          ><span>元起</span>
        </p>
      </div>
      <div class="as">
        <span class="address">{{ movie.flex }}</span>
        <span class="near">1.1km</span>
      </div>
      <div class="card">
        <span class="b" v-if="movie.allowRefund.found">{{movie.allowRefund.found}}</span>
        <span class="b" v-if="movie.allowRefund.endorse">{{movie.allowRefund.endorse}}</span>
        <span class="y" v-if="movie.allow.vipTag">{{movie.allow.vipTag}}</span>
        <span class="y" v-if="movie.allow.snack">{{movie.allow.snack}}</span>
        <span class="b" v-for="(card,nm) in movie.hallType" :key="nm">{{card}}</span>
      </div>
      <span class="bc" v-if="movie.card==1">卡</span><span class="info">{{ movie.discount }}</span>
    </div>
  </div>
</template>

<script>
import http from "@/axios/index.js";
import Sellectcard from "../../components/SelectCard.vue";
export default {
  name: "cinema",
  data() {
    return {
      cinemas: "",
    };
  },
  components: { Sellectcard },
  methods: {
    getNowTime() {
      let data = new Date();
      let y = data.getFullYear();
      let m = data.getMonth() + 1;
      let d = data.getDate();
      return y + "-" + m + "-" + d;
    },
  },
  created() {
    http.getCinema(this.getNowTime(), this.$store.state.city.id).then((res) => {
      this.cinemas = res.data;
      // console.log(this.cinemas);
    });
  },
  computed: {
    cinemaText() {
      // 处理信息
      let d = document.createElement("div");
      d.innerHTML = this.cinemas;
      let ds = d.querySelectorAll(".item");
      let arr = [];
      [...ds].forEach((node) => {
        let obj = {
          id: node.querySelector(".title span:nth-of-type(1)").innerHTML,
          price: node.querySelector(".price").innerHTML,
          flex: node.querySelector(".flex").innerHTML,
          distance: node.querySelector(".distance").innerHTML,
          allowRefund: [],
          allow: [],
          hallType: [],
          card:0
        };
        if (node.querySelector(".allowRefund")) {
          obj.allowRefund.found = node.querySelector(".allowRefund").innerHTML;
        }
        if (node.querySelector(".endorse")) {
          obj.allowRefund.endorse = node.querySelector(".endorse").innerHTML;
        }
        if (node.querySelector(".snack")) {
          obj.allow.snack = node.querySelector(".snack").innerHTML;
        }
        if (node.querySelector(".vipTag")) {
          obj.allow.vipTag = node.querySelector(".vipTag").innerHTML;
        }
        if (node.querySelector(".discount-label-text")) {
          obj.card=1;
          obj.discount = node.querySelector(".discount-label-text").innerHTML;
        }
        if (node.querySelector(".hallType")) {
          [...node.querySelectorAll(".hallType")].forEach((film) => {
            obj.hallType.push(film.innerHTML);
          });
        }
        arr.push(obj);
      });
      console.log(arr);
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
.cinema {
  padding-top: 50px;
  padding-bottom: 50px;
}
.idd {
  display: flex;
  justify-content: space-between;
}
.list {
  padding: 13px 15px;
  height: 120px;
  width: 100%;
  border-bottom: 1px solid lightgray;
  overflow: hidden;
  .movieid {
    font-size: 1.6rem;
    font-weight: 700;
    color: black;
  }
  .price {
    font-size: 2rem;
    margin-left: 10px;
  }
  span {
    color: red;
  }
  .as {
    display: flex;
    justify-content: space-between;
    .address {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: gray;
      width: 240px;
    }
    .near {
      font-size: 1rem;
      margin-left: 20px;
      color: gray;
      float: right;
    }
  }

  .card {
    width: 100%;
    font-size: 1.2rem;
    span {
      border: 1px solid black;
      height: 16px;
      line-height: 16px;
      text-align: center;
    }
    .b {
      border:1px solid #589daf;
      color: #589daf;
      margin-right: 5px;
    }
    .y {
      border:1px solid gold;
      color: gold;
      margin-right: 5px;
    }
  }
  .bc {
    background-color: cornflowerblue;
    color: white;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    padding: 2px;
  }
  .info {
    color: gray;
    font-size: 1rem;
    margin-left: 5px;
  }
}
</style>


