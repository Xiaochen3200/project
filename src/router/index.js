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
    {
      path: "/details",
      name: "Details",
      component: () => import("../page/details"),
    },

    // ---------------------以上为主路由，请勿操作--------------------------

    //我的跳转待付款
    {
      path: "/orders",
      name: "Orders",
      component: () => import("../page/mine/orders.vue"),
    },
    //我的跳转地址管理
    {
      path: "/site",
      name: "Site",
      component: () => import("../page/mine/site.vue"),
    },
    //我的跳转售后管理
    {
      path: "/sale",
      name: "Sale",
      component: () => import("../page/mine/sale.vue"),
    },
    //我的跳转账户设置
    {
      path: "/install",
      name: "Install",
      component: () => import("../page/mine/install.vue"),
    },
    //我的跳转添加地址
    {
      path: "/addsite",
      name: "Addsite",
      component: () => import("../page/mine/addsite.vue"),
    },
  ],

  linkActiveClass: "active",
});
export default routre;
