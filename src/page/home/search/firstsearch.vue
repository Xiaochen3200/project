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

      <van-button type="primary" :to="{ name: 'Login' }" slot="right" block
        >登录</van-button
      >
    </Navbar>
  </div>
</template>

<script>
import Navbar from "../../../components/navbar/nav-bar";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      value: "",
    };
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
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
  height: 44px;
  background: #ff4500;
}
.nav-bar {
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.van-search {
  height: 44px;
  background: #ff4500;
}
.van-icon-wap-nav {
  display: block;
  text-align: center;
  line-height: 44px;
}
.van-button--normal {
  border: none;
  background: #ff4500;
  color: #333;
  font-size: 15px;
}
</style>
