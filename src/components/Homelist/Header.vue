<template>
    <div class="header">
        <div class="dw-wrap" ><router-link :to="{name:'Citylist'}" tag="a">{{$store.state.city.nm}}<span class="iconfont">&#xe611;</span></router-link></div>
        <div class="search">
            <div class="search-wrap">
                <span class="iconfont">&#xe506;</span><input type="text" value="搜索明星、演出、场馆" onfocus="setStyle()">
            </div>

        </div>
        <div class="proson-wrap">
            <router-link :to="{name:'mine'}" tag="a" class="iconfont">&#xe62a;</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeHeader"
}
</script>


<style>
.header {
    display: flex;
    height: 44px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
}

.header .dw-wrap a {
    color: #262626;
    font-size: 14px;
}

.header .search .search-wrap input {
    border: none;
    background: #f5f5f5;
    color: #999999;
    font-size: 15px;
}

.header .search .search-wrap span {
    color: #999999;
    font-size: 16px;
    margin-left: 5px;
    margin-right: 5px;
}

.header .search {
    width: 245px;
    height: 33px;
    background: #f5f5f5;
    /* text-align: center; */
    border-radius: 15px;
    line-height: 33px;
}

.header .proson-wrap a {
    font-size: 18px;
    color: #262626;
}
</style>

