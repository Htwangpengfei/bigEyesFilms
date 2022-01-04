import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:{
      id:1,
      nm:"北京"
    },
    isNavbar:true,
    isTabbar:true,
    navbar: {
      isLeft: false,
      title: "大眼电影",
      isRight: true,
    }
  },
  mutations: {
    hideTabbar(state){
      state.isTabbar=false;
    },
    hideNavbar(state){
      state.isNavbar=false;
    },
    showTabbar(state){
      state.isTabbar=true;
    },
    showNavbar(state){
      state.isNavbar=true;
    },
    showMine(state,obj){
        state.navbar.isLeft=obj.isLeft;
        state.navbar.isRight=obj.isRight;
        state.navbar.title=obj.title;
    },
    changeCity(state,city){
      state.city.id=city.id;
      state.city.nm=city.nm;
    }
  },
  actions: {},
  modules: {}
})