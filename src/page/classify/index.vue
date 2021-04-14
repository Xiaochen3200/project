<template>
  <div class="classify">
    <van-sticky>
      <nav-bar style="background:white;" >
        <van-icon slot="left" name="arrow-left" />
        <sear-che slot="center"></sear-che>
      </nav-bar>
    </van-sticky>
    <section class="content">
        <div id="categoryBody" class="category-viewport category-categoryNewUi">
          <div id="rootList" class="jd-category-tab">
            <div style="overflow-y:auto;height: 475px;" id="category3">
              <side-bar v-bind:bigbox="shoping"></side-bar>
            </div>
          </div>
          <div class="jd-category-content">
            <div id="branchScroll" style="overflow:hidden;" class="jd-category-content-wrapper">
              <div id="branchList" style="overflow-y: auto;height: 475px;">
                <grid-item v-bind:bigbox="shoping"></grid-item>
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import SideBar from "../../components/sidebar/SideBar"
import GridItem from "../../components/grid/GridItem"
import NavBar from "../../components/navbar/nav-bar"
import SearChe from "../../components/searche/SearChe"
import { reqClssfiy } from "../../api/classfiy"
export default {
  components: {NavBar,SearChe,GridItem,SideBar},
  data() {
    return {
      shoping:[],
      page:11,
      per:500
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    async reqClssfiy() {
      console.log(1);
      const result = await reqClssfiy(
        {
          per:this.per,
          // page:this.page
        }
      );
      // console.log(result);
      this.shoping = result.data.products;
      // console.log(this.shoping);
    }
  },
  created(){
    this.reqClssfiy()
  }
};
</script>
<style scoped>
  .content {
    display: flex;
    }
  .main{
    flex: 1;
    overflow-y: auto;
  }
  .van-search{
    height: 44px;
  }
  .category-viewport {
    height: auto;
    min-height: 100%;
  }
  .category-categoryNewUi .jd-category-tab {
    width: 86px;
    background: #f8f8f8;
  }
  .jd-category-tab {
    float: left;
    min-width: 76px;
    width: 76px;
    height: auto;
    overflow-y: auto;
    min-height: 100%;
  }
  .category-categoryNewUi .jd-category-content {
    background-color: #fff;
  }
  .jd-category-content {
    height: auto;
    min-height: 100%;
    width: 100%;
    font-size: 12px;
    color: #252525;
    background-color: #f3f5f7;
  }
  .category-categoryNewUi .jd-category-tab {
    width: 86px;
    background: #f8f8f8;
  }
  .jd-category-tab {
    float: left;
    min-width: 76px;
    width: 76px;
    height: auto;
    overflow-y: auto;
    min-height: 100%;
  } 
  .category-viewport li, .category-viewport ul {
    display: block;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .jd-category-content {
    height: auto;
    min-height: 100%;
    width: 100%;
    font-size: 12px;
    color: #252525;
    background-color: #f3f5f7;
  }

</style>

