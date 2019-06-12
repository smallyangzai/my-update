<template>
    <div class="service-entry" id="title" style="block">
        <div class="title">服务保障</div>
        <div class="services">
            <div class="service-item">
                <span>无款赔付</span>
                <span class="line"></span>
            </div>
            <div class="service-item">
                <span>出票保真</span>
                <span class="line"></span>
            </div>
            <div class="service-item">
                <span>配送保障</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeService"
}
</script>
<style>
.service-entry {
    margin: 20px 16px;
    margin-bottom: 0;
    padding: 0 8px;
    height: 32px;
    line-height: 32px;
    background: #f5f5f5;
    background: hsla(0, 0%, 96%, .53);
    border-radius: 2px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.service-entry .service-item,
.service-entry .services {
    display: flex;
}

.service-entry .service-item {
    color: #999;
    font-size: 12px;
    align-items: center;
}

.service-entry .service-item .line {
    height: 12px;
    width: 1px;
    background-color: #e6e6e6;
    margin: 0 12px;
    display: inline-block;
}
</style>
