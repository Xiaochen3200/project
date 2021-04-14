import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const routre = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/reg",
      name: "Reg",
      component: () => import("../page/reg"),
      meta: {
        isShow: true,
      },
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../page/login"),
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("../page/home"),
    },
    {
      path: "/classify",
      name: "Classify",
      component: () => import("../page/classify"),
    },
    {
      path: "/jingxi",
      name: "Jingxi",
      component: () => import("../page/jingxi"),
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("../page/cart"),
    },

    {
      path: "/mine",
      name: "Mine",
      component: () => import("../page/mine"),
    },
    {
      path: "/secondsearch",
      name: "Secondsearch",
      component: () => import("../page/home/search/secondsearch"),
    },

    // ---------------------以上为主路由，请勿操作--------------------------
  ],

  linkActiveClass: "active",
});
export default routre;
