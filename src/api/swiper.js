import { get } from "../utils/request";

// 轮播图
export const reqSwiper = (data) => get("/api/v1/products", data);
