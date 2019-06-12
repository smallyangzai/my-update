<template>
    <div class="sort">
       <router-view></router-view>
       <SortSearch/>
       <SortOption/>
       <SortTime/>
       <SortShow/>
    </div>
</template>

<script>
import SortSearch from "@components/sort/SortSearch"
import SortOption from "@components/sort/SortOption"
import SortTime from "@components/sort/SortTime"
import SortShow from "@components/sort/SortShow"

export default {
    name:"Sort",
    components:{
        SortSearch,
        SortOption,
        SortTime,
        SortShow
    }
  }
</script>

<style scoped>

</style>
