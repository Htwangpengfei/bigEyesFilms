import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:{
      id:1,
      nm:"北京"
    },
    cinemaId: '1412992',
    isNavbar:true,
    isTabbar:true,
    navbar: {
      isLeft: false,
      title: "咕咕查电影",
      isRight: true,
    }
  },
  mutations: {
    getCinemaId(state, strId) {
      state.cinemaId = strId;
    },
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