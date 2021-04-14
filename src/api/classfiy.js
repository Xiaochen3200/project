import { get } from "../utils/request";

export const reqClssfiy = (data) => get("/api/v1/products", data);