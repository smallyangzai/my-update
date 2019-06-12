import {http} from "@utils/http";

//主页面
  
    //主页面数据
    export const homeMore = () => http("get","/api/v1/activities/hot?pageIndex=1&pageSize=10")