<template>
  <div class="seckill">
    <div class="floor seckill" floor_order="23">
      <div class="floor-the-container">
        <div class="floor-container">
          <div class="sec_kill_floor">
            <div class="title_wrap">
              <a
                data-event_id="MHome_BHandSeckillTopic"
                data-event_level="1"
                class="seckill-left-link j_more_sec_link"
                href="javascript:void(0);"
                jump-href="//wqs.jd.com/portal/wx/seckill_m/index.shtml"
              >
                <!--strong class="seckill-tit-txt">京东秒杀</strong-->
                <div class="seckill-tit-img">京东秒杀</div>
                <div class="seckill-timer-wrap">
                  <div class="seckill-nth j_sec_order">20</div>
                  <div id="seckill_time" class="seckill-timer">
                    <div class="seckill-time j_sk_h">01</div>
                    <span class="seckill-time-separator">:</span>
                    <div class="seckill-time j_sk_m">02</div>
                    <span class="seckill-time-separator">:</span>
                    <div class="seckill-time j_sk_s">48</div>
                  </div>
                </div>
                <span id="seckill_loading"></span>
              </a>
              <a
                data-event_id="MHome_BHandSeckillMore"
                data-event_level="1"
                class="seckill-more-link j_more_sec_link"
                href="javascript:void(0);"
                jump-href="//wqs.jd.com/portal/wx/seckill_m/index.shtml"
              >
                更多秒杀<i class="seckill-more-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="product">
        <ul>
          <li v-for="item in lists" :key="item._id">
            <img :src="item.coverImg" alt="" class="po" />
            <span>
              <div class="jiage">
                <span class="price"><em>￥</em>{{ item.price }}</span>
              </div>
              <div class="xian"></div>
              <span class="old_price"><em>￥</em>{{ item.price + 1000 }}</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reqProduct } from "../../../api/products";
