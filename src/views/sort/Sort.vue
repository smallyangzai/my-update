<template>
    <div class="sort">
       <router-view></router-view>
       <SortSearch/>
       <SortOption/>
    </div>
</template>

<script>
import SortSearch from "@components/sort/SortSearch"
import SortOption from "@components/sort/SortOption"
import SortTime from "@components/sort/SortTime"
import OptAll from "@components/sortoptions/OptAll"

export default {
    name:"Sort",
    components:{
        SortSearch,
        SortOption,
        SortTime,
        OptAll
    }
  }
</script>

<style scoped>

</style>
