<template>
  <div>
    <div class="top">
      <div class="position">返回</div>
      <div class="head">
        <p>抢手票</p>
      </div>
    </div>
    <div class="ul-list">
      <ul class="actives">
        <li class="lili">
          <div class="show">
            <div class="img">
              <div class="toptag">
                <span class="num">9</span>
                <span class="filter">.0</span>
                <span class="chinese">折</span>
              </div>
              <div class="imglog"></div>
            </div>
            <div class="info">
              <div class="info-title">
                <a class="title-a">[北京]中国北京世界园艺博览会</a>
                <div class="what">
                  <span>电</span>
                </div>
              </div>
              <div class="time-adress">
                <span class="time">2019.04.29 - 10.07</span>
                <span class="split">|</span>
                <span class="adress">北京-世园会</span>
              </div>
              <div class="rank">
                评分&nbsp;
                <span>10.0</span>
              </div>
              <div class="price-wrap">
                <span class="price">80</span>
                <span class="qi">元起</span>
              </div>
              <div class="post">"打造一座会"呼吸"、有"生命"的绿色建筑"</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotTickets"
};
</script>

<style scoped>
.top{
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
.ul-list{
    width: 100%;
    background: #fff;
    padding-top: 44px;
}
.actives{
    margin: 0;
    padding: 0;
    line-height: 1.2;
    color: #262626;
    font-size: 14px;
}
.lili{
    position: relative;
    margin-left: 15px;
    margin-right: 15px;
    background-color: #fff;
}
.show{
    min-height: 125px;
    position: relative;
    display: block;
}
.img{
    position: absolute;
    left: 0;
    top: 15px;
}
.toptag{
    position: absolute;
    top: -3px;
    left: 2px;
    width: 28px;
    height: 30px;
    background-size: 100%;
    text-align: center;
    color: #fff;
   background: pink;
}
.num{
    position: absolute;
    top: 0;
    left: 1px;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    color: #fff;
}
.filter{
    position: absolute;
    top: 4px;
    right: 4px;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    color: #fff;
}
.chinese{
    position: absolute;
    bottom: 4px;
    right: 4px;
    font-size: 8px;
    text-align: center;
    color: #fff;
}
.imglog{
    background-image: url(https://img.piaoniu.com/poster/67302ef7265d3245b88bbdf263b2c0c123495afe.jpg?imageView2/2/w/164/h/220/format/jpg/q/60);
    width: 75px;
    height: 100px;
    background-size: cover;
    background-position: 50%;
}
.info{
    padding-top: 15px;
    margin-left: 92px;
    border-bottom: 1px solid hsla(0,0%,90%,.5);
}
.info-title{
    display: flex;
}
.title-a{
    font-size: 15px;
    color: #333;
    max-height: 44px;
    line-height: 22px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
}
.what{
    flex-shrink: 0;
    max-width: 40px;
    margin-left: 4px;
    color: #fff;
}
.what span{
    bottom: 12px;
    text-align: center;
    font-size: 10px;
    display: inline-block;
    margin-right: 5px;
    border-radius: 2px;
    padding: 1px;
    width: 15px;
    height: 15px;
    background-color: #96a3ff;
    box-sizing: border-box;
}
.time-adress{
    font-size: 12px;
    color: #999;
    margin-top: 9px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.time-adress .split{
    margin: 0 4px;
}
.rank{
    font-size: 10px;
    color: #999;
    margin-top: 4px;
    margin-bottom: 16px;
}
.rank span{
    font-size: 12px;
    font-weight: 700;
    color: #ffb02e;
}
.price-wrap{
    position: relative;
    margin-bottom: 10px;
}
.price-wrap .price{
    position: relative;
    top: 1px;
    color: #ff2661;
    font-size: 18px;
    font-weight: 700;
    margin-right: 4px;
}
.price-wrap .qi{
    font-size: 10px;
    color: #999;
}
.post{
    font-size: 12px;
    color: #999;
    padding: 14px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    border-top: 1px solid hsla(0,0%,90%,.5);
    margin-top: 10px;
}
</style>
