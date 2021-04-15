<template>
  <div class="gouwce">
    <van-checkbox
      v-model="numt"
      class="fuxiankuang"
      icon-size="20px"
      checked-color="#ee0a24"
    >
      <span>JD 京东自营</span></van-checkbox
    >
    <div class="xunahuan" v-for="(v, i) in products" :key="v._id">
      <p class="qian">
        <span class="manjian">满减</span>
        <span class="zhengpin"> 满599，即可领取赠品</span> <em>去凑单></em>
      </p>
      <van-card
        :price="v.price.toFixed(2)"
        desc="描述信息"
        :title="v.name"
        :thumb="v.coverImg"
      >
        <template #tags>
          <van-tag plain type="danger">商品优惠</van-tag><br />
          <van-tag plain type="danger">附带赠品</van-tag>
        </template>
        <template #footer>
          <span
            class="jia"
            @click="v.quantity = v.quantity == 1 ? 1 : v.quantity - 1"
            >-</span
          >
          <input type="text" class="span" :value="v.quantity" size="mini" />
          <span class="jian" @click="v.quantity++">+</span>
          <p class="sahncu" @click="shancu(v._id, i)">删除</p>
          <van-checkbox
            class="danxuan"
            v-model="v.onSale"
            icon-size="20px"
            checked-color="#ee0a24"
          ></van-checkbox>
        </template>
      </van-card>
    </div>
    <!-- 下面 -->
    <van-submit-bar
      :price="sumPrice * 10"
      :button-text="'去结算' + '(' + (totals / 10) * num + ')'"
    >
      <van-checkbox v-model="numt" checked-color="#ee0a24">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      num: 1,
      checked: true,
      products: [
        {
          onSale: false,
          quantity: 10,
          price: 49,
          checked: false,
          _id: "603c6562adb1ac0b18bf59d9",
          name: "黛庄柔雾滋润双效口红笔",
          coverImg:
            "https://img.youpin.mi-img.com/shopmain/a1ace911f643eb476250ef14dd843ea4.jpg",
          __v: 0,
          createdAt: "2021-03-01T03:54:10.279Z",
          updatedAt: "2021-03-01T03:54:10.279Z",
        },
        {
          onSale: false,
          quantity: 10,
          price: 559,
          checked: false,
          _id: "603c6562adb1ac0b18bf59da",
          name: "LAMER 海蓝之谜唇彩精华保湿修护淡化唇纹",
          coverImg:
            "https://img.youpin.mi-img.com/shopmain/03e949ead93b7a810f4d0db7e68bf5cd.jpg",
          __v: 0,
          createdAt: "2021-03-01T03:54:10.279Z",
          updatedAt: "2021-03-01T03:54:10.279Z",
        },
        {
          onSale: false,
          quantity: 10,
          price: 189,
          checked: false,
          _id: "603c6562adb1ac0b18bf59d4",
          name: "HOURGLASS 黄金烟管口红唇膏笔 烟管口红",
          coverImg:
            "https://img.youpin.mi-img.com/shopmain/0f50465188770cf0f43893952eb0e0f8.jpg",
          __v: 0,
          createdAt: "2021-03-01T03:54:10.278Z",
          updatedAt: "2021-03-01T03:54:10.278Z",
        },
        {
          onSale: false,
          quantity: 10,
          price: 139,
          checked: false,
          _id: "603c6562adb1ac0b18bf59d5",
          name: "兰瑟丝柔/丝绒锁色唇膏",
          coverImg:
            "https://img.youpin.mi-img.com/shopmain/e0974b8a770f4c2c67ec7aa0841bd8c5.jpg",
          __v: 0,
          createdAt: "2021-03-01T03:54:10.278Z",
          updatedAt: "2021-03-01T03:54:10.278Z",
        },
        {
          onSale: false,
          quantity: 10,
          price: 69,
          checked: false,
          _id: "603c6562adb1ac0b18bf59d6",
          name: "黛庄轻柔丝缎哑光唇釉套盒",
          coverImg:
            "https://img.youpin.mi-img.com/shopmain/a2a7fd311dc9609cb86d68cc3701387c.jpg",
          __v: 0,
          createdAt: "2021-03-01T03:54:10.278Z",
          updatedAt: "2021-03-01T03:54:10.278Z",
        },
        {
          onSale: false,
          quantity: 10,
          price: 169,
          checked: false,
          _id: "603c6562adb1ac0b18bf59d7",
          name: "润百颜故宫口红3.2g/支",
          coverImg:
            "https://img.youpin.mi-img.com/shopmain/c6e8c1e50f87f790f09d0af911cd55d6.jpg",
          __v: 0,
          createdAt: "2021-03-01T03:54:10.278Z",
          updatedAt: "2021-03-01T03:54:10.278Z",
        },
      ],
    };
  },

  // methods: {
  //   shancu(id, i) {
  //     var r = confirm("按下按钮!");
  //     console.log(i);
  //     if (r == true) {
  //       this.products.forEach((v, index) => {
  //         console.log(v._id);
  //         if (v._id == id) {
  //           this.products.splice(index, 1);
  //         }
  //       });
  //     } else {
  //       console.log("cuo");

  //       console.log(1);
  //     }
  //   },
  // },
  methods: {
    shancu(id) {
      // 点击删除弹出  可进行确认与取消操作
      Dialog.confirm({
        message: "确认删除此商品",
      })
        .then(() => {
          // on confirm
          console.log("点击确认");
          this.products.forEach((v, i) => {
            console.log(v._id);
            if (v._id == id) {
              this.products.splice(i, 1);
            }
          });
        })
        .catch(() => {
          // on cancel
          console.log("点击取消");
        });
    },
  },
  computed: {
    numt: {
      get() {
        return (
          this.products.length === this.products.filter((v) => v.onSale).length
        );
      },
      set(v) {
        this.products.forEach((element) => (element.onSale = v));
      },
    },
    totals() {
      //总数量
      return this.products
        .filter((v) => v.onSale)
        .reduce((pre, cur) => pre + cur.quantity * 10, 0);
    },
    sumPrice() {
      //总价
      return this.products
        .filter((v) => v.onSale)
        .reduce((pre, cur) => pre + cur.quantity * 10 * cur.price, 0);
    },
  },

  created() {},
  mounted() {},
};
</script>
<style>
.gouwce {
  padding-bottom: 6.613333rem;
  background-color: #fff;
  margin-top: 0.733333rem;
  overflow: hidden;
  border-radius: 0.766667rem 0.766667rem 0 0;
}
.span {
  width: 2rem;
  height: 0.7rem;
  border: none;
  background: rgb(228, 227, 227);
  display: inline-block;
  text-align: center;
  color: #000;
}
.jia {
  display: inline-block;
  font-size: 1.266667rem;
  border: none;
  margin-right: 0.333333rem;

  margin-top: 0.133333rem;
}
.jian {
  display: inline-block;
  font-size: 1.266667rem;

  margin-left: 0.133333rem;

  border: none;
  font-weight: 700;
  line-height: 0.9rem;
  height: 0.9rem;
}
.sahncu {
  margin-top: 0.533333rem;
  margin-right: 0.333333rem;
}
.fuxiankuang {
  margin-top: 1rem;
  margin-left: 1.3rem;
}
.fuxiankuang span {
  font-size: 0.766667rem;
  font-weight: 700;
  color: rgb(94, 92, 92);
}
.van-card__header {
  margin-left: 1.733333rem;
}
.qian {
  margin-top: 1.666667rem;
  margin-left: 3rem;
  font-size: 0.8rem;
}
.qian .manjian {
  color: #fff;
  display: inline-block;
  width: 2rem;
  height: 0.9rem;
  line-height: 0.9rem;
  text-align: center;
  border-radius: 0.166667rem;
  background: #f2170c;
}
.qian .zhengpin {
  font-weight: 700;
}
.qian em {
  float: right;
  margin-right: 1.4rem;
}
.danxuan {
  position: absolute;
  top: 2.133333rem;
  left: 1.133333rem;
}

.van-submit-bar {
  margin-bottom: 3.1rem;
  background: hsla(0, 0%, 100%, 0.95);
  box-shadow: 0px 0px 9px #b9b8b8;
}
</style>