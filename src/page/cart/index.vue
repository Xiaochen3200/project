<template>
  <div class="cart">
    <!-- 导航 -->
    <Details></Details>
    <!-- 地址 -->
    <!-- 购物车 -->
    <Goback />
  </div>
</template>

<script>
import Details from "../cart/details";
import Goback from "../cart/goback";
import { mapMutations } from "vuex";
export default {
  components: { Details, Goback },
  name: "Cart",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    ...mapMutations(["changeActive"]),
  },
  created() {
    this.changeActive(3);
  },
};
</script>
<style>
html body {
  background: #f2f2f2;
}
</style>
