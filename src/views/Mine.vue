<template>
  <div class="mine">
    <nav class="fangshi">
      <div :class="{ col: dindex === 1 }" @click="change1(1)">
        <router-link to="/mine/meituan" replace active-class="active"
          >美团账号登录</router-link
        >
      </div>
      <div :class="{ col: dindex === 0 }" @click="change2(0)">
        <router-link to="/mine/iphone" replace active-class="active"
          >手机验证登录</router-link
        >
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Meituan from "./home/Meituan.vue";
export default {
  name: "mine",
  data() {
    return {
      dindex: 1,
    };
  },
  methods: {
    change1(index) {
      this.dindex = index;
    },
    change2(index) {
      this.dindex = index;
    },
  },
  components: { Meituan },

  created() {
    // 组件创建完成
    this.$store.commit("showMine", {
      isLeft: true,
      isRight: false,
      title: "咕咕查电影",
    }),
      this.$store.commit("hideTabbar");
  },
  destroyed() {
    // 组件被销毁了
    this.$store.commit("showMine", {
      isLeft: false,
      isRight: true,
      title: "咕咕查电影",
    }),
      this.$store.commit("showTabbar");
  },
};
</script>

<style scoped lang="less">
.mine {
  padding-top: 60px;
}
.fangshi {
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 3px solid lightgray;
  div {
    width: 150px;
    height: 30px;
    text-align: center;
    padding: 0 10px;
  }
  a {
    color: black;
  }
  .active {
    width: 150px;
    height: 30px;
    padding: 8px 10px;
    border-bottom: 3px solid orange;
  }
  .col {
    border-bottom: 0px solid orange;
  }
}
</style>
