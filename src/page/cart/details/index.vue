<template>
  <div class="daohang">
    <Navbar style="text-align: center">
      <p slot="left"><van-icon name="arrow-left" @click="tiao" /></p>
      <p slot="center" class="zong">购物车</p>
      <p slot="right" @click="m = !m">
        <van-icon name="ellipsis" class="daohang">
          <div class="shouye" v-show="m">
            <ul>
              <router-view></router-view>

              <router-link :to="{ name: 'Home' }">
                <li>
                  <van-icon name="home-o" /><span>首页</span>
                </li></router-link
              >

              <router-link :to="{ name: 'Classify' }"
                ><li>
                  <van-icon name="search" /><span>分类搜索</span>
                </li></router-link
              >

              <router-link :to="{ name: 'Cart' }"
                ><li>
                  <van-icon name="cart-o" /><span>购物车</span>
                </li></router-link
              >

              <router-link :to="{ name: 'Mine' }"
                ><li>
                  <van-icon name="friends-o" /><span>我的京东</span>
                </li></router-link
              >
              <router-link :to="{ name: 'Home' }"
                ><li>
                  <van-icon name="star-o" /><span style="border-bottom: 0"
                    >浏览记录</span
                  >
                </li></router-link
              >
            </ul>
          </div></van-icon
        >
      </p>
    </Navbar>
    <van-cell is-link @click="showPopup">展示弹出层 </van-cell>
    <van-popup
      v-model="show"
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '70%' }"
    >
      <h1 class="xuanzhedizi">选择地址</h1>
      <!-- <van-area
  title="标题"
  :area-list="areaList"
  :columns-placeholder="['请选择', '请选择', '请选择']"
/> -->
    </van-popup>
  </div>
</template>

<script>
import Navbar from "../../../components/navbar/nav-bar";
// import { areaList } from "@vant/area-data";
export default {
  methods: {
    showPopup() {
      this.show = true;
    },
    tiao() {
      this.$router.push({ name: "Home" });
    },
 
  },
  
  components: { Navbar },
  data() {
    return {
      m: false,
      show: false,       
    };
  },
 
};
</script>

<style >
.daohang {
  background: #fff;
}
.zong {
  text-align: center;
}

.daohang {
  position: relative;
}
.shouye {
  position: absolute;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.8);
  top: 2rem;
  border-radius: 0.533333rem;
  width: 7.666667rem;
  right: 0;
}
.shouye ul li {
  display: flex;
  line-height: 2.4rem;
  justify-content: space-between;
}

.shouye ul li span {
  color: #fff;
  display: inline-block;
  width: 5.333333rem;
  text-align: left;
  line-height: 2.4rem;
  border-bottom: 0.013333rem solid #ccc;
}
.shouye ul li .van-icon {
  color: #fff;
  line-height: 2.4rem;
  margin-left: 0.533333rem;
}
.xuanzhedizi {
  text-align: center;
  margin-top: 0.266667rem;
  font-weight: 700;
}
</style>
