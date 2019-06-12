<template>
  <div>
    <div class="sortshow"  v-for="(item,index) in OptAll" :key="index">
      <router-link :to="{name:'details'}" tag="div"  class="sortshow-paint">
        <img :src="item.poster" alt>
      </router-link>
      <div class="sortshow-info">
        <router-link :to="{name:'details'}" tag="div"  class="infotitle">
          <a class="title">
            <span class="city">[深圳]{{item.properName}}</span>  
          </a>
        </router-link>
        <router-link :to="{name:'details'}" tag="div"  class="infotime">
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
        <router-link :to="{name:'details'}" tag="div"  class="showspot">“{{item.desc}}”</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex"
export default {
  name: "SortShow",
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
}
</script>

<style>
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

