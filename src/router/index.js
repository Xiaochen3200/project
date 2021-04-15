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
      meta: {
        isShow: true,
      },
    },
    {
      path: "/classify",
      name: "Classify",
      component: () => import("../page/classify"),
      meta: {
        isShow: true,
      },
    },
    {
      path: "/jingxi",
      name: "Jingxi",
      component: () => import("../page/jingxi"),
      meta: {
        isShow: true,
      },
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("../page/cart"),
      meta: {
        isShow: true,
      },
    },

    {
      path: "/mine",
      name: "Mine",
      component: () => import("../page/mine"),
      meta: {
        isShow: true,
      },
    },
    {
      path: "/secondsearch",
      name: "Secondsearch",
      component: () => import("../page/home/search/secondsearch"),
    },

    // ---------------------以上为主路由，请勿操作--------------------------
    // 商品详情页路由
    {
      path: "/details",
      name: "Details",
      component: () => import("../page/details"),
    },
  ],

  linkActiveClass: "active",
});
export default routre;
