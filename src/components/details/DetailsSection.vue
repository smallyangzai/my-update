<template>
  <div class="section">
    <div class="section introduce">
      <div class="section-title">演出简介</div>
      <div class="content">
        <div class="inner" style="height: 300px;">
          <div class="cont">
            <p>
              <span>2019(第二十三届)深港澳**车展，将以“擎动大湾区，智电i Home”为主题，依旧是把现有的会展中心13万平米里里外外物尽其用。但从展馆布局可看出，品牌规划变得更加清晰明了：</span>
            </p>
            <p>&nbsp;</p>
            <p>
              <span>1号馆&amp;2号馆=合资&amp;自主品牌馆</span>
            </p>
            <p>
              <span>3号馆&amp;4号馆=电动+新能源&amp;智能出行馆</span>
            </p>
            <p>
              <span>5号馆=梅赛德斯奔驰--品牌专馆</span>
            </p>
            <p>
              <span>6号馆=奥迪--品牌专馆</span>
            </p>
            <p>
              <span>7号馆=宝马品牌专区、雷克萨斯全球首展车型</span>
            </p>
            <p>
              <span>8号馆=超跑豪座品牌馆</span>
            </p>
            <p>
              <span>9号馆=豪华品牌馆</span>
            </p>
            <p>&nbsp;</p>
            <p>
              <span>一边观摩“回到未来”概念车博物馆里引自全球的精品车模；</span>
            </p>
            <p>&nbsp;</p>
            <p>
              <span>当然，还能熏陶“文化沙龙”里十多场汽车名人专业讲座；</span>
            </p>
            <p>&nbsp;</p>
            <p>
              <span>在儿童绘画“0排放回收站”，你会发现环保还有另类玩法；</span>
            </p>
          </div>
        </div>
        <div class="more">
          <div class="shadow"></div>
          <div class="text">
            展开更多
                <span class="iconfont">&#xe613;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsSection"
};
</script>

<style scoped>
.section{
  position: relative;
}
.section .introduce{
    width: 100%;
    position: absolute;
    top: 440px;
    border-top:15px solid #f6f7f9;
    min-height: 400px;
}
.section .section-title {
    position: relative;
    font-weight: 700;
    font-size: 15px;
    padding-left: 15px;
    margin-bottom: -15px;
    overflow: hidden;
    height: 55px;
    line-height: 55px;
}
.section>.content {
    line-height: 1.6;
    font-size: 15px;
    padding: 5px 14px 0;
    color: #666;
    margin-bottom: 15px;
}
.content .more {
    position: absolute;
    left: 0;
    bottom: -30px;
    width: 100%;
}
.content .more .text {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    text-align: center;
    color: #5fb7fc;
}
.content .more .text .iconfont{
    font-size: 18px;
    color: #5fb7fc;
}
</style>
