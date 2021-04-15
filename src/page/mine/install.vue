<template>
  <!-- 账户设置 -->
  <div class="install">
    <!-- 顶部 -->
    <van-nav-bar
      title="账户设置"
      left-text="返回"
      right-text="  "
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell
      is-link
      title="收货地址管理"
      @click="show = true"
      :to="{ name: 'Site' }"
    />
    <van-cell is-link title="账户与安全" @click="show = true" class="aa" />
    <van-cell is-link title="京东支付密码" @click="show = true" />
    <van-cell is-link title="联系客服" @click="show = true" class="bb" />
    <van-cell is-link title="切换站点" @click="show = true" />
    <!-- <van-button round type="info">圆形按钮</van-button> -->
    <van-button type="primary" block color="red">退出登录</van-button>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    onClickLeft() {
      // this.$router.go(-1);
      this.$router.push("/mine");
    },
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
};
</script>
<style scoped>
.aa {
  margin-top: 20px;
}
.bb {
  margin-top: 20px;
}
.van-cell {
  font-size: 16px;
}
.van-button {
  margin-top: 15.75rem;
}
</style>
