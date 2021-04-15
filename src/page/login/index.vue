<template>
  <div class="login">
    <Header>
      <span class="left"
            @click="gohome"><span name='left'>
          <van-icon name="arrow-left"
                    size="25" />

        </span></span>
      <span class="center">京东登录注册</span>

    </Header>

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
      <div style="margin: 16px;">
        <van-button round
                    block
                    type="info"
                    native-type="submit">登录</van-button>
        <van-button round
                    block
                    type="info"
                    native-type="submit">一键登录</van-button>
        <van-button round
                    block
                    type="info"
                    native-type="submit"
                    @click="gotui">退出登录</van-button>

      </div>

    </van-form>
    <div class="zhuce">
      <van-cell value="快速注册"
                @click="goreg" />
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

    <h3>未注册的手机号验证后将自动创建京东账号，登录即代表<br /></h3>
    <div class="dibu">
      <span>您已同意</span>
      <a href="https://ihelp.jd.com/n/help/tip/getTipsFacade.json?tipId=74"
         class="href">京东隐私政策</a>
    </div>
  </div>

</template>

<script>
import { reqLogin } from '../../api/user';
import { removeToken, setToken } from '../../utils/utils';
import { Toast } from 'vant';


//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data () {
    //这里存放数据
    return {
      username: "",
      password: "",

    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async onSubmit (values) {
      console.log('submit', values);
      const result = await reqLogin({ userName: this.username, password: this.password });
      console.log(result, 11111111);
      // alert(1)
      if (result.data.code != "error") {
        Toast.success('登陆成功');
        setToken(result.data.token);
        this.$router.push("/");

      }
    },
    goreg () {
      this.$router.push("/reg");
    },
    gohome () {
      this.$router.push("/home");

    },
    gotui () {
      this.$router.push("/home");

    },




  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {
    removeToken();
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
.login {
  width: 375px;
  height: 50px;
  margin-top: 15px;
}
.login .left {
  float: left;
  font-size: 20px;
  line-height: 50px;
  /* margin-top: 15px; */
}
.login .center {
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
  margin-top: 40px;
}

.van-button {
  background: red;
  margin-top: 20px;
  border: solid red;
}

.zhuce {
  width: 100px;
  height: 30px;
  float: right;
}
.shll {
  width: 150px;
  height: 30px;
  float: left;
}

.van-divider {
  margin-top: 100px;
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

h3 {
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
  color: #ccc;
}
.dibu {
  margin-top: 10px;
  text-align: center;
}
.dibu span {
  font-size: 12px;
  color: #ccc;
  margin-top: 10px;
}
a {
  height: 20px;
  font-size: 12px;
}
</style>