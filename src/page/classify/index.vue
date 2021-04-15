<template>
  <div class="classify" style="height:auto">
    <van-sticky>
      <nav-bar style="background:white;" >
        <van-icon slot="left" name="arrow-left" @click="backclick" />
        <sear-che slot="center"></sear-che>
      </nav-bar>
    </van-sticky>
    <section class="content">
        <div id="categoryBody" class="category-viewport category-categoryNewUi">
          <div id="rootList" class="jd-category-tab">
            <div style="overflow-y:auto;height: 475px;" id="category3">
              <side-bar v-bind:shopingname="shopingname"  @vuelname="sideclick"></side-bar>
            </div>
          </div>
          <div class="jd-category-content">
            <div id="branchScroll" style="overflow-y:hidden;" class="jd-category-content-wrapper">
              <div id="branchList" style="overflow-y:auto;height:580px;">
                <grid-item v-bind:bigbox="shopingfenlei" :itemname="itemname"></grid-item>
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
      shopingname:[],
      shopingfenlei:[],
      per:500,
      itemname:"",
      styleheight:"",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    backclick(){

    },
    async reqClssfiy() {
      const result = await reqClssfiy(
        {
          per:this.per,
        }
      )
      let newArr={}
      result.data.products.forEach((v,i)=>{
        newArr[v.productCategory.name]= v.productCategory.name[i]
      })
      for(let i in newArr){
        this.shopingname.push(i)
      }
      this.shoping = result.data.products;
      let newname=[]
      this.shoping.forEach((v,)=>{
        // console.log(v.productCategory.name,i);
        if(v.productCategory.name=="口红"){
          newname.push(v)
        }
      })
      this.shopingfenlei=newname
    },
    sideclick(value){
      console.log("点击了"+value);
      this.itemname=value
      // console.log(this.shoping,value);
      let newname=[]
      this.shoping.forEach((v,)=>{
        // console.log(v.productCategory.name,i);
        if(v.productCategory.name===value){
          newname.push(v)
        }
      })
      this.shopingfenlei=newname
      console.log(this.shopingfenlei);
    }
  },
  created(){
    this.reqClssfiy()
  },
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
  .van-icon-arrow-left{
    display: block;
    text-align: center;
    line-height: 44px;
  }
</style>