export default {
  components: {},
  data() {
    return {
      lists: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    async getProduct() {
      const result = await reqProduct();
      let list = result.data.products;
      this.lists = list.slice(0, 6);
      console.log(this.lists);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getProduct();
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
.seckill {
  width: 100%;
  height: 130px;
  background: saddlebrown;
}
.slider-wrapper + .box_wrapper + div,
.slider-wrapper + div + .box_wrapper {
  position: relative;
  z-index: 12;
  margin-top: -1px;
}
.floor.seckill .floor-the-container {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.floor-the-container {
  position: relative;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0;
}
.floor .floor-container:last-child {
  border-bottom: none;
}
.floor-container {
  width: 100%;
  font-size: 0;
  overflow: hidden;
}
.sec_kill_floor {
  box-shadow: 0 1px 1px #f2f2f2;
  background: #fff;
  border-radius: 0.6rem;
  overflow: hidden;
}
.floor-container .sec_kill_floor .title_wrap {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABYwAAACQBAMAAABZrTKvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUdwTO0QEO0QEO0WFuoNDe0SEuwREewREYfJP0kAAAAIdFJOUwB9ZA+zIzZPcd7tbgAAA/BJREFUeNrt3TGP41QUBtDZtRbaTVig3SxIaS0sQz1oEO0uwaaFIk4LAeK/j+1kMg6FBynzZnPDOfVUnz5dX9vPmZubSW/uHtzeQEjjGt+Jg5ju1Bg1hgtbKuzGqDF8LH+NavyjOIjp51GNfxAHMb0Y1fi1OIjp1ajG78VBUF8fW/y9MIi/VdgpCCu7f+R2mwuDsF4eavxWFAT2YWjx54IgtF/e3N3+LQYAAAAAAACeyKvtYr58Lwci+242+FMSxPXJ7OBXWRBVtriv8TyXBkF9Mzv6ShpEH8Yd45iYXo5aPHsrD0L6bVzjL+RByJ1idsJWQUSfntb4d4kQ0IvTGr+WCAF9OK2xD3uJ6I/TGn8pEQJanNZ4LhHUGD6G2b9IBDUGSwWoMf9XHrhxBbz+4Ap4Gc0VcDSIK+CgJtfAsXmugI+YuIatYvTk2Bf+RPXTQ40/kwbhx7FhTFx+/Ipr4KcIuQZ+GBYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACC3PZEBwWZYVekz0FhedPJcEkRVFtVoVciB4izvGMbF3iqqq667HoiBwjYuqbtbrqtBjAu8UZdX0PV5ZKgg8jcu6bppm7SaP6DtF023HakzgpaLqh7FpTOhpnPWrcdOYxsS+xRuWim4au8cj8lIxTGNLBRe9NRSTB3+y4YFbXa0MYy532A7yqT+o6nX/+kONudwW7980F1Nbxf5PnNXkQuX7x2mTszY/HA2S1nlJO1uVbhiXdbNp28mnwt3uXJaFYXxeiXsiTJRuWW/a5bZtd+uJO7jske2ZR2+jD6ubENPEWzXtu17bTLzdyLse+xrvrBaXjqWkjLdut0ONl+1axAkvetWwulV6nKTG5WEY9+N4Yqu4MYrPuwPpLnrLtp285HFGvJvtocbLXWVxSzYt9he9/pIn5AQ1ru+HcTeObRXparw53IHsVmr89Mp6e6zxcr0SSOKLnktemho3oxo3apxsWhzvQMyKJBe7UY13KzdyqaeFWZGmxvt05/sau+ClnhZdyPJ48ny/3bx7oMZqHHkaz+8TVuPk00LISfI9jImFhNNP47lZ8Sy3eBJ5hqVCjZPdQs/dRNuN49fY64/0MS88cEs1JrL+ufzCy+jUNR69/hDy03M06HnGxT7mhZBTbW37g5rzxw5qcta0GB0NMo1TBFxvHo7Nq3GyaXE8qGlWpMi32yr+w0dMnL28Ne1269h8wruPTdsul9OflHL2OK6a3fARkyyS5Ntd75p2+MBfi5Nux4dPSh0iTLVW9D9e3PjPHqljrtY+8E84JwT8PJe9ovSzQUkHRRewWZy+x7kWpx3ImY0N4BIueCIAALgE/wB5Hy4N/5rMxgAAAABJRU5ErkJggg==)
    no-repeat;
  background-size: contain;
}
.sec_kill_floor .title_wrap {
  height: 1.7rem;
  line-height: 1.7rem;
  vertical-align: middle;
}
.floor a {
  text-decoration: none;
}
.seckill-left-link {
  display: inline-block;
}
a,
a:visited {
  text-decoration: none;
  color: #333;
}
.floor-container .seckill-tit-img {
  float: left;
  display: inline-block;
  height: 1.35rem;
  margin-top: 0.4rem;
  margin-right: 0.25rem;
  margin-left: 0.5rem;
  font-family: PingFangSC-Semibold;
  font-size: 0.7rem;
  color: #333;
  letter-spacing: 0;
  line-height: 1.2;
}
.seckill-timer-wrap {
  display: inline-block;
  border-radius: 0.4rem;
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0;
  float: left;
  margin-top: 0.4rem;
  vertical-align: middle;
}
.seckill-nth {
  height: 100%;
  border-radius: 0.4rem;
  font-size: 0.65rem;
  color: #ff2727;
  letter-spacing: 0;
  padding-right: 0.25rem;
  padding-left: 0.25rem;
  float: left;
  position: relative;
  left: -1px;
  margin-right: 0.2rem;
  line-height: 1.4;
}
.seckill-timer {
  margin-right: 0.2rem;
  height: 100%;
  float: right;
}
.floor a {
  text-decoration: none;
}
.seckill-more-link {
  display: inline-block;
  color: #f23030;
  float: right;
  font-size: 0.6rem;
  text-align: right;
  position: relative;
  padding-right: 1.1rem;
}
a,
a:visited {
  text-decoration: none;
  color: #333;
}
.seckill-more-icon {
  display: inline-block;
  width: 0.55rem;
  height: 0.55rem;
  background: url(//wq.360buyimg.com/wxsq_project/portal/m_jd_index/images/arrow_rt_2ccb8cd5.png)
    no-repeat;
  background-size: cover;
  position: absolute;
  right: 0.4rem;
  top: 0.5rem;
}
em,
i {
  font-style: normal;
}
.product {
  width: 95%;
  height: 95px;
  margin: auto;
  border-radius: 10px;
}
.product ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product ul li {
  background: slateblue;
  width: 15%;
}
.po {
  width: 100%;
  height: 60px;
}
em {
  font-size: 12px;
  margin-top: 1.2rem;
}
.price {
  margin-top: 0.5rem;
  font-size: 13px;
  display: block;
  color: #f2270c;
  font-size: 0.65rem;
  line-height: 0.6rem;
  height: 0.6rem;
  text-align: center;
}
.old_price {
  font-size: 12px;
  display: block;
  text-align: center;
  color: #ccc;
}
.xian {
  width: 46px;
  height: 1px;
  background: #fff;
  position: relative;
  top: 6px;
  left: 5px;
}
</style>
