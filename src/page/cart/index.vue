<template>
  <div class="cart">
    <!-- 导航 -->
    <Details></Details>
    <!-- 地址 -->
    <!-- 购物车 -->
    <Goback/> 
  </div>
</template>

<script>
import Details from "../cart/details";
import Goback from "../cart/goback";
export default {
  components: { Details, Goback },
  name: "Cart",
  data() {
    return {};
  },
  created() {},
  mounted() {},
};
</script>
<style >
 html body{
  background: #f2f2f2;
}
</style>