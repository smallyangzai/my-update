import { http } from "@utils/http";
//接口的管理

//全部分类
export const OptAll = (id) => http("get", "/api/v3/activities?pageIndex=1&categoryId=0&time=&sort=&seatMap=false&highestPrice=&lowestPrice=");

//演唱会
export const OptActivities = (id) => http("get", "/api/v3/activities?pageIndex=1&categoryId=1&time=&sort=&seatMap=false&highestPrice=&lowestPrice=");