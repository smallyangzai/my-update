<template>
  <div>
    <div class="minetop">
      <router-link :to="{name:'home'}" tag="div" class="position">返回</router-link>
      <div class="tophead">
        <p>我的</p>
      </div>
    </div>
    <div class="title">
      <div class="img">
        <img src="https://static.piaoniu.com/m/static/img/defaultAvatar.99f8eed.png">
      </div>
      <div class="login">
        <router-link :to="{name:'loginone'}" tag="div"  class="login_name">登陆</router-link>
      </div>
      <div class="me_title">
        <router-link :to="{name:'loginone'}" tag="span">个人主页</router-link>
        <span class="iconfont">&#xe505;</span>
      </div>
      <div class="count">
        <div class="item">
          <div class="num">0</div>
          <router-link :to="{name:'loginone'}" tag="div" class="text">想看</router-link>
        </div>
        <div class="item">
          <div class="num">0</div>
          <router-link :to="{name:'loginone'}" tag="div" class="text">评论</router-link>
        </div>
        <div class="item">
          <div class="num">0</div>
          <router-link :to="{name:'loginone'}" tag="div" class="text">关注</router-link>
        </div>
        <div class="item">
          <div class="num">0</div>
          <router-link :to="{name:'loginone'}" tag="div" class="text">粉丝</router-link>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="section">
        <div class="row">
          <div class="row-text">我的订单</div>
          <router-link :to="{name:'loginone'}" tag="div" class="row-hint">查看全部订单</router-link>
        </div>
      </div>
      <div class="Tsection">
        <div class="orders">
          <div class="prr">
            <div class="icon">
              <img src="https://static.piaoniu.com/m/static/img/order-topay.4cf62ce.png">
            </div>
            <router-link :to="{name:'loginone'}" tag="div" class="itext">待付款</router-link>
          </div>
          <div class="prr">
            <div class="icon">
              <img src="https://static.piaoniu.com/m/static/img/order-tosend.20248ed.png">
            </div>
            <router-link :to="{name:'loginone'}" tag="div" class="itext">待发货</router-link>
          </div>
          <div class="prr">
            <div class="icon">
              <img src="https://static.piaoniu.com/m/static/img/order-toreceive.d23cc4e.png">
            </div>
            <router-link :to="{name:'loginone'}" tag="div" class="itext">待收货</router-link>
          </div>
        </div>
      </div>
      <div class="Tsection">
        <div class="discount">
          <div class="ditem">
            <div class="dnum">0</div>
            <router-link :to="{name:'loginone'}" tag="div" class="dtext">优惠券</router-link>
          </div>
          <div class="ditem">
            <div class="dnum">0</div>
            <router-link :to="{name:'loginone'}" tag="div" class="dtext">礼品卡</router-link>
          </div>
        </div>
      </div>
      <div class="Tsection">
        <div class="pp">我的福利</div>
        <div class="tbtwo">
          <div class="tb">
            <router-link :to="{name:'loginone'}" tag="div" class="ii">
              <img src="https://static.piaoniu.com/m/static/img/icon-redpackage.e078ab8.png">
            </router-link>
            <div class="info">
              <router-link :to="{name:'loginone'}" tag="div" class="intext">邀请好友</router-link>
              <router-link :to="{name:'loginone'}" tag="div" class="tntext">返10元现金</router-link>
            </div>
          </div>
          <div class="tb">
            <router-link :to="{name:'loginone'}" tag="div" class="ii">
              <img src="https://static.piaoniu.com/m/static/img/icon-club.959250b.png">
            </router-link>
            <router-link :to="{name:'loginone'}" tag="div" class="info">
              <div class="intext">圈圈俱乐部</div>
              <div class="tntext">达人专属奖励</div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="Tsection">
        <router-link :to="{name:'loginone'}" tag="div" class="fo">
          <div class="ftext">地址管理</div>
          <div class="iconfont it">&#xe505;</div>
        </router-link>
        <router-link :to="{name:'help'}" tag="div" class="fo">
          <div class="ftext">帮助与客服</div>
          <div class="iconfont it">&#xe505;</div>
        </router-link>
        <router-link :to="{name:'businessjoin'}" tag="div" class="fo">
          <div class="ftext">卖家招募</div>
          <div class="iconfont it">&#xe505;</div>
        </router-link>
      </div>
    </div>
    <div class="footer">
      <div>
        <a href>关于我们&nbsp;&nbsp;|&nbsp;&nbsp;</a>
        <a href>联系我们</a>
      </div>
      <div>Copyright©2015-2018</div>
    </div>

    
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Mine"
};
</script>

