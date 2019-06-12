<template>
    <div class="bottom-container">
        <router-link :to="{name:'help'}" tag="div" href="#" class="custom-service">
            <div class="iconfont">&#xe696;</div>
            <div class="text">客服</div>
        </router-link>
        <router-link :to="{name:'loginone'}" tag="div" class="bottom-btn">
            直接购票
        </router-link>
        <div style="display: none;">
            <div class="inform-success-pop">
                <div class="concern-success-icon"></div>
                <div class="concern-success-text">关注成功</div>
                <div class="inform-message">有票后我们会短信通知你～</div>
                <div class="confirm-btn pop-close">知道了</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "DetailsShop"
};
</script>

<style scoped>
.bottom-container {
    position: fixed;
    display: flex;
    height: 49px;
    width: 100%;
    bottom: 0;
    z-index: 9;
}
.custom-service {
    width: 65px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #e6e6e6;
}
.custom-service .iconfont {
    font-size: 18px;
    margin-bottom: 2px;
    background-size: contain;
}
.custom-service .text {
    height: 16px;
    line-height: 16px;
    text-align: center;
    font-size: 11px;
    color: #666;
}
.bottom-btn {
    width: 310px;
    height: 49px;
    line-height: 49px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    background-color: #ff2661;
}
</style>
