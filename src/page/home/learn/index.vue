<template>
  <div class="learn">
    <div class="top">
      <div class="left">
        <div class="top1">
          <span>学霸进阶</span>
          <p>今日事今日毕</p>
        </div>
        <div>
          <div class="bottom1">
            <img
              src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/140497/22/8768/92583/5f644d48Ec5f5271f/836d6cc020db5120.jpg!q70.jpg.dpg"
              alt=""
              style="margin-left:0"
            />
            <img
              src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/114022/9/9487/819189/5eda0447Ed5cce2ef/dc08b675667de462.jpg!q70.jpg.dpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="right">
        <div class="top2">
          <span>小小少年</span>
          <p>带上心爱的装备去上学</p>
        </div>
        <div class="bottom2">
          <img
            src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/123916/27/8181/153949/5f1fa3ddEf6463aea/c06f519baf47fe80.jpg!q70.jpg.dpg"
            alt=""
            style="margin-left:0"
          />
          <img
            src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/167805/5/1021/79151/5ff404e7E3c698c89/26e7dfed71257232.jpg!q70.jpg.dpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="next">
      <div>
        <strong>音乐时光</strong>
        <p>文娱滋养</p>
        <img
          src="https://m.360buyimg.com/mobilecms/11706/ab64a190-7010-4313-819e-91b3ccbc1395.jpg!q70.jpg"
          alt=""
        />
      </div>
      <div>
        <strong>亲自共读</strong>
        <p>最美陪伴</p>
        <img
          src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/136962/11/1224/660408/5ed70be0Ef88de6f7/1368e0c551c90e8c.jpg!q70.jpg.dpg"
          alt=""
        />
      </div>
      <div>
        <strong>潮流双肩</strong>
        <p>潮流双肩包</p>
        <img
          src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/143363/21/5894/564609/5f3df5bcEf9c50ab7/130808ec5406576e.jpg!q70.jpg.dpg"
          alt=""
        />
      </div>
      <div>
        <strong>程序猿</strong>
        <p>装备必须牛</p>
        <img
          src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/133292/21/12884/35002/5f8d5de2E930b2ef3/e217fcd319e7afea.jpg!q70.jpg.dpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
.learn {
  width: 100%;
  height: 300px;
  margin-top: 15px;
  border-radius: 10px;
}
.top {
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.left,
.right {
  width: 50%;
  height: 150px;
}
.top1,
.top2 {
  margin-left: 5px;
}
.top1,
.top2 {
  height: 40px;
}
.top1 span {
  font-size: 19px;
}
.top2 span {
  font-size: 19px;
}
.top1 p {
  font-size: 14px;
}
.top2 p {
  font-size: 14px;
}
.bottom1,
.bottom2 {
  margin-top: 10px;
  margin-left: 10px;
}
.bottom1 img {
  width: 80px;
  height: 80px;
  float: left;
  margin-left: 5px;
}
.bottom2 img {
  width: 80px;
  height: 80px;
  float: left;
  margin-left: 7px;
}
.next {
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.next div strong {
  margin-left: 6px;
}
.next div p {
  font-size: 14px;
  margin-left: 6px;
}
.next div img {
  width: 60px;
  height: 60px;
  margin-top: 4px;
  margin-left: 5px;
}
</style>