<style scoped>
.minetop {
  height: 44px;
  width: 100%;
  background-color: #fff;
  top: 0;
  box-sizing: border-box;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  position: fixed;
  left: 0;
  overflow: hidden;
  z-index: 10;
}
.position {
  position: absolute;
  left: 14px;
  top: 0;
  font-size: 16px;
  line-height: 44px;
  height: 44px;
}
.tophead {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 44px;
  max-width: 200px;
  margin: 0 auto;
}
.tophead p {
  color: #525252;
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
}

.title {
  width: 100%;
  height: 172px;
  background-size: cover;
  overflow: hidden;
  position: relative;
  background: linear-gradient(270deg, #ff5aa5 0%, #ff2661 100%);
  margin-top: 44px;
}
.img img {
  width: 56px;
  height: 56px;
  position: absolute;
  left: 18px;
  top: 37px;
  border: none;
  border-radius: 50%;
  /* background: yellow; */
}
.login {
  /* width: 283px;
    height: 28px; */
  margin-left: 92px;
}
.login_name {
  color: #fff;
  font-size: 18px;
  margin-top: 44px;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-right: 105px;
  white-space: nowrap;
  margin-bottom: 7px;
}
.me_title {
  position: absolute;
  margin-top: -28px;
  height: 32px;
  line-height: 32px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  right: 0;
  font-size: 12px;
  width: 79px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
}
.me_title span {
  line-height: 32px;
  font-size: 12px;
  color: #fff;
}
.count {
  position: absolute;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 49px;
  align-items: center;
}
.count .item {
  text-align: center;
  color: #fff;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 1.3;
}
.count .item .num {
  font-size: 15px;
  text-align: center;
  color: #fff;
}
.count .item .text {
  font-size: 12px;
  text-align: center;
  color: #fff;
}

.content {
  background: #f6f7f9;
}
.row {
  background: #fff;
  height: 45px;
  position: relative;
}
.row .row-text {
  font-size: 16px;
  color: #262626;
  font-weight: 500;
  position: absolute;
  left: 19px;
  text-align: center;
  line-height: 44px;
}
.row .row-hint {
  position: absolute;
  right: 34px;
  text-align: center;
  font-size: 14px;
  color: #999;
  line-height: 45px;
}
.Tsection {
  margin-bottom: 10px;
  margin-top: 1px;
  background: #fff;
}
.orders {
  display: flex;
  height: 68px;
}
.orders .prr {
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.icon img {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  margin-bottom: 8px;
  width: 22px;
  height: 22px;
  position: relative;
}
.itext {
  font-size: 12px;
  color: #666;
  text-align: center;
}
.discount {
  display: flex;
}
.ditem {
  flex: 1;
  height: 70px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.ditem .dnum {
  font-size: 16px;
  margin-bottom: 8px;
  color: #ff2661;
  text-align: center;
}
.ditem .dtext {
  font-size: 12px;
  font-weight: 400;
  color: #666;
  text-align: center;
}
.pp {
  padding-left: 19px;
  height: 39px;
  line-height: 39px;
  font-weight: 500;
  font-size: 16px;
}
.tbtwo {
  height: 79px;
  display: flex;
}
.tb {
  flex: 1;
  margin-top: 18px;
  margin-left: 20px;
  position: relative;
}
.ii img {
  width: 48px;
  height: 48px;
  position: absolute;
  left: 0;
  top: -3px;
  background-size: 48px 48px;
  /* background: green; */
}
.info {
  margin-left: 58px;
}
.intext {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 9px;
  color: #262626;
}
.tntext {
  font-size: 11px;
  color: #999;
}
.fo {
  margin-left: 19px;
  height: 44px;
  position: relative;
}
.fo .it {
  float: right;
  line-height: 44px;
  margin-right: 10px;
}
.ftext {
  position: absolute;
  left: -1px;
  text-align: center;
  line-height: 44px;
  font-size: 14px;
}
.footer {
  color: #ccc;
  font-size: 11px;
  text-align: center;
  line-height: 16px;
  padding-top: 16px;
  background: #f6f7f8;
}
.footer div {
  color: #ccc;
  font-size: 11px;
  text-align: center;
  line-height: 16px;
}
.footer div a {
  color: #ccc;
}
</style>
