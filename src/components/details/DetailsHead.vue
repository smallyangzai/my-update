<template>
  <div class="detailshead">
    <div class="head-intro">
      <div class="head-intro-img">
        <img src="../../../public/img/cz.jpg">
      </div>
      <div class="head-intro-content">
        <div class="top">
          <div class="title">2019深港澳国际车展</div>
          <span class="score">9.6</span>
          <span class="iconfont">&#xe659;</span>
          <span class="iconfont">&#xe659;</span>
          <span class="iconfont">&#xe659;</span>
          <span class="iconfont">&#xe659;</span>
          <span class="iconfont">&#xe659;</span>
        </div>
        <div class="price-line">
          <div class="price-info">
            <span class="price">38</span>
            <span class="qi">元起</span>
          </div>
          <div class="buy-num">已有522人购买👑</div>
        </div>
      </div>
      <div class="head-option">
        <router-link :to="{name:'loginone'}" tag="div" class="comment1">
          <span class="iconfont">&#xe707;</span>
          <span class="want">想看</span>
        </router-link>
        <router-link :to="{name:'loginone'}" tag="div" class="comment2">
          <span class="iconfont">&#xe620;</span>
          <span class="want">评论</span>
        </router-link>
      </div>
    </div>
    <div class="head-bottom">
      <div class="time">2019.06.01 - 06.09</div>
      <div class="venue">
        <div class="inner">
          <div class="name">深圳会展中心</div>
        </div>
        <div class="icon">
          <span class="iconfont">&#xe629;</span>
        </div>
      </div>
      <div class="ticket-info">
        <div class="text">购票须知</div>
        <div class="arr-right">
          <span class="iconfont">&#xe505;</span>
        </div>
      </div>
      <div class="service-info">
        <div class="text">平台保障</div>
        <div class="service-item">
          <span class="iconfont">&#xe610;</span>
          <span class="show">无票赔付</span>
        </div>
        <div class="service-item">
          <span class="iconfont">&#xe610;</span>
          <span class="show">出票保真</span>
        </div>
        <div class="service-item">
          <span class="iconfont">&#xe610;</span>
          <span class="show">配送保障</span>
        </div>
        <div class="arr-right">
          <span class="iconfont">&#xe505;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsHead"
};
</script>

<style>
.detailshead {
  height: 414px;
  width: 100%;
  position: absolute;
  top: 44px;
}
.head-intro {
  height: 210px;
  width: 100%;
  background-color: #292138;
}
.head-intro-img {
  float: left;
  height: 128px;
  width: 96px;
  margin-left: 15px;
  margin-top: 20px;
}
.head-intro-img > img {
  width: 96px;
  height: 128px;
}
.head-intro-content {
  position: relative;
  box-sizing: border-box;
  margin: 0 15px 16px 127px;
  min-height: 128px;
  color: #fff;
}
.top {
  padding-top: 20px;
  min-height: 100px;
  margin-bottom: 10px;
}
.top > .title {
  font-size: 17px;
  font-weight: 700;
  min-height: 44px;
  line-height: 22px;
  color: #fff;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 13px;
}
.score {
  font-size: 14px;
  color: #fdb146;
  margin-right: 6px;
}
.iconfont {
  font-size: 10px;
  color: #fdb146;
  margin-right: -5px;
}
.price-line {
  display: flex;
  align-items: center;
  color: #fff;
}
.price-info {
  flex: 1;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
}
.price {
  font-size: 24px;
  margin-right: 3px;
}
.qi {
  font-size: 12px;
}
.buy-num {
  font-size: 10px;
}
.head-option {
  color: #fff;
  margin: 16px 15px;
  position: absolute;
  top: 150px;
  display: flex;
}
.comment1 {
  width: 165px;
  height: 30px;
  background: #fff;
  background: hsla(0, 0%, 100%, 0.1);
  border-radius: 3px;
  text-align: center;
  margin-right: 15px;
  line-height: 30px;
}
.comment1 > .iconfont {
  color: #fff;
  font-size: 14px;
  margin-right: 2px;
}
.want {
  font-size: 16px;
}
.comment2 > .iconfont {
  color: #fff;
  font-size: 16px;
  margin-right: 2px;
}
.comment2 {
  width: 165px;
  height: 30px;
  background: #fff;
  background: hsla(0, 0%, 100%, 0.1);
  border-radius: 3px;
  text-align: center;
  line-height: 30px;
}
.head-bottom {
  padding-left: 14px;
}
.time {
  font-size: 16px;
  padding-top: 24px;
}
.venue {
  display: flex;
  align-items: center;
  height: 33px;
  border-bottom: 1px solid #f5f5f5;
  padding-bottom: 15px;
  padding-top: 20px;
}
.inner {
  margin-right: 11px;
  overflow: hidden;
  flex: 1;
}
.icon {
  padding: 0 22px;
  border-left: 1px solid #f5f5f5;
}
.venue .inner .name {
  font-size: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.icon .iconfont {
  color: #ff2661;
  font-size: 20px;
}
.ticket-info {
  position: relative;
  padding: 16px 0;
  border-bottom: 1px solid #f5f5f5;
}
.ticket-info .text {
  font-size: 13px;
  color: #333;
}
.arr-right {
  right: 14px;
  background-size: 8px 13px;
  height: 13px;
  width: 8px;
  position: absolute;
  top: 50%;
  margin-top: -7px;
  margin-right: 10px;
}
.arr-right .iconfont {
  font-size: 18px;
  color: darkgray;
}
.service-info {
    position: relative;
    padding: 16px 0;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
}
.service-info .text {
    margin-right: 20px;
    font-size: 13px;
    color: #333;
}
.service-item .iconfont{
    font-size: 14px;
    color: #ff2661;
    margin-left: 8px;
    margin-right: 1px;
}
.service-item .show{
    font-size: 13px;
}

</style>

