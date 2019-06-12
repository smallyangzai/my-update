<template>
    <div>
        <nav class="detailsnav">
            <router-link :to="{name:'sort'}" tag="div" class="nav-back">返回</router-link>
            <div class="nav-wrap">
                <div class="nav-title">演出详情</div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name:"DetailsNav"
}
</script>

<style scoped>
.detailsnav{
    height: 44px;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    overflow: hidden;
    z-index: 10;
}
.nav-back{
    position: absolute;
    left: 14px;
    font-size: 16px;
    line-height: 44px;
    height: 44px;
}
.nav-wrap{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 44px;
    max-width: 200px;
    margin: 0 auto;
}
.nav-title{
    color: #525252;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 600;
}
</style>
