<template>
  <div class="footer">
    <van-tabbar v-model="$store.state.active">
      <van-tabbar-item icon="home-o" :to="{ name: 'Home' }"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="apps-o" :to="{ name: 'Classify' }"
        >分类</van-tabbar-item
      >
      <van-tabbar-item icon="flower-o" :to="{ name: 'Jingxi' }"
        >京喜</van-tabbar-item
      >
      <van-tabbar-item icon="shopping-cart-o" :to="{ name: 'Cart' }"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="manager-o" :to="{ name: 'Mine' }"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return { active: 0 };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log(this.$store.state.active);
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
.footer {
  width: 100%;
  height: 40px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
}

/* .footer ul {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.footer ul li {
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.footer ul li.active {
  color: #fff;
  background: red;
} */
</style>
