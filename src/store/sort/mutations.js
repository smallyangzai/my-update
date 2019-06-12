export default{
    mutationsOptAll(state,params){
        state.OptAll = params;
        // console.log(state.OptAll);
        window.sessionStorage.setItem("OptAll",JSON.stringify(params));
    },
    //演唱会
    mutationsOptActivities(state,params){
        state.OptActivities = params;
        console.log(state.OptActivities);
        window.sessionStorage.setItem("OptActivities",JSON.stringify(params));
    }
}


