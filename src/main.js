import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import "vant/lib/index.css";
import Vant, {
  Grid,
  GridItem,
  Col,
  Icon,
  Row,
  NavBar,
  Field,
  Tab,
  Tabs,
  Search,
  ActionSheet,
  AddressList,
  AddressEdit,
  Button,
  Divider,
} from "vant";
import store from "./store";

import Font from "../font/iconfont.css";

Vue.use(Divider);

Vue.use(Icon);

Vue.use(Field);
Vue.use([
  Tab,
  Tabs,
  Field,
  Search,
  ActionSheet,
  AddressList,
  AddressEdit,
  Button,
]);
Vue.use(Tabs);

Vue.use(Col);
Vue.use(Row);

Vue.use(Grid);
Vue.use(GridItem);

Vue.use(NavBar);

Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  Font,
  store,
}).$mount("#app");

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  const type = to.meta.type;
  // 判断该路由是否需要登录权限
  if (type === "/login") {
    if (window.localStorage.getItem("/login")) {
      next();
    } else {
      next("/login");
    }
  } else {
    next(); // 确保一定要有next()被调用
  }
});
