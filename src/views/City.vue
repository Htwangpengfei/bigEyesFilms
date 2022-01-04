<template>
  <div>
    <ul>
      <li class="type" id="hotcity">热门</li>
      <li class="hotcity">
          <p v-for="(city,index) in hotcities" :key="index" @click="toHome(city.id,city.nm)">{{city.nm}}</p> 
      </li>
      <template v-for="(code, index) in Object.keys(myCities).sort()">
        <li :id="code" class="type" :key="'type' + index">{{ code }}</li>
        <li class="city" v-for="cn in myCities[code]" :key="cn.id" :cid="cn.id" @click="toHome(cn.id,cn.nm)">
          {{ cn.nm }}
        </li>
      </template>
    </ul>
    <aside>
      <a href="#hotcity">热门</a>
      <a :href="'#'+code" v-for="(code, index) in Object.keys(myCities).sort()" :key="index">{{ code }}</a
      >
    </aside>
  </div>
</template>

<script>
import http from "@/axios/index.js";
export default {
  name: "City",
  data() {
    return {
      cities: [],
      hotcities:[],
    };
  },
  methods:{
    toHome(id,nm){
      this.$store.commit("changeCity",{id,nm});
      this.$router.push("/");
    }
  },
  computed: {
    myCities() {
      let obj = {};
      this.cities.forEach((city) => {
        let py = city.py;
        if(py==="shanghai"||py==="beijing"||py==="chengdu"||py==="tianjin"||py==="chongqing"||py==="hangzhou"){
            this.hotcities.push(city);
        }
        let code = py.slice(0, 1).toUpperCase();
        // console.log(code);
        if (obj[code]) {
          obj[code].push(city);
        } else {
          obj[code] = [city];
        }
      });
      return obj;
    },
  },
  created() {
    this.$store.commit("hideNavbar");
    this.$store.commit("hideTabbar");

    if (localStorage.cities) {
      // 存在
      this.cities = JSON.parse(localStorage.cities);
    } else {
      // 不存在   发起网络请求
      http.getCityList().then((res) => {
        this.cities = res.data.cts;
        //   console.log(this.cities)
        localStorage.cities = JSON.stringify(res.data.cts);
      });
    }
  },
  destroyed() {
    this.$store.commit("showNavbar");
    this.$store.commit("showTabbar");
  },
};
</script>


<style scoped lang="less">
* {
  box-sizing: border-box;
}
.type {
  height: 30px;
  line-height: 30px;
  text-indent: 2rem;
  background-color: #ebebeb;
}
.city {
  width: 90%;
  height: 45px;
  line-height: 45px;
  margin: 0 auto;
  border-bottom: 1px solid lightgray;
}
.hotcity {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  p{
      width: 8rem;
      height: 3rem;
      line-height: 3rem;
      text-align: center;
      margin: 1rem;
      margin-left: 0;
      background-color: #eee;
  }
}

aside {
  position: fixed;
  right: 5px;
  width: 30px;
  top: 0;
  height: 100vh;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  justify-content: space-around;
  a {
    width: 100%;
    display: block;
    text-align: center;
    line-height: 2.2rem;
    color: #666;
    margin-left: 0;
  }
}
</style>