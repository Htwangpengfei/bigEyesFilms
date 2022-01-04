<template>
  <div class="manyfile">
    <li>
      <div class="gl">
        <div class="img">
          <img :src="type.img" alt="" />
        </div>
        <div class="word">
          <p class="name">{{ type.nm }}</p>
          <p>
            <span class="num">{{ type.wish }}</span>
            <span>人想看</span>
          </p>
          <p>主演：{{ type.star }}</p>
          <p>{{ type.showInfo }}</p>
        </div>
        <div class="btn">
          <p v-if="type.showst==4">预售</p>
          <p id="col" v-else>想看</p>
        </div>
      </div>
    </li>
    <div class="bom"></div>
  </div>
</template>

<script>
export default {
  name: "will",
  props: ["type"],
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
.manyfile {
  height: 125px;
  margin-top: 5px;
  .gl {
    width: 100%;
    height: 125px;
    background-color: white;
    padding: 0 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .btn {
    width: 20%;
    p {
      width: 47px;
      height: 27px;
      line-height: 28px;
      text-align: center;
      box-sizing: border-box;
      background-color: #3c9fe6;
      color: #fff;
      border-radius: 4px;
      white-space: nowrap;
      font-size: 12px;
      cursor: pointer;
    }
  }
  .word {
    width: 50%;
    height: 90px;
    border-bottom: 1px solid lightgray;
  }
  .img {
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 64px;
      height: 90px;
    }
  }
  p {
    font-size: 1.5rem;
    color: gray;
    line-height: 1.8rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .num {
    color: gold;
    font-size: 2rem;
  }
  .name {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2rem;
  }
}
.bom {
  height: 50px;
  width: 100%;
}
#col{
  background-color: orange;
}
</style>