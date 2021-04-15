<template>
  <div id="app">
    <Footer v-if="$route.meta.isShow"></Footer>
    <router-view></router-view>

  </div>
</template>

<script>
import Footer from "./components/footer/index";
export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style></style>
