<template>
  <div class="home">
    <Firstearch></Firstearch>
    <Swiper></Swiper>
  </div>
</template>

<script>
import Firstearch from "../home/search/firstsearch";
import Swiper from "../home/swiper/index";
export default {
  components: {
    Firstearch,
    Swiper,
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
