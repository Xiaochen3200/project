<template>
  <!-- 地址管理 -->
  <div class="site">
    <!-- 顶部 -->
    <van-nav-bar
      title="收货地址"
      left-text="返回"
      right-text="  "
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
    />
  </div>
</template>
<script>
import { Toast } from "vant";
// import { post } from "../../utils/request";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    onClickLeft() {
      // this.$router.go(-1);
      this.$router.push("/mine");
    },
    onAdd() {
      // Toast("新增地址");
      this.$router.push("/addsite");
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
  },
  // async created() {
  //   let res = post("/api1/v1/auth/reg", { username: "user", password: 123 });
  //   console.log(res);
  // },
  mounted() {},
  beforeDestroy() {},
};
</script>
<style lang="scss" scoped></style>
