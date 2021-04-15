<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#666">
      <van-swipe-item v-for="item in swipers" :key="item._id">
        <img :src="item.coverImg" alt="" class="po" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { reqSwiper } from "../../../api/swiper";
export default {
  components: {},
  data() {
    return {
      swipers: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    async getSwiper() {
      console.log(1);
      const result = await reqSwiper();
      console.log(result);
      this.swipers = result.data.products;
    },
  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getSwiper();
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
.swiper {
  width: 100%;
  height: 200px;
  background: #ccc;
  border-radius: 10px;
}
.van-swipe-item {
  width: 100px;
  height: 200px;
  background-color: #39a9ed;
}
.po {
  width: 100%;
  height: 165px;
  border-radius: 10px;
}
</style>
