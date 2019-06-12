<template>
    <div class="sub-categories">
        <div v-for="(item,index) in opions" class="categories" :key="index"><router-link :to="{name:'sort'}" tag="a"><img :src="item.src">
                <p>{{item.title}}</p>
            </router-link></div>            
    </div>
</template>

<script>
export default {
    name:"HomeCategories",
    data(){
        return{
            opions:[
                {
                    src:"http://assets.piaoniu.com/home/icons/category-child-small-v2.png",
                    title:"儿童亲子"
                },
                {
                    src:"http://assets.piaoniu.com/home/icons/category-xiqu-small-v2.png",
                    title:"戏曲综艺"
                },
                {
                    src:"http://assets.piaoniu.com/home/icons/category-dance-small.png",
                    title:"舞蹈芭蕾"
                },
                {
                    src:"http://assets.piaoniu.com/home/icons/category-travel-small.png",
                    title:"旅游玩乐"
                },
                {
                    src:"http://assets.piaoniu.com/home/icons/category-play-small-v2.png",
                    title:"更多精彩"
                },
            ]
        }
    }
}
</script>
<style>
.sub-categories {
    height: 74px;
    display: flex;
    justify-content: space-around;
    align-items: center
}

.sub-categories .categories {

    width: 69px;
    height: 52px;
}

.sub-categories .categories img {
    margin-left: 18px;
    width: 26px;
    height: 26px;
}

.sub-categories .categories p {
    margin-top: 10px;
    margin-left: 7px;
    color: #444444;
    font-size: 14px;

}
</style>