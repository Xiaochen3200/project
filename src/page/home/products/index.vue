<template>
  <div class="products">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      style="padding-bottom: 44px"
    >
      <!-- <van-cell v-for="item in products" :key="item" :title="item" /> -->
      <!-- <div
        v-for="item in products"
        :key="item.id"
        class="list"
        @click="godetail(item._id)"
      >
        <van-card
          num="2"
          :price="item.price"
          :desc="item.name"
          :title="item.descriptions"
          :thumb="item.coverImg"
        >
          <template #tags>
            <van-tag plain type="danger">新品</van-tag>
            <van-tag plain type="danger">满减</van-tag>
          </template>
          <template #footer> -->
      <!-- <van-button size="mini">按钮</van-button> -->
      <!-- <van-button size="mini" class="mini">看相似</van-button>
          </template>
        </van-card>
      </div> -->
      <div class="goods">
        <div
          class="left"
          v-for="item in products"
          :key="item.id"
          @click="getDetails(item._id)"
        >
          <div class="picture">
            <img :src="item.coverImg" alt="" />
          </div>
          <span class="similar-product-text">
            {{ item.name }}
          </span>
          <p class="similar-product-info">
            <span class="similar-product-price">
              ¥&nbsp;<span class="big-price">{{ item.price }}</span>
            </span>
            <span class="rec-price-tag">满减</span>
            <span
              data-event_id="MHomeGuessYouLike_BSimilarities"
              nowxa="1"
              data-event_level="1"
              data-event_param="2_10027171742825_1"
              class="guess-button j_see_similar"
              jump-href="//home.m.jd.com/myjd/similar/list.action?skuId=10027171742825"
              >看相似</span
            >
          </p>
          <p class="similar-product-info"></p>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
import { reqProduct } from "../../../api/products";
export default {
  components: {},
  data() {
    return {
      products: [],
      loading: false,
      finished: false,
      page: 1,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    async onLoad() {
      const result = await reqProduct({ page: this.page });
      if (result.status === 200) {
        if (result.data.products < 10) {
          this.finished = true; // 如果返回的数组小于10，说明已经加载到最后一页，终止
        } else {
          // 否则的话说明还没有加载到最后一页，放行
          this.loading = false;
          ++this.page;
        }
        this.products = this.products.concat(result.data.products);
        console.log(this.products);
      }
    },
    getDetails(id) {
      this.$router.push({
        name: `Details`,
        query: { id },
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.onLoad();
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
.goods {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.left {
  width: 49%;
  height: 270px;

  border: 0.1px solid #ccc;
}
.picture {
  height: 180px;
  /* background: green; */
  border-radius: 15px 15px 0px 0px;
}
.picture img {
  width: 140px;
  height: 140px;
  margin-left: 24px;
  margin-top: 20px;
}
.similar-product-text {
  box-sizing: border-box;
  height: 31px;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  color: #1a1a1a;
  margin-top: 5px;
  line-height: 16px;
  margin-bottom: 3px;
  padding: 0 4px;
}
.similar-product-info {
  font-size: 13px;
  overflow: hidden;
  position: relative;
  height: 1.3rem;
}
.similar-product-price {
  color: #fa2c19;
  display: inline-block;
  padding: 0 5px 0 4px;
  position: relative;
  top: 1px;
  height: 25px;
  line-height: 25px;
  font-family: JDZhengHT-EN-Regular;
}
.rec-price-tag {
  border: 1px solid #fa2c19;
  color: #fa2c19;
  font-size: 12px;
  padding: 0 3px;
  margin-right: 5px;
  line-height: 14px;
  height: 14px;
  border-radius: 0.1rem;
}
.guess-button {
  display: block;
  position: absolute;
  top: 0.15rem;
  right: -0.3em;
  text-align: center;
  color: grey;
  font-size: 0.5rem;
  height: 1.1rem;
  line-height: 1.1rem;
  padding: 0 0.5em;
  background-color: #f0f2f5;
  border-radius: 0.55rem;
  border-top-right-radius: 0;
}
.similar-product-info {
  font-size: 13px;
  overflow: hidden;
  position: relative;
  height: 1.3rem;
}
</style>
