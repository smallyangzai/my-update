import {homeRecord} from "@api/home";

export default{
    async actionsHomeRecord({commit}){
        let data = await homeRecord();
        
         
        commit("mutationsHomeRecord",data.data);
    }
}