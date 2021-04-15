<template>
  <!-- 付款/收货 -->
  <!-- 顶部 -->
  <div class="order">
    <van-nav-bar
      title="我的订单"
      left-text="返回"
      right-text="  "
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- <van-cell-group>
      <van-field class="ipt" v-model="value" placeholder="搜索我的订单" />
      
    </van-cell-group> -->
    <!-- 搜索框 -->
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
    <!-- 导航 -->
    <van-tabs v-model="active">
      <van-tab title="全部">
        <van-card
          v-for="v in list"
          :key="v._id"
          :num="v.quantity"
          :price="v.price"
          :desc="v.descriptions"
          :title="v.name"
          :thumb="v.coverImg"
        />
      </van-tab>
      <van-tab title="待付款">
        <van-card
          v-for="v in list"
          :key="v._id"
          :price="v.price"
          :desc="v.descriptions"
          :title="v.name"
          :thumb="v.coverImg"
        />
      </van-tab>
      <van-tab title="待收货"></van-tab>
      <van-tab title="已完成"></van-tab>
    </van-tabs>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return { active: 1, value: "", list: [] };
  },
  computed: {},
  watch: {},
  methods: {
    onClickLeft() {
      // this.$router.go(-1);
      this.$router.push("/mine");
    },
    shuju() {
      axios
        .get("http://localhost:3009/api/v1/products", { params: { per: 15 } })
        .then((res) => {
          // console.log(res);
          this.list = res.data.products;
          console.log(this.list);
        });
    },
  },
  created() {
    this.shuju();
  },
  mounted() {},
  beforeDestroy() {},
};
</script>
<style scoped></style>
