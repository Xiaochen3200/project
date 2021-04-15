<template>
  <div class="login register">
    <Header>
      <span class="left"
            @click="goregister"><span name='left'>
          <van-icon name="arrow-left"
                    size="25" />

        </span></span>
      <span class="center">京东快速注册</span>

    </Header>

    <!-- <van-uploader :after-read="afterRead"
                  v-if="!imgurl" />
    <img :src="imgurl"
         alt=""
         width="100"
         height="100"
         v-else> -->

    <div class="Img">
      <img src="http://img.duoziwang.com/2018/19/07111648929270.jpg"
           alt="">
    </div>

    <van-form @submit="onSubmit">
      <van-field v-model="username"
                 name="userName"
                 label="用户名"
                 placeholder="请输入用户名"
                 :rules="[{ required: true,pattern: /^[A-Za-z0-9]{6,12}$/, message: '请填写6~12个字母、数字' }]" />
      <van-field v-model="password"
                 type="password"
                 name="password"
                 label="密码"
                 placeholder="请输入密码"
                 :rules="[{ required: true,pattern: /^[A-Za-z0-9]{6,16}$/, message: '请填写6~16个字母、数字' }]" />

      <van-field v-model="Password"
                 type="Password"
                 name="Password"
                 label="确认密码"
                 placeholder="请输入确认密码"
                 :rules="[{ required: true,pattern: /^[A-Za-z0-9]{6,16}$/, message: '请填写6~16个字母、数字' }]" />
      <div style="margin: 16px;">
        <van-button round
                    block
                    type="info"
                    native-type="submit"
                    @click="gozhuce">快速注册</van-button>
      </div>
    </van-form>

    <div class="denglu">
      <van-cell value="登录"
                @click="gologin" />
    </div>

    <div class="shll">
      <van-cell value="短信验证码登陆" />
    </div>

    <van-divider :style="{ color: '#ccc', borderColor: '#ccc', padding: '0 16px' }">
      其他登录方式
    </van-divider>

    <div class="icon">
      <span class="iconfont icon-qq">
        <p>QQ</p>
      </span>
      <span class="iconfont icon-weixin">
        <p>微信</p>
      </span>
      <span class="iconfont icon-pingguo">
        <p>苹果</p>
      </span>
    </div>

  </div>
</template>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

<script>
import { reqRegister } from '../../api/user'

//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {

  },
  props: {},
  data () {
    //这里存放数据
    return {
      username: "",
      password: "",
      imgurl: "",
      Password: "",
      adatar: '',
    };


  },
  //计算属性 类似于data概念
  computed: {

  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.imgurl = file.content;
    },
    async onSubmit (values) {
      console.log('submit', values);
      const result = await reqRegister({ ...values, avatar: this.imgurl });
      // console.log(result);

      if (result.data.code === 200) {
        this.$router.push("/login");
      }
    },
    goregister () {
      this.$router.push("/login");
    },
    gologin () {
      this.$router.push("/login");
    },
    gozhuce () {
      this.$router.push("/login");
    },


  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () { }, //生命周期 - 销毁之前
  destroyed () { }, //生命周期 - 销毁完成
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
.register {
  width: 375px;
  height: 50px;
  margin-top: 15px;
}
.register .left {
  float: left;
  font-size: 20px;
  line-height: 50px;
  /* margin-top: 15px; */
}
.register .center {
  margin-left: 90px;
  font-size: 20px;
  line-height: 50px;
  /* margin-top: 15px; */
}

.van-icon {
  line-height: 50px;
  margin-left: 20px;
}

.van-form {
  margin-top: 20px;
}

.Img img {
  width: 100px;
  height: 100px;
}

.van-uploader {
  margin-left: 110px;
  /* width: 100%; */
  display: inline-block;
  /* margin: 0 auto; */
}
.van-uploader__upload input {
  text-align: center;
  margin-top: 10px;
}
img {
  margin-left: 100px;
  margin-top: 10px;
}

.van-form {
  margin-top: 20px;
}

.van-button {
  background: red;
  margin-top: 20px;
  border: solid red;
}

.denglu {
  width: 100px;
  height: 30px;
  float: right;
  margin-right: -15px;
}
.shll {
  width: 150px;
  height: 30px;
  float: left;
  margin-left: 20px;
}

.van-divider {
  margin-top: 70px;
}

.icon {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.icon p {
  text-align: center;
  margin-top: 10px;
}
.icon-qq {
  font-size: 40px;
  float: left;
}
.icon-qq p {
  font-size: 12px;
}
.icon-weixin {
  font-size: 40px;
  float: left;
}
.icon-weixin p {
  font-size: 12px;
}
.icon-pingguo {
  font-size: 40px;
  float: left;
}
.icon-pingguo p {
  font-size: 12px;
}
</style>