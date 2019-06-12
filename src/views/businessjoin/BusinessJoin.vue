<template>
  <div>
    <div class="btop">
      <router-link :to="{name:'mine'}" tag="div" class="position">返回</router-link>
      <div class="head">
        <p>商家入驻</p>
      </div>
    </div>
    <div class="content">
      <div class="img">
        <img src="../../../public/img/bg.62648bf.png" alt>
      </div>
      <div class="tagItem">
        <div class="left">
          <div class="ltop">销量翻倍</div>
          <div class="lbottom">渠道丰富 客流量大</div>
        </div>
        <div class="item">
          <img src="../../../public/img/l1.png" alt>
        </div>
      </div>
      <div class="tagItem">
        <div class="left">
          <div class="ltop">奖励丰富</div>
          <div class="lbottom">顶起活动 怎加收益</div>
        </div>
        <div class="item">
          <img src="../../../public/img/l2.png" alt>
        </div>
      </div>
      <div class="tagItem">
        <div class="left">
          <div class="ltop">随时提现</div>
          <div class="lbottom">准时入账 结算灵活</div>
        </div>
        <div class="item">
          <img src="../../../public/img//l3.png" alt>
        </div>
      </div>
      <div class="tagItem">
        <div class="left">
          <div class="ltop">高效便捷</div>
          <div class="lbottom">挂售简单 实时编辑</div>
        </div>
        <div class="item">
          <img src="../../../public/img//l4.png" alt>
        </div>
      </div>
    </div>
    <div class="footer">
      <router-link :to="{name:'home'}" tag="div" class="button">立即加入</router-link :to="{name:'sort'}" tag="div">
    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessJoin"
};
</script>

<style scoped>
.btop{
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
.position{
    position: absolute;
    left: 14px;
    top: 0;
    font-size: 16px;
    line-height: 44px;
    height: 44px;
}
.head{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 44px;
    max-width: 200px;
    margin: 0 auto;
}
.head p{
    color: #525252;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 600;
}
.content{
    padding-top: 44px;
    padding-bottom: 70px;
}
.img img{
    width: 100%;
}
.tagItem{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 14px 0;
    padding: 0 25px 0 18px;
    height: 82px;
    background-image: linear-gradient(90deg,#f2faff,#ecf6ff);
}
.ltop{
    font-size: 16px;
    color: #333;
    font-weight: 700;
    margin-bottom: 12px;
}
.lbottom{
    font-size: 12px;
    color: #666;
}
.item img{
    width: 52px;
    height: 54px;;
}
.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 56px;
    line-height: 56px;
    background: #fff;
    box-shadow: 0 -1px 7px 0 rgba(49,161,248,.1);
    padding: 0 14px;
}
.button{
    display: inline-block;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background: #31a1f8;
    border-radius: 30px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
}
</style>
