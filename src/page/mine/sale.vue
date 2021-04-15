<template>
  <!-- 退换/售后 -->
  <!-- 顶部 -->
  <div class="sale">
    <van-nav-bar
      title="退换/售后"
      left-text="返回"
      right-text="  "
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- <hr /> -->
    <!-- 导航 -->
    <van-tabs v-model="active">
      <van-tab title="售后申请">没有接口</van-tab>
      <van-tab title="处理中"></van-tab>
      <van-tab title="售后评价"></van-tab>
      <van-tab title="申请记录"></van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      active: 0,
    };
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
<style scoped></style>
