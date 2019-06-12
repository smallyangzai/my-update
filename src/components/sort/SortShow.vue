<template>
  <div>
    <router-link :to="{name:'details'}" tag="div" class="sortshow">
      <div class="sortshow-paint">
        <img src="../../../public/img/fyq.jpg" alt>
      </div>
      <div class="sortshow-info">
        <div class="infotitle">
          <a class="title">
            <span class="city">[深圳]</span>
            李宗盛深圳演唱会
          </a>
        </div>
        <div class="infotime">
          <span class="time">2019.07.07 19:30</span>
          <span class="split">|</span>
          <span class="address">深圳大运中心体育馆</span>
        </div>
        <div class="infomark">
          评分
          <span class="mark">10.0</span>
        </div>
        <div class="infoprice">
          <span>635</span>元起
        </div>
        <div class="showspot">“年少不听李宗盛”</div>
      </div>
    </router-link>
    <router-link :to="{name:'details'}" tag="div" class="sortshow">
      <div class="sortshow-paint">
        <img src="../../../public/img/fyq.jpg" alt>
      </div>
      <div class="sortshow-info">
        <div class="infotitle">
          <a class="title">
            <span class="city">[深圳]</span>
            李宗盛深圳演唱会
          </a>
        </div>
        <div class="infotime">
          <span class="time">2019.07.07 19:30</span>
          <span class="split">|</span>
          <span class="address">深圳大运中心体育馆</span>
        </div>
        <div class="infomark">
          评分
          <span class="mark">10.0</span>
        </div>
        <div class="infoprice">
          <span>635</span>元起
        </div>
        <div class="showspot">“年少不听李宗盛”</div>
      </div>
    </router-link>
    <router-link :to="{name:'details'}" tag="div" class="sortshow">
      <div class="sortshow-paint">
        <img src="../../../public/img/fyq.jpg" alt>
      </div>
      <div class="sortshow-info">
        <div class="infotitle">
          <a class="title">
            <span class="city">[深圳]</span>
            李宗盛深圳演唱会
          </a>
        </div>
        <div class="infotime">
          <span class="time">2019.07.07 19:30</span>
          <span class="split">|</span>
          <span class="address">深圳大运中心体育馆</span>
        </div>
        <div class="infomark">
          评分
          <span class="mark">10.0</span>
        </div>
        <div class="infoprice">
          <span>635</span>元起
        </div>
        <div class="showspot">“年少不听李宗盛”</div>
      </div>
    </router-link>
    <router-link :to="{name:'details'}" tag="div" class="sortshow">
      <div class="sortshow-paint">
        <img src="../../../public/img/fyq.jpg" alt>
      </div>
      <div class="sortshow-info">
        <div class="infotitle">
          <a class="title">
            <span class="city">[深圳]</span>
            李宗盛深圳演唱会
          </a>
        </div>
        <div class="infotime">
          <span class="time">2019.07.07 19:30</span>
          <span class="split">|</span>
          <span class="address">深圳大运中心体育馆</span>
        </div>
        <div class="infomark">
          评分
          <span class="mark">10.0</span>
        </div>
        <div class="infoprice">
          <span>635</span>元起
        </div>
        <div class="showspot">“年少不听李宗盛”</div>
      </div>
    </router-link>
    <router-link :to="{name:'details'}" tag="div" class="sortshow">
      <div class="sortshow-paint">
        <img src="../../../public/img/fyq.jpg" alt>
      </div>
      <div class="sortshow-info">
        <div class="infotitle">
          <a class="title">
            <span class="city">[深圳]</span>
            李宗盛深圳演唱会
          </a>
        </div>
        <div class="infotime">
          <span class="time">2019.07.07 19:30</span>
          <span class="split">|</span>
          <span class="address">深圳大运中心体育馆</span>
        </div>
        <div class="infomark">
          评分
          <span class="mark">10.0</span>
        </div>
        <div class="infoprice">
          <span>635</span>元起
        </div>
        <div class="showspot">“年少不听李宗盛”</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SortShow"
};
</script>

<style>
.sortshow {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8px;
  z-index: 8;
}
.sortshow-paint {
  padding: 14px;
}
.sortshow-paint > img {
  width: 75px;
  height: 100px;
}
.sortshow-info {
  margin-top: 10px;
  width: 280px;
}
.sortshow-info .infotitle .title {
  font-size: 15px;
  color: #333;
}
.infotime {
  font-size: 12px;
  color: #999;
  margin-top: 9px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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
  padding: 14px 0;
  margin-top: 10px;
  border-top: 1px solid hsla(0, 0%, 90%, 0.5);
  border-bottom: 1px solid hsla(0, 0%, 90%, 0.5);
}
</style>
