<template>
     <div class="search-header-detail" style="display: none" id="hidden">
                <div class="search-header">
                    <div class="ui-searchbox">
                        <div class="ui-inner">
                            
                            <div>
                                <input type="text" placeholder="搜索明星、演出、场馆" class="search-input" onblur="Cancel()">
                                <div class="clear-input" style="display: none"></div>
                            </div>
                        </div>   
                    </div>
                     
                   
                </div>
                 <div class="search-header-shadow"></div>
                    <div class="suggest-wrap" style="display: none">
                        <div class="suggest-end">查找“”</div>
                    </div>
                    <div class="default-search list-keyword">
                        <div class="row-title">热门搜索</div>
                        <div class="hot-searches">
                            <div class="keyword">爱缪</div>
                            <div class="keyword">春浪音乐节</div>
                            <div class="keyword">CCG</div>
                            <div class="keyword">许巍</div>
                            <div class="keyword">UNINE</div>
                            <div class="keyword">男篮世界杯</div>
                            <div class="keyword">许嵩</div>
                        </div>
                        <div class="row-title">搜索记录</div>
                    </div>
        </div>

</template>

<script>
export default {
    name:"Search"
}
</script>
    
<style>
.search-header-detail {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
}
.search-header {
    width: 100%;
    height: 44px;
    overflow: hidden;
    background-color: #fff;
    position: relative;
    z-index: 10;
}
.ui-searchbox {
    border-radius: 3px;
    overflow: hidden;
}
.ui-searchbox .ui-inner {
    height: 34px;
    line-height: 34px;
    margin: 5px 8px;
    position: relative;
    background-color: #f2f2f2;
    border-radius: 4px;
}
.ui-searchbox .ui-inner .ui-wrap {
    display: block;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}
.ui-searchbox .ui-inner .ui-wrap .icon-search {
    background-image: url(//static.piaoniu.com/nuxt-static/img/search.0622317.png);
    background-size: 15px 17px;
    width: 15px;
    height: 17px;
    position: absolute;
    left: 14px;
    top: 50%;
    margin-top: -9px;
}
.ui-searchbox .ui-inner .ui-wrap .ui-placeholder {
    font-size: 12px;
    color: #666;
    margin-left: 37px;
}
.ui-searchbox .search-input {
    outline: none;
    color: #8f8f8f;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    background-color: transparent;
    padding: 0 15px;
}
.clear-input {
    position: absolute;
    right: 6px;
    top: 8px;
    width: 18px;
    height: 18px;
    background-image: url(//static.piaoniu.com/nuxt-static/img/close.47d02ac.png);
    background-size: 100%;
}
.search-header .cancel {
    height: 44px;
    margin-left: 320px; 
    font-size: 16px;
    color: #666;
}
.search-header-shadow {
    position: relative;
    z-index: 20;
    height: 1px;
    background-color: #fff;
    box-shadow: 0 1px 1.5px #c3c3c3;
}
.suggest-wrap {
    position: fixed;
    top: 45px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    padding-left: 14px;
    background-color: #fff;
    z-index: 16;
    box-sizing: border-box;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
.suggest-end {
    color: #4b8feb;
    text-align: center;
    padding: 15px 0;
}
.default-search {
    position: fixed;
    top: 44px;
    bottom: 0;
    overflow: auto;
    width: 100%;
    z-index: 15;
    background-color: #fff;
    transition: all .2s linear;
    opacity: 1;
}
.row-title {
    background-color: #f2f2f2;
    height: 32px;
    line-height: 32px;
    padding-left: 15px;
    color: #666;
}
.hot-searches {
    padding: 15px 0 0 15px;
    overflow: hidden;
}
.hot-searches .keyword {
    margin-right: 13px;
    margin-bottom: 13px;
    font-size: 14px;
    padding: 9px 13px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    float: left;
}
.row-title {
    background-color: #f2f2f2;
    height: 32px;
    line-height: 32px;
    padding-left: 15px;
    color: #666;
}
</style>
