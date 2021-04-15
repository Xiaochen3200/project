<template>
  <!-- 我的 -->
  <div class="mine">
    <div class="big-box">
      <!-- 我的京东 -->
      <van-nav-bar
        title="我的京东"
        left-text="返回"
        right-text="  "
        left-arrow
        @click-left="onClickLeft"
      />
      <!-- 用户信息 -->
      <div class="nav-deng">
        <!-- 头像 -->
        <div class="photo">
          <img
            src="http://img.duoziwang.com/2018/19/07111648929270.jpg"
            alt=""
          />
        </div>
        <div id="id-credit">
          <p>{{ username }}</p>
        </div>
        <div class="sett" @click="seett">
          <van-icon name="setting-o" />
        </div>
        <!--  用户收藏足迹 -->
        <div class="show" id="account-collect">
          <van-row>
            <van-col span="8"
              ><p>0</p>
              <span>商品收藏</span></van-col
            >
            <van-col span="8"
              ><p>0</p>
              <span>店铺收藏</span></van-col
            >
            <van-col span="8"
              ><p>2</p>
              <span>我的足迹</span></van-col
            >
          </van-row>
          <!-- <ul>
            <li @click="collect"><span>1 </span>商品收藏</li>
            <li><span>0 </span>店铺收藏</li>
            <li @click="footprint"><span>7 </span>我的足迹</li>
          </ul> -->
        </div>
      </div>
      <!-- vip -->
      <div class="show" id="account-member">
        <ul>
          <span class="fa fa-won"> PLUS</span>
          <span>免费试用 立即领1张运费券</span>
          <button>0元试用 <span class="fa fa-caret-right"></span></button>
        </ul>
      </div>
    </div>
    <!-- 订单 -->
    <van-grid class="navone" :border="false">
      <van-grid-item icon="credit-pay" text="待付款" @click="daifu" />
      <van-grid-item icon="send-gift-o" text="待收货" @click="daishou" />
      <van-grid-item icon="refund-o" text="退还/售后" @click="tuihuan" />
      <van-grid-item
        class="a"
        icon="balance-list-o"
        text="全部订单"
        @click="quanbu"
      />
    </van-grid>
    <!-- 资产 -->
    <van-grid :border="false" :column-num="5" class="nav-two">
      <van-grid-item>
        <strong>0</strong>
        <p>优惠券</p>
      </van-grid-item>
      <van-grid-item>
        <p><strong>开通有礼</strong></p>
        <p>白条</p>
      </van-grid-item>
      <van-grid-item>
        <strong>0</strong>
        <p>京豆</p>
      </van-grid-item>
      <van-grid-item>
        <strong>0</strong>
        <p>红包</p>
      </van-grid-item>
      <van-grid-item icon="balance-pay" text="我的资产" class="a" />
    </van-grid>
    <!-- 工具 -->
    <div class="tool">
      <van-grid class="navthree" :border="false">
        <van-grid-item
          icon="manager"
          text="客户服务"
          style="color:rgb(91, 178, 242);"
        />
        <van-grid-item class="a" icon="refund-o" text="我的预约" />
        <van-grid-item icon="comment" text="我的问答" style="color:blue" />
        <van-grid-item icon="gold-coin" text="闲置换钱" style="color:yellow" />
        <van-grid-item icon="good-job" text="高价回收" style="color:green" />
        <van-grid-item icon="fire" text="定期购" style="color:orange" />
      </van-grid>
    </div>
  </div>
</template>

<script>
import { getToken } from "../../utils/utils";
export default {
  components: {},
  data() {
    return {
      list: [],
      username: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.go(-1);
      console.log(this.$router.push());
    },
    daifu() {
      this.$router.push("/orders");
    },
    daishou() {
      if (this.$router.push("/orders")) {
        // index = 3;
      }
    },
    tuihuan() {
      this.$router.push("/sale");
    },
    quanbu() {
      this.$router.push("/orders");
    },
    seett() {
      this.$router.push("/install");
    },
    shou() {
      this.$router.push("/collect");
    },
    cang() {
      this.$router.push("/collect");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    getToken();
    const username = localStorage.getItem("username");
    console.log(username);
    console.log(this);
    this.username = username;

    // this.data
    // this.nicheng();
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
* {
  margin: 0;
  padding: 0;
}
html,
body,
.mine {
  width: 100%;
  height: 100%;
  font-size: 16px;
  background: rgb(240, 236, 236);
}
.mine .nav-deng {
  width: 100%;
  height: 200px;
  background-image: linear-gradient(#e66465, #9198e5);
  border-radius: 0 0 5% 5%;
  overflow: hidden;
  position: relative;
}
.mine .nav-deng .photo {
  width: 60px;
  height: 60px;
  margin-top: 20px;
  margin-left: 25px;
  border-radius: 50%;
  overflow: hidden;
}
.mine .nav-deng .photo img {
  width: 70px;
  height: 70px;
}
.navtwo {
  margin-top: 18px;
}
.a {
  color: red;
}
.mine #id-credit {
  position: absolute;
  width: 50%;
  top: 23px;
  left: 100px;
}
/*  用户收藏足迹 */
.mine #account-collect {
  width: 100%;
  height: 60px;
}
.mine #account-collect {
  margin-top: 20px;
}
.van-row {
  display: flex;
  text-align: center;
  font-size: 14px;
  color: #fff;
}
.van-row p {
  display: block;
  padding-bottom: 10px;
}

.sett {
  font-size: 23px;
  width: 20px;
  height: 20px;
  position: relative;
  float: right;
  top: -50px;
  right: 17px;
  color: #fff;
}

/* vip */
.mine #account-member {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  margin-top: -61px;
}
.mine #account-member ul {
  width: 90%;
  height: 50px;
  border-radius: 10px 10px 0px 0px;
  background-image: linear-gradient(
    to right,
    rgb(20, 19, 82),
    rgb(19, 97, 150)
  );
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 13px;
  color: rgb(235, 235, 53);
}
.mine #account-member ul button {
  width: 80px;
  height: 25px;
  border-radius: 15px;
  border: none;
  background: rgb(235, 235, 11);
  color: black;
}
.nav-two {
  position: relative;
  margin-top: 10px;
  /* background: chartreuse; */
  /* border-radius: 5%; */
}
.van-grid p {
  margin-top: 10px;
}
.tool {
  background-color: #fff;
  margin-top: 10px;
}
.van-grid p {
  font-size: 12px;
}
</style>
