<template>
  <div class="secondsearch">
    <Navbar>
      <van-icon
        name="arrow-left"
        color="#1989fa"
        size="30"
        slot="left"
        @click="goBack"
      />
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        slot="center"
        shape="round"
      />

      <van-button type="primary" :to="{ name: 'Login' }" slot="right" block
        >搜索</van-button
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
    goBack() {
      this.$router.push({ name: "Home" });
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
.nav-bar {
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.van-search {
  height: 44px;
}
.van-icon-arrow-left {
  display: block;
  text-align: center;
  line-height: 44px;
}
.van-button--normal {
  border: none;
  background: #fff;
  color: #333;
  font-size: 15px;
}
</style>
