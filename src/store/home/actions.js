import {homeRecord} from "@api/home";

export default{
    async actionsHomeRecord({commit}){
        let data = await homeRecord();
        
         console.log(data.data);
        commit("mutationsHomeRecord",data);
    }
}