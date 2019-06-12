export  default  {
    cityList: JSON.parse( window.sessionStorage.getItem("cityList"))|| [],
    cityHot:  JSON.parse(window.sessionStorage.getItem("cityHot")) || [],
    cityId:   window.sessionStorage.getItem("cityId") || 7,
    nm: window.sessionStorage.getItem("nm") || "深圳",
    // cityLoading:true,
    // getLocation:JSON.parse(window.sessionStorage.getItem("getLocation")) || {},
}