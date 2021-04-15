import { get } from "../utils/request";

// 商品列表
export const reqProduct = (data) => get("/api/v1/products", data);
// 商品详情接口
export const reqProductDetail = (id) => get("/api/v1/products/" + id);
