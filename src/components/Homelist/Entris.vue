<template>
    <div class="home-entris">

        <div v-for="(item,index) in opions" class="main-categories" :key="index"><router-link :to="{name:'sort'}" tag="a"><img :src="item.src">
                <p>{{item.title}}</p>
            </router-link></div>
    </div>
</template>

<script>
export default {
    name:"HomeEntris",
    data(){
       return{
            opions:[
            {
                src:"http://assets.piaoniu.com/home/icons/category-live-large.png",
                title:"演唱会"
            },
            {
                src:"http://assets.piaoniu.com/home/icons/category-drama-large.png",
                title:"话剧歌剧"
            },
            {
                src:"http://assets.piaoniu.com/home/icons/category-exibition-large.png",
                title:"休闲展览"
            },
            {
                src:"http://assets.piaoniu.com/home/icons/category-sports-large.png",
                title:"话剧歌剧"
            },
            {
                src:"http://assets.piaoniu.com/home/icons/category-concert-large.png",
                title:"音乐会"
            },

        ]
       }
    }
}
</script>
<style>
.home-entris {
    height: 90px;
    display: flex;
    margin-left: 6px;
    margin-top: 10px;
    justify-content: space-around;
    align-items: center
}

.home-entris .main-categories {

    width: 68px;
    height: 68px;
}

.home-entris .main-categories img {
    margin-left: 10px;
    width: 42px;
    height: 42px;
}

.home-entris .main-categories p {
    margin-top: 10px;
    margin-left: 6px;
    color: #444444;
    font-size: 14px;

}
</style>
