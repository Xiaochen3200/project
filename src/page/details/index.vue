<template>
  <div class="details">
    <Navbar>
      <van-icon
        name="arrow-left"
        color="#666"
        size="25"
        slot="left"
        @click="goHome"
      />
      <div class="center" slot="center">
        <span>商品</span>
        <span>评价</span>
        <span>详情</span>
        <span>推荐</span>
      </div>
      <van-icon name="ellipsis" color="#666" slot="right" size="30" />
    </Navbar>
    <div class="mod_slider_s1" v-if="obj">
      <img :src="obj.coverImg" alt="" class="po" />
    </div>
    <div class="detail_decoration bg_seckill" id="priceSpec" style="">
      <div class="content">
        <div class="price">
          <div class="price_wrap">
            <div id="specPrice">
              ¥<em>{{ obj.price }}</em
              ><span class="price_decimals">.00</span>
            </div>
          </div>
          <del class="old_price" id="specOldPrice" style=""
            >¥{{ obj.price + 2000 }}</del
          >
        </div>
        <div class="countdown" id="specTimer" style="">
          <p class="countdown_text">距结束还剩</p>
          <p class="countdown_nums" id="timeLimit">
            <span class="box">02</span>:<span class="box">51</span>:<span
              class="box"
              >57</span
            >
          </p>
        </div>
      </div>
    </div>
    <!-- 收藏 -->
    <div class="buy_area new_ver" id="buyArea">
      <div id="priceWrap">
        <div class="price_wrap" id="priceBlock" style="display: none;">
          <span id="doublePrice">
            <span
              class="old_price"
              id="priceLineThrough"
              style="display:none;"
            ></span>
            <span class="mod_reunion_price" style="display:none;"></span
            ><i class="tip_info reunion_tip_info" style="display: none;"></i>
          </span>
        </div>
      </div>
      <div class="bipin_notice" id="noticeQdxc" style="display: none;"></div>
      <div class="fn_wrap">
        <h1 class="fn fn_goods_desc" id="aboveTitleTag" style="display:none;">
          <div class="fn_text_wrap"></div>
        </h1>
        <h1 class="fn fn_goods_name fgn_old env_m" id="favWrap">
          <div class="fn_text_wrap " id="itemName" ptag="7001.1.163">
            {{ obj.name }}
          </div>
          <a
            class="J_ping favour"
            href="javascript:void(0)"
            pppptag="7001.1.22"
            id="fav"
            report-eventid="MProductdetail_AddtoFollowed"
            report-eventparam="67237240608"
            report-pageparam="67237240608"
            >收藏</a
          >
        </h1>
        <div
          class="market-benefit"
          id="marketBenefit"
          style="display: none;"
        ></div>

        <div
          class="book_desc"
          id="actTitleDesc"
          style="display:none"
          ptag="7001.1.50"
        ></div>
      </div>
    </div>
    <div class="joinCart">
      <van-goods-action>
        <van-goods-action-icon icon="shop-o" text="店铺" dot />
        <van-goods-action-icon icon="chat-o" text="客服" badge="" />
        <van-goods-action-icon icon="shopping-cart-o" text="购物车" badge="" />
        <van-goods-action-button
          type="warning"
          text="加入购物车"
          @click="onClickButton(obj._id, obj.quantity / 10)"
        />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/navbar/nav-bar";
import { reqProductDetail } from "../../api/products";
// import { reqAddCart } from "../../api/cart";
// import { isLogined } from "../../utils/utils";

