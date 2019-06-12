import {cityList} from "@api/city";
export default{
    async actionsCityList({commit}){
        let data = await cityList();
        // console.log(data);
        commit("mutationsCityList",data);
    }
}