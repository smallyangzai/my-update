<template>
    <div>
        <div class="sorttime">
            <div class="sorttime-all">综合排序<span class="iconfont">&#xe712;</span></div>
            <div class="sorttime-all">全部时间<span class="iconfont">&#xe712;</span></div>
            <div class="sorttime-online">在线选座</div>
        </div>
    </div>
</template>

<script>
export default {
    name:"SortTime"
}
</script>

<style scoped>
.sorttime{
    width: 100%;
    height: 39px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-around;
    font-size: 12px;
    z-index:12;
}
.sorttime-all > span{
    display: inline-block;
    padding-left: 5px;
    font-size: 10px;
    line-height: 39px;
    color: #262626
}
.sorttime-online{
    height: 39px;
    line-height: 39px;
}
.sorttime-paint{
    padding: 14px;
    width: 100%;
    padding-bottom: 0;
    background-color: #fff;
}
.sorttime-paint img{
    width: 347px;
    height: 104px;    
    display: block;
}
</style>