export default {
  components: { Navbar },
  data() {
    return {
      obj: {},
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    goHome() {
      this.$router.push("/");
    },
    async getDetail(id) {
      const result = await reqProductDetail(id);

      if (result.status === 200) {
        this.obj = result.data;
        console.log(this.obj);
      }
    },
    // 加入购物车
    // async onClickButton(id, quantity) {
    //   // 判断是否登录
    //   if (isLogined()) {
    //     console.log(id, quantity);
    //     // 如果登录调用购物车接口
    //     const result = await reqAddCart(id, quantity);
    //     console.log(result);
    //     if (result.status === 200) {
    //       this.$router.push("/cart");
    //     }
    //   } else {
    //     // 如果没有登录,跳转到登录页登录
    //     this.$router.replace("/login");
    //   }
    // },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    const id = this.$route.query.id;
    this.getDetail(id);
    // this.goCart();
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
.details {
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
}
.van-icon-arrow-left {
  display: block;
  text-align: center;
  line-height: 44px;
}
.center {
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
}
.van-icon-ellipsis {
  display: block;
  font-size: 20px;
  text-align: center;
  line-height: 44px;
}
.mod_slider_s1 {
  width: 100%;
  height: 350px;
  background: chartreuse;
}
.po {
  width: 100%;
  height: 350px;
}
.detail_decoration.bg_seckill {
  background: url(https://img12.360buyimg.com/img/s750x100_jfs/t1/120126/2/5105/50979/5ee98c8fE89e0c5e7/62ae747801d915b8.png);
  background-size: cover;
}
.detail_decoration.bg_flash,
.detail_decoration.bg_seckill,
.detail_decoration.bg_subscribe,
.detail_decoration.bg_subscribe_appzx {
  width: 100%;
  height: 0;
  padding-top: 13.3333%;
  overflow: hidden;
  background: url(https://img12.360buyimg.com/img/s750x100_jfs/t1/119650/20/7754/47352/5ed632eaE8b4d8095/1e2456ef7139c95f.png);
  background-size: cover;
}

.detail_decoration {
  position: relative;
  z-index: 5;
}
.detail_decoration.bg_flash .content,
.detail_decoration.bg_seckill .content,
.detail_decoration.bg_subscribe .content,
.detail_decoration.bg_subscribe_appzx .content {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.detail_decoration.bg_flash .price,
.detail_decoration.bg_seckill .price,
.detail_decoration.bg_subscribe .price,
.detail_decoration.bg_subscribe_appzx .price {
  line-height: 1;
  color: #fff;
  margin: 0 6px 0 18px;
}
.detail_decoration .price {
  margin: 0 10px;
  font-size: 16px;
  font-family: JDZH-Regular;
}

.detail_decoration.bg_flash .countdown,
.detail_decoration.bg_seckill .countdown,
.detail_decoration.bg_subscribe .countdown,
.detail_decoration.bg_subscribe_appzx .countdown {
  width: 28.8%;
  background-color: transparent;
  color: #ff1450;
}
.detail_decoration .countdown {
  position: absolute;
  right: 0;
  top: 0;
  width: 116px;
  height: 100%;
  text-align: center;
  background-color: #f7f7f7;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.detail_decoration.bg_flash .countdown .countdown_text,
.detail_decoration.bg_seckill .countdown .countdown_text,
.detail_decoration.bg_subscribe .countdown .countdown_text,
.detail_decoration.bg_subscribe_appzx .countdown .countdown_text {
  color: #ff1450;
  line-height: 1;
  margin-bottom: 6px;
}
.detail_decoration .countdown .countdown_text {
  margin-bottom: 2px;
  font-size: 10px;
  color: #333;
}
/* 收藏 */

.buy_area .fn_wrap,
.shop_info_wrap {
  padding: 15px 10px;
  overflow: hidden;
}

.buy_area .fn_wrap .fn {
  position: relative;
  color: #262626;
  overflow: hidden;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
}
.buy_area.new_ver .fn_wrap .fn.fn_goods_name.fgn_old.env_m {
  padding-right: 52px;
}

.buy_area.new_ver .fn_wrap .fn.fn_goods_name {
  font-weight: 700;
  line-height: 21px;
  padding-right: 0;
}

.buy_area .fn_wrap .fn .favour {
  position: absolute;
  right: 0;
  top: 0;
  display: inline-block;
  padding-top: 26px;
  margin-right: -10px;
  line-height: 1em;
  height: 10px;
  width: 50px;
  font-size: 10px;
  color: #333;
  text-align: center;
}
.buy_area .fn_wrap .fn .favour:after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
  width: 18px;
  height: 18px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURUdwTCYmJikpKScnJywsLCYmJiYmJiYmJiYmJiYmJiYmJjAwMCcnJycnJyYmJiYmJiYmJiYmJiYmJgGRkRsAAAASdFJOUwC1I1wYyDP364bhDkZOl2+rngTqsMwAAAERSURBVDjLxZTZEoMwCEXJJmBiUvP/H1twGpeOxcfy4BhzvFwICvCPmDgRUuLpdrlFdH2E8wD+tIy7zNyPwGXB03L+iBV96IKPMbzG3ivE6IMqYlEmU+80kpdNdC4jh+5luVnl4Z4ZciWq+XArL60Cy5vld9lFtidgMWA1R2wypN6DBYXeE4i1aEFRrAM+Q6hK3oK8KomnxYIW9STVVQuqWp30abYg0j7p9T4fI3+KA82XbiGUsiQdqUTEH+ciB3KxNucnSGelPkF6PL19eT4mlY+Tvto6DzCOhNL2yyzcKW0D2Nn0pJRqJW9DkLdvbfUmBNA2H06+peCo7R3/nhx3LYmRb/8IO8bmsLZElJqHf8YbVWQUJtFZYp0AAAAASUVORK5CYII=);
  background-size: 100%;
}
.joinCart {
  width: 100%;
  height: 44px;
  background: #ff1450;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
