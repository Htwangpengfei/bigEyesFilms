<template>
  <div id="app">
    <Navbar v-show="this.$store.state.isNavbar" />
    <router-view></router-view>
    <Tabbar v-show="this.$store.state.isTabbar" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Tabbar from "./components/Tabbar.vue";
export default {
  components: { Navbar, Tabbar },
};
</script>


<style lang="less">
</style>
