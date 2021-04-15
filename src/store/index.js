import Vue from "vue";
import Vuex from "vuex";
//挂载Vuex
Vue.use(Vuex);
import state from "./state";
import mutations from "./mutations";

//创建VueX对象
const store = new Vuex.Store({
  state,
  mutations,
});

export default store;
