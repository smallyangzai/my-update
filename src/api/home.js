import {http} from "@utils/http";

//主页面
  
    //主页面数据
    export const homeRecord = () => http("get","/api/v2/home/recommends?",{pageIndex:1,pageSize:10})