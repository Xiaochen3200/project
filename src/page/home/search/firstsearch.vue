<template>
  <div class="firstsearch">
    <Navbar>
      <van-icon
        name="wap-nav"
        color="#1989fa"
        size="35"
        slot="left"
        @click="fenlei"
      />
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        slot="center"
        shape="round"
        @focus="secondsearch"
      />

      <van-button
        type="primary"
        class="gologin"
        @click="gologin"
        slot="right"
        block
        >{{ z }}</van-button
      >
    </Navbar>
  </div>
</template>

<script>
import Navbar from "../../../components/navbar/nav-bar";
import { getToken } from "../../../utils/utils";

export default {
  components: { Navbar },
  data() {
    return { token: "", value: "", z: "登录" };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    secondsearch() {
      this.$router.push({ name: "Secondsearch" });
    },
    fenlei() {
      this.$router.push({ name: "Fenlei" });
    },
    gologin() {
      // console.log(this.token);
      if (this.token) {
        this.$router.push("/mine");
      } else {
        this.$router.push("/login");
      }
    },

    async get() {
      const token = await getToken();
      // console.log(token);
      this.token = token;
      // console.log(this.token);
      if (token) {
        this.z = "已登录";
        this.disabled = false;
      } else {
        this.z = "登录";
        this.disabled = true;
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.get();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.firstsearch {
  width: 100%;

  /* height: 130px; */
  background: red;
  /* border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
}
.nav-bar {
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.van-search {
  height: 44px;
  background: red;
}
.van-icon-wap-nav {
  display: block;
  text-align: center;
  line-height: 44px;
}
.van-button--normal {
  border: none;
  background: red;
  color: #333;
  font-size: 15px;
  padding: 1px 1px;
}
</style>
