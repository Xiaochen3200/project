import { post, get } from "../utils/request";
// 加入购物车接口
export const reqAddCart = (data) => post("/api/v1/shop_carts", data);

// 获取购物车列表接口
export const reqCartList = (data) => get("/api/v1/shop_carts", data);
