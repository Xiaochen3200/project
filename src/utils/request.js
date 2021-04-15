import axios from "axios";
import {
  serverURL
} from "./common";
import {
  getToken
} from "./utils";
const instance = axios.create({
  baseURL: serverURL,
  timeout: 5000, //请求超时时间
});

// 请求拦截
instance.interceptors.request.use(
  function (config) {
    if (getToken()) {
      // 加入购物车时需要验证用户token才能添加到购物车
      config.headers.authorization = "Bearer " + getToken();
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 响应拦截
// instance.interceptors.response.use(
//   function(response) {
//     return response;
//   },
//   function(error) {
//     if (error && error.message.indexOf("401") > -1) {
//       Notify({ type: "danger", message: "没有权限,请先登录" });
//       location.href = "/";
//     }
//     return Promise.reject(error);
//   }
// );
// 封装get请求
export const get = (url, params) => instance.get(url, {
  params: params
});

// 封装post请求
export const post = (url, data) => instance.post(url, data);