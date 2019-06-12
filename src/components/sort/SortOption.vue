<template>
  <div>
    <div class="sortoption">
      <ul>
        <router-link v-for="(item,index) in options" :to="item.path" tag="li" :key="index">
          <span>{{item.title}}</span>
        </router-link>
      </ul>
    </div>

    <div class="sorttime">
      <div class="sorttime-all">
        综合排序
        <span class="iconfont">&#xe712;</span>
      </div>
      <div class="sorttime-all">
        全部时间
        <span class="iconfont">&#xe712;</span>
      </div>
      <div class="sorttime-online">在线选座</div>
    </div>

    <div class="sortshow" v-for="(item,index) in OptAll" :key="index">
      <router-link :to="{name:'details'}" tag="div" class="sortshow-paint">
        <img :src="item.poster" alt>
      </router-link>
      <div class="sortshow-info">
        <router-link :to="{name:'details'}" tag="div" class="infotitle">
          <a class="title">
            <span class="city">[深圳]{{item.properName}}</span>
          </a>
        </router-link>
        <router-link :to="{name:'details'}" tag="div" class="infotime">
          <span class="time">{{item.timeRange}}</span>
          <span class="split">|</span>
          <span class="address">{{item.venueName}}</span>
        </router-link>
        <div class="infomark">
          评分
          <span class="mark">{{item.rank}}</span>
        </div>
        <div class="infoprice">
          <span>{{item.lowPrice}}</span>元起
        </div>
        <router-link :to="{name:'details'}" tag="div" class="showspot">“{{item.desc}}”</router-link>
      </div>
    </div>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import OptAll from "@components/sortoptions/OptAll";
import OptActivities from "@components/sortoptions/OptActivities";
import Vuex from "vuex"

export default {
  name: "SortOption",
  data() {
    return {
      options: [
        {
          title: "全部分类",
          path: "/OptAll"
        },
        {
          title: "演唱会",
          path: "/OptActivities"
        },
        {
          title: "话剧歌剧",
          path: "/"
        },
        {
          title: "休闲展览",
          path: "/"
        },
        {
          title: "体育赛事",
          path: "/"
        },
        {
          title: "旅游玩乐",
          path: "/"
        },
        {
          title: "音乐会",
          path: "/"
        },
        {
          title: "儿童亲子",
          path: "/"
        },
        {
          title: "舞蹈芭蕾",
          path: "/"
        },
        {
          title: "戏曲综艺",
          path: "/"
        }
      ]
    };
  },
  created(){
    this.actionsOptAll();
  },
  methods:{
    ...Vuex.mapActions({
      actionsOptAll:"sort/actionsOptAll"
  })
  },
  computed:{
      ...Vuex.mapState({
          OptAll:state=>state.sort.OptAll,
      })
  }
};
</script>

<style scoped>
.sortoption {
  z-index: 12;
  width: 100%;
  height: 39px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #fcfcfc;
}
.sortoption > ul {
  height: 39px;
  width: 100%;
  line-height: 39px;
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  box-shadow: 0 0.5px 0 0 #e6e6e6;
}
.sortoption > ul > li {
  height: 39px;
  font-size: 14px;
  width: 100px;
  margin-left: 28px;
}
.sortoption > ul > li:first-child {
  border-bottom: 3px solid #ff2661;
  color: #ff2661;
  margin-left: 20px;
}
/* .sortoption .router-link-active{
    border-bottom: 3px solid #ff2661;
    color: #ff2661;
} */

.sorttime {
  width: 100%;
  height: 39px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  z-index: 12;
}
.sorttime-all > span {
  display: inline-block;
  padding-left: 5px;
  font-size: 10px;
  line-height: 39px;
  color: #262626;
}
.sorttime-online {
  height: 39px;
  line-height: 39px;
}
.sorttime-paint {
  padding: 14px;
  width: 100%;
  padding-bottom: 0;
  background-color: #fff;
}
.sorttime-paint img {
  width: 347px;
  height: 104px;
  display: block;
}

.sortshow{
  width:100%;
  display: flex;
  justify-content:space-around;
}
.sortshow-paint {
  margin-top: 20px;
}
.sortshow-info {
  width: 255px;
  margin-top: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sortshow-paint > img {
  width: 75px;
  height: 100px;
}
.sortshow-info .infotitle .title {
  font-size: 15px;
  color: #333;
  font-weight: 600;
}
.infotime {
  font-size: 12px;
  color: #999;
  margin-top: 9px;
  white-space: nowrap;
}
.split {
  margin: 0 4px;
}
.address {
  font-size: 12px;
  color: #999;
}
.infomark {
  font-size: 10px;
  color: #999;
  margin-top: 4px;
  margin-bottom: 16px;
}
.infomark .mark {
  font-size: 12px;
  font-weight: 700;
  color: #ffb02e;
}
.infoprice > span {
  top: 1px;
  color: #ff2661;
  font-size: 18px;
  font-weight: 700;
  margin-right: 4px;
}
.showspot {
  font-size: 12px;
  color: #999;
  padding: 10px 0;
  margin-top: 10px;
  border-top: 1px solid hsla(0, 0%, 90%, 0.5);
  border-bottom: 1px solid hsla(0, 0%, 90%, 0.5);
}
</style>
