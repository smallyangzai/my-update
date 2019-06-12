import {homeMore} from "@api/more";

export default{
    async actionsHomeMore({commit}){
        let data = await homeMore();
        
          console.log(data.data);
        commit("mutationsHomeMore",data.data);
    }
}