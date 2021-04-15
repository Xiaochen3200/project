<template>
  <div class="home">
    <Firstearch></Firstearch>
    <!-- 轮播图 -->
    <Swiper></Swiper>
    <!-- 广告 -->
    <Advertising></Advertising>
    <!-- 商品分类 -->
    <Productclassify></Productclassify>
    <!-- 京东秒杀 -->
    <Seckill></Seckill>
    <!-- 潮流音乐 -->
    <Learn></Learn>
  </div>
</template>

<script>
import Firstearch from "../home/search/firstsearch";
import Swiper from "../home/swiper/index";
import Productclassify from "../home/productclassify/index";
import Seckill from "../home/seckill/index";
import Advertising from "../home/advertising/index";
import Learn from "../home/learn/index";
export default {
  components: {
    Firstearch,
    Swiper,
    Advertising,
    Productclassify,
    Seckill,
    Learn,
  },
  data() {
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {},
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
<style scoped></style>
