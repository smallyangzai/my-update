<template>
    <div class="sortoption">
        <ul>
            <router-link v-for="(item,index) in options" :to="item.path" tag="li" :key="index">
                <span>{{item.title}}</span>
            </router-link>
        </ul>

           <keep-alive>
               <router-view></router-view>
           </keep-alive>
    </div>
</template>

<script>
export default {
    name:"SortOption",
        data(){
            return {
                options:[
                    {
                        title:"全部分类",
                        path:"/m"
                    },
                    {
                        title:"演唱会",
                        path:"/"
                    },
                    {
                        title:"话剧歌剧",
                        path:"/"
                    },
                    {
                        title:"休闲展览",
                        path:"/"
                    },
                    {
                        title:"体育赛事",
                        path:"/"
                    },
                    {
                        title:"旅游玩乐",
                        path:"/"
                    },
                    {
                        title:"音乐会",
                        path:"/"
                    },
                    {
                        title:"儿童亲子",
                        path:"/"
                    },
                    {
                        title:"舞蹈芭蕾",
                        path:"/"
                    },
                    {
                        title:"戏曲综艺",
                        path:"/"
                    }
                ]
            }
        }
}
</script>

<style scoped>
.sortoption{
    z-index:12;
    width: 100%;
    height: 39px;
    border-bottom: 1px solid #e5e5e5;
    background-color: #fcfcfc;
}
.sortoption > ul{
    height: 39px;
    width: 100%;
    line-height: 39px;
    display: flex;   
    white-space: nowrap;
    overflow-x: auto;
    box-shadow: 0 0.5px 0 0 #e6e6e6;
}
.sortoption > ul > li{
    height: 39px;
    font-size: 14px;
    width: 100px;
    margin-left:28px;
}
.sortoption > ul > li:first-child {
    border-bottom: 3px solid #ff2661;
    color: #ff2661;
    margin-left:20px;
}
/* .sortoption .router-link-active{
    border-bottom: 3px solid #ff2661;
    color: #ff2661;
} */
</style>
