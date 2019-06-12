import {http} from "@utils/http";

//接口管理
  
    //城市列表
    export const cityList = () => http("get","/api/v1/cities/")
