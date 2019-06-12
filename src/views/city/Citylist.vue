<template>
    <!-- <BScroll> -->
        <div class="citylist" id="City" ref="scroll">
                <div class="rightbox">
                    <ul class="cityitem">
                        <v-touch tag="li" @tap="toHistory()">历史</v-touch>
                        <v-touch tag="li" @tap="toHost()">热门</v-touch>
                        <v-touch 
                            tag="li"
                            v-for="(item,index) in cityList" 
                            v-on:tap="handleTo(index)"
                            :key="index" 
                        >{{item.index}}</v-touch>
                    </ul>
                </div>
                <router-link tag="div"  :to="{name:'home'}" class="current-city">
                   <span>{{$store.state.city.nm}}</span>
                   <span>当前城市</span>
                </router-link>
                <div class="history-city" ref="History">
                    <div class="history-title">历史访问城市</div>
                    <div class="history-wrap">
                        <span>西安</span>
                        <span>杭州</span>
                        <span>深圳</span>
                    </div>
                </div>
                <div class="hot-city" ref="Host">
                    <div class="hot-title">热门城市</div>
                    <div class="hot-wrap">
                        <v-touch 
                            tag="span"
                            v-for="(item,index) in cityHot" 
                            @tap="positionHostCity(item)"
                            :key="index"
                        >{{item.nm}}</v-touch>
                    </div>
                </div>
                <div ref="Inital">
                    <div  v-for="(item,index) in cityList" :key="index" >
                        <div class="inital">{{item.index}}</div>
                        <div class="list">
                            <v-touch 
                                tag="div"
                                class="showlist" 
                                v-for="(data,index) in item.list" 
                                @tap="positionCity(data)"
                                :key="index" 
                            >{{data.nm}}</v-touch>
                        </div>
                    </div>
                </div>
            </div>
       <!-- </BScroll> -->
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
            actionsCityList:"city/actionsCityList",
        }),
        ...Vuex.mapMutations({
            mutationsCityToggle:"city/mutationsCityToggle",
        }),
        handleTo(index){
            let item = this.$refs.Inital.querySelectorAll(".inital");
            this.$refs.scroll.scrollTop = item[index].offsetTop;
        },
        toHistory(){
            let item = this.$refs.History.querySelectorAll(".history-title");
            this.$refs.scroll.scrollTop = item[0].offsetTop;
        },
        toHost(){
            let iten = this.$refs.Host.querySelectorAll(".hot-title");
            this.$refs.scroll.scrollTop = iten[0].offsetTop;
        },
        positionCity(params){
            // console.log(params);
            this.$router.push("/home");
            this.mutationsCityToggle(params)
        },
        positionHostCity(params){
            // console.log(params);
            this.$router.push("/home");
            this.mutationsCityToggle(params)
        }
    },
    computed:{
        ...Vuex.mapState({
            cityList:state=>state.city.cityList,
            cityHot:state=>state.city.cityHot,
        })
    },
}
</script>
    
<style scoped>

.citylist{
    background: #f2f2f2;
    height:100%;
    overflow-x: hidden;
}
.rightbox{
    position: fixed;
    top: 0;
    right: 0;
    width: 30px;
    height: 100%;
    background-color: #f9f9f9;
    z-index: 999;
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


