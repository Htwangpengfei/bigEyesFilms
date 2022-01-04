<template>
  <li class="cinema-cell">
    <div class="head">
      <span class="name">{{info.nm}}</span>
      <p class="money">
        <span class="num">{{info.sellPrice}}</span>
        <span>元起</span>
      </p>
    </div>
    <p class="address">{{info.addr}}</p>
    <p class="tags">
      <span v-for="(label,index) in info.labels" :key="index" :style="'color:'+label.color+';border-color:'+label.color">{{label.name}}</span>
      
    </p>
    <p class="opencard" v-if="info.promotion.cardPromotionTag">
      <span class="card">卡</span>
      <span>{{info.promotion.cardPromotionTag}}</span>
    </p>
    <p class="near">近期场次{{info.showTimes}}</p>
  </li>
</template>

<script>
export default {
  name: "cinemacell",
  props:["info"],
};
</script>
<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.cinema-cell {
  height: 115px;
  box-sizing: border-box;
  border-bottom: 1px solid lightgray;
  padding: 10px 10px;
  padding-bottom:50px;

  .head {
    height: 27px;
    display: flex;
    justify-content: space-between;
    .name {
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 27px;
    }
    .money {
      font-size: 1.1rem;
      margin-top: 10px;
      color: rgb(240, 61, 55);
      line-height: 17px;

      .num {
        font-size: 1.8rem;
      }
    }
  }
  .address {
    font-size: 1.3rem;
    height: 20px;
    line-height: 20px;
    color: rgb(102, 102, 102);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .tags {
    height: 17px;
    overflow: hidden;
    span {
      height: 15px;
      border: 1px solid skyblue;
      line-height: 15px;
      padding: 0 5px;
      font-size: 12px;
      color: skyblue;
      text-align: center;
      float: left;
    }
    span.teshu {
      border: 1px solid gold;
      color: gold;
    }
  }
  .opencard {
    height: 1.6rem;
    line-height: 1.6rem;
    color: rgb(153, 153, 153);
    font-size: 1.1rem;
    span {
      float: left;
      margin-right: 5px;
    }
    .card {
      width: 15px;
      height: 15px;
      line-height: 15px;
      background-color: skyblue;
      color: white;
      font-size: 1rem;
      text-align: center;
      border-radius: 2px;
    }
  }
  .near{
      height: 1.8rem;
      line-height: 1.8rem;
      font-size: 1.1rem;
      color: rgb(153,153,153);
  }
}
</style>