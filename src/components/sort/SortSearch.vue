<template>
   <div class="sortsearch">
       <div class="searchback">
           <router-link :to="{name:'home'}" tag="a">返回</router-link>
        </div>
        <div class="searchbox">
            <div class="search">
                <div class="sortsearch-search">
                    <span class="iconfont">&#xe60d;</span>
                    <span class="searchplace">搜索明星、演出、场馆</span>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
export default {
    name:"SortSearch",
    methods:{
        goback:function(){
            this.$router.push({path:'/home'})
        }
    }
}
</script>

<style scoped>
.sortsearch{
    z-index:12;
    height: 44px;
    width: 100%;
    border-bottom: 1px solid #b8a9a9;
    display: flex;
    position: relative;
}
.searchback{
    height: 44px;
    min-width: 28px;
    line-height: 44px;
    padding: 0 20px 0 10px;
    font-size: 16px;
}
.searchbox{
    width: 80%;
}
.search{
    height: 34px;
    line-height: 34px;
    margin: 5px 5px;
    position: relative;
    background-color: #f2f2f2;
    border-radius: 3px;
}
.sortsearch-search{    
    display: block;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}
.sortsearch-search span:first-child{
    width: 15px;
    height: 17px;
    position: absolute;
    left: 14px;
    top: 10px;
    margin-top: -9px;
}
.sortsearch-search span:last-child{
    font-size: 12px;
    color: #666;
    margin-left: 37px;
}
</style>

