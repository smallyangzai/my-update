<template>


    <div class="scroll-ul">
        
        <Search></Search>
        <HomeHeader></HomeHeader>
        <HomeBanner></HomeBanner>
        <HomeEntris></HomeEntris>
        <HomeCategories></HomeCategories>
        <HomeService></HomeService>
        <HomeLikeWrap></HomeLikeWrap>
        <HomeDaBanner></HomeDaBanner>
        <HomeMore></HomeMore>
        <HomeSort></HomeSort>
         
    </div>

</template>


<script>
import HomeHeader from '@components/Homelist/Header'
import HomeBanner from '@components/Homelist/Banner'
import HomeDaBanner from '@components/Homelist/DaBanner'
import HomeEntris from '@components/Homelist/Entris'
import HomeLikeWrap from '@components/Homelist/LikeWrap'
import HomeMore from '@components/Homelist/More'
import HomeSort from '@components/Homelist/Sort'
import HomeService from '@components/Homelist/Title'
import HomeCategories from '@components/Homelist/Categories'
import Search from '@components/Homelist/Search'
export default {
    name:"Home",
    components:{
        HomeHeader,
        HomeBanner,
        HomeDaBanner,
        HomeEntris,
        HomeLikeWrap,
        HomeMore,
        HomeSort,
        HomeService,
        HomeCategories,
        Search,
    }
}
</script>

<style>
.scroll-ul{
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        position: relative;
        z-index: 1;
       
}
</style>


