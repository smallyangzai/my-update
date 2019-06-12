import {OptAll} from "@api/sort"


export default {
    async actionsOptAll({commit}){
        let data = await OptAll()
        // console.log(data.data)
        commit("mutationsOptAll", data.data)
    }
}