<template>
    
        <div class="citylist" id="City">
                <div class="rightbox">
                    <ul class="cityitem">
                        <li>历史</li>
                        <li>热门</li>
                        <li v-for="(item,index) in cityList" :key="index" >{{item.index}}</li>
                    </ul>
                </div>
                <div class="current-city">
                   <span>深圳</span>
                   <span>当前城市</span>
                </div>
                <div class="history-city">
                    <div class="history-title">历史访问城市</div>
                    <div class="history-wrap">
                        <span>西安</span>
                        <span>杭州</span>
                        <span>深圳</span>
                    </div>
                </div>
                <div class="hot-city">
                    <div class="hot-title">热门城市</div>
                    <div class="hot-wrap">
                        <span v-for="(item,index) in cityHot" :key="index">{{item.nm}}</span>
                    </div>
                </div>
                <div  v-for="(item,index) in cityList" :key="index">
                    <div class="inital">{{item.index}}</div>
                    <div class="list">
                        <div class="showlist" v-for="(data,index) in item.list" :key="index" >{{data.nm}}</div>
                    </div>
                </div>
                
            </div>
       
</template>

<script>
import Vuex from "vuex";
export default {
    name:"Citylist",
    created(){
        this.actionsCityList();
    },
    methods:{
        ...Vuex.mapActions({
            actionsCityList:"city/actionsCityList"
        }),
    },
    computed:{
        ...Vuex.mapState({
            cityList:state=>state.city.cityList,
            cityHot:state=>state.city.cityHot,
        })
    },
}
</script>
    
<style>

.citylist{
    background: #f2f2f2;
}
.rightbox{
    position: fixed;
    top: 0;
    right: 0;
    width: 30px;
    height: 100%;
    background-color: #f9f9f9;
    z-index: 99;
}
.cityitem{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.cityitem li{
    font-size: 11px;
    color: #1c70fe;
    width: 30px;
    text-align: center;
    line-height: 14px;
}
.cityitem li:nth-child(2){
    padding-bottom: 5px;
}
.current-city{
    position: relative;
    z-index: 100;
    line-height: 21px;
    padding: 12px 13px;
    border-bottom: 1px solid #e6e6e6;
    background-color: #fff;
}
.current-city span:nth-child(1){
    font-size: 15px;
    margin-right: 11px;
    line-height: 21px;
}
.current-city span:nth-child(2){
    font-size: 12px;
    color: #999;
    line-height: 21px;
}
.history-city,.hot-city{
    margin: 20px 14px;
}
.history-title,.hot-title{
    color: #999;
    margin-bottom: 20px;
    font-size: 14px;
}
.history-wrap,.hot-wrap{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-size: 14px;
}
.history-wrap span,.hot-wrap span{
    display: block;
    width: 100px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    margin-right: 10px;
    margin-bottom: 9px;
    box-sizing: border-box;
}
.inital{
    color: #999;
    margin: 6px 14px;
    font-size: 14px;
}
.list{
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    background-color: #fff;
    padding-left: 17px;
    font-size: 14px;
}
.showlist{
    height: 43px;
    line-height: 43px;
    border-bottom: 1px solid #e6e6e6;
}
</style>


