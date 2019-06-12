<template>
    <div>
        <div class="helptop">
            <router-link :to="{name:'mine'}" tag="div" class="position">返回</router-link>
            <div class="head">
                <p>帮助与客服</p>
            </div>
        </div>
        <div class="content">
            <div class="question">
                <div class="qtitle">订购说明</div>
                <div class="qitem">订购渠道</div>
                <div class="qitem">演出状态</div>
                <div class="qitem">如何订购</div>
                <div class="qitem">价格说明</div>
            </div>
            <div class="question">
                <div class="qtitle">配送方式</div>
                <div class="qitem">顺丰配送</div>
                <div class="qitem">现场取票</div>
                <div class="qitem">上门自取</div>
                <div class="qitem">电子票</div>
            </div>
            <div class="question">
                <div class="qtitle">支付方式</div>
                <div class="qitem">在线支付</div>
                <div class="qitem">花呗</div>
                <div class="qitem">银行卡支付</div>
            </div>
            <div class="question">
                <div class="qtitle">售后服务</div>
                <div class="qitem">退换票说明</div>
                <div class="qitem">退款说明</div>
                <div class="qitem">退款条件</div>
            </div>
        </div>
        <div class="helpbottom">
            <div class="helpitem">
                <div><img src="https://static.piaoniu.com/m/static/img/phone.75c871e.png"></div>
                <span>咨询电话</span>
            </div>
            <div class="helpitem">
                <div><img src="https://static.piaoniu.com/m/static/img/ask.b901a74.png"></div>
                <span>在线客服</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Help"
}
</script>

<style scoped>
.helptop{
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
    padding-top:44px; 
    padding-bottom: 57px;
    background: #f9f9f9;
}
.question{
    background-color: #fff;
    padding-left: 15px;
    margin-bottom: 10px;
}
.qtitle{
    padding: 15px 0 3px;
    color: #565656;
    font-size: 17px;
    font-weight: 700;
    line-height: 24px;
}
.qitem{
    padding: 12px 14px 12px 0;
    color: #666;
    font-size: 15px;
    line-height: 21px;
    box-shadow: 0 1px 0 0 #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.helpbottom{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 44px;
    background-color: #fff;
    display: flex;
    align-content: center;
    box-shadow: 0 -1px 0 0 #e6e6e6;
    padding: 6px 0;
}
.helpitem{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    line-height: 16px;
}
.helpitem div img{
    width: 22px;
    height: 21px;
    margin-bottom: 4px;
}
</style>
