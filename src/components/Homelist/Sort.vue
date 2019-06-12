<template>
<div id="sort" style="block">
     <div class="guess-like__title">猜你喜欢</div>

    <div class="guess-like__wrap">
        <li class="activity" acticle="[object Object]" v-for="(item,index) in homeRecord" :key="index">
            <div class="main-top">
                <a href="#" class="poster-wrap">
                    <div class="video-play" style="background-size: 26px 26px; display: none;">
                        <video class="video"></video>
                    </div>
                    <div class="poster" data-src="https://img.piaoniu.com/poster/e5fcfda10d24a1a3093092a457c660606538e2f7.jpg" lazy="load" 
                    ><img :src="item.recommendContent.poster" ></div>
                </a>
                <div class="info">
                    <div class="title-line">
                        <a href="#" class="title"><span class="city" style>[北京]</span>{{item.recommendContent.shortname}}</a>
                        <div class="activityTag">
                            <div class="eCard">电</div>
                        </div>
                    </div>
                    <div class="time-address">
                        <span class="time">{{item.recommendContent.timeRange}}</span>
                        <span class="split">|</span>
                        <span class="address">{{item.recommendContent.venueName}}</span>
                    </div>
                    <div class="rank">
                            评分&nbsp;<span>{{item.recommendContent.discountRate}}</span>
                    </div>
                    <div class="price-wrap">
                        <div>
                            <span class="price">{{item.recommendContent.highPrice}}</span>
                            <span class="qi">元起</span>
                        </div>
                        <div class="status-text"></div>
                    </div>
                    <div class="promotion-info">
                        <ul></ul>
                    </div>
                    <div class="light-spot">{{item.recommendContent.desc}}</div>
                </div>
            </div>
        </li>
        </div>
        </div>
        
        
</template>

<script>
import Vuex from "vuex";
export default {
    name:"HomeSort",
    created(){
            this.actionsHomeRecord()
           
    },
    methods:{
        ...Vuex.mapActions({
            actionsHomeRecord:"home/actionsHomeRecord"
        }),
        
    },
    computed:{
        ...Vuex.mapState({
            homeRecord:state=>state.home.homeRecord
        }),
        
    }

}

</script>
<style>
.guess-like__title {
    font-size: 18px;
    color: #000;
    padding: 0 14px;
    margin-top:24px;
    font-weight: 900;
}
/* 加载栏 */
.activity {
    position: relative;
    margin-left: 15px;
    margin-right: 15px;
    background-color: #fff;
}
.activity .main-top {
    min-height: 125px;
    position: relative;
    display: block;
}
.activity .poster-wrap {
    position: absolute;
    left: 0;
    top: 15px;
}
.video-play {
    background-repeat: no-repeat;
    position: absolute;
    background-size: 26px 26px;
    background-position: 50% 50%;
    background-image: url(//static.piaoniu.com/nuxt-static/img/icon-play.23407ce.png);
}
.video-play video {
    width: 0;
    height: 0;
}
.activity .poster-wrap .poster {
    width: 75px;
    height: 100px;
    
}
 .activity .poster img{
    /* background-size: cover;
    background-position: 50%; */
    width: 75px;
    height: 100px;
} 
.activity .info {
    padding-top: 15px;
    margin-left: 92px;
    border-bottom: 1px solid hsla(0,0%,90%,.5);
}
.activity .info .title-line {
    display: -ms-flexbox;
    display: flex;
}
.activity .info .title {
    font-size: 15px;
    color: #333;
    max-height: 44px;
    line-height: 22px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Helvetica Neue,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans;
    font-weight: 600;
}
.activity .activityTag {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    max-width: 40px;
    margin-left: 4px;
    color: #fff;
}
.activity .eCard, .activity .eCard2 {
    bottom: 12px;
    text-align: center;
    font-size: 10px;
    display: inline-block;
}
.activity .eCard {
    margin-right: 5px;
    border-radius: 2px;
    padding: 1px;
    width: 15px;
    height: 15px;
    background-color: #96a3ff;
    box-sizing: border-box;
}
.activity .info .time-address {
    font-size: 12px;
    color: #999;
    margin-top: 9px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.activity .info .time-address .split {
    margin: 0 4px;
}
.activity .info .no-rank, .activity .info .rank {
    font-size: 10px;
    color: #999;
    margin-top: 4px;
    margin-bottom: 16px;
}
.activity .info .no-rank span, .activity .info .rank span {
    font-size: 12px;
    font-weight: 700;
    color: #ffb02e;
}
.activity .price-wrap {
    position: relative;
    margin-bottom: 10px;
}
.activity .price-wrap .price {
    position: relative;
    top: 1px;
    color: #ff2661;
    font-size: 18px;
    font-weight: 700;
    margin-right: 4px;
}
.activity .price-wrap .qi, .activity .price-wrap .unit {
    font-size: 10px;
    color: #999;
}
.activity .promotion-info {
    margin-bottom: 10px;
}
.activity .light-spot {
    font-size: 12px;
    color: #999;
    padding: 14px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    border-top: 1px solid hsla(0,0%,90%,.5);
}

</style>
