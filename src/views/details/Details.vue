<template>
    <div class="details">
      <router-view></router-view>
      <DetailsNav/>
      <DetailsHead/>
      <DetailsSection/>
      <DetailsShop/>
    </div>
</template>

<script>
import DetailsNav from "@components/details/DetailsNav"
import DetailsHead from "@components/details/DetailsHead"
import DetailsSection from "@components/details/DetailsSection"
import DetailsShop from "@components/details/DetailsShop"

export default {
    name:"Details",
    components:{
      DetailsNav,
      DetailsHead,
      DetailsSection,
      DetailsShop
    }
  }
</script>

<style scoped>

</style>
