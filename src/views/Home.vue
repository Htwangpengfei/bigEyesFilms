<template>
  <div class="home">
    <nav>
      <router-link class="city" to="/city">{{$store.state.city.nm}}<a-icon type="caret-down" /></router-link>
      <router-link :class="item1" to="/home/hot" @click.native="clickChoose('hot')">热映</router-link>
      <router-link :class="item2" to="/home/cinema" @click.native="clickChoose('cinema')">影院</router-link>
      <router-link :class="item3" to="/home/will" @click.native="clickChoose('will')">待映</router-link>
      <!-- <router-link class="item" to="/home/older">经典电影</router-link> -->
      <router-link class="search" to="/search"><a-icon type="search"/></router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      item1: 'item',
      item2: '',
      item3: ''
    }
  },
  created() {},
  methods: {
     clickChoose(str) {
       console.log(1)
       this.item1 = ''
       this.item2 = ''
       this.item3 = ''
       if(str === 'hot'){
        this.item1 = 'item'
       }else if(str === 'cinema') {
        this.item2 = 'item'
       }else if(str === 'will') {
        this.item3 = 'item'
       }
     }
  }
};
</script>

<style scoped lang="less">
* {
  box-sizing: border-box;
}
.item {
  border-bottom: 2px solid red;
}
.home {
  height: 100vh;
  padding-top: 5rem;
  padding-bottom: 5rem;

  nav {
    height: 4.5rem;
    background-color: white;
    border-bottom: 1px solid lightgray;
    display: flex;
    position: fixed;
    top: 50px;
    width: 100%;
    z-index: 100;
    justify-content: space-around;

    a{
      font-size: 1.5rem;
      display: block;
      height: 4.5rem;
      line-height: 4.5rem;
      color: #666;
    }
    .search{
      color: #e74847;
    }
  }
}
</style>
