<template>
  <nav class="mynav" :style="'position:' + dw">
    <div>
      <p v-show="this.$store.state.navbar.isLeft" @click="toHot">
        <a-icon type="double-left" />
      </p>
    </div>
    <div>
      <p>{{ this.$store.state.navbar.title }}</p>
    </div>
    <div>
      <p v-show="this.$store.state.navbar.isRight">
        <a-icon type="menu" />
      </p>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  props: {
    dw: {
      type: String,
      default: "fixed",
    },
  },
  data() {
    return {
    };
  },
  methods: {
    toHot() {
      this.$router.push("/home");
    },
  },
};
</script>


<style scoped lang="less">
@main-color: #e74847;
.mynav {
  height: 5rem;
  background-color: @main-color;
  display: flex;
  justify-content: space-between;

  top: 0;
  width: 100%;
  z-index: 100;
  div {
    width: 20%;
    height: 5rem;
    text-align: center;
    p {
      color: white;
      font-size: 2rem;
      height: 5rem;
      line-height: 5rem;
    }
  }
  div:nth-of-type(2) {
    width: 60%;
  }
}
</style>