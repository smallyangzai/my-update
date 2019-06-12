<template>
  <div class="banner">
    <div class="banner-wrap">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img  :src="image">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  name: "HomeBanner",
  data(){
    return {
      images: [
        'https://img.piaoniu.com/misc/6320c9c05700417d8678b1f1ae3c97d5319ecb74.jpg?                 imageView2/2/w/750/h/350/format/jpg/q/80',
        'https://img.piaoniu.com/misc/2889a7a286c5efe0c365ab82664f5f2e974c3155.jpg?                 imageView2/2/w/750/h/350/format/jpg/q/80',
        'https://img.piaoniu.com/misc/848a95fab63b3bbe208ea5f7d8fb622f18e2275e.png?                 imageView2/2/w/750/h/350/format/jpg/q/80',
        'https://img.piaoniu.com/misc/9aa590c23c8ca967e514c6e2213643b7f80ebfb8.png?                 imageView2/2/w/750/h/350/format/jpg/q/80',
        'https://img.piaoniu.com/misc/158845cb9296c70e3f43f822bf7c6169ed2161f8.jpg?                 imageView2/2/w/750/h/350/format/jpg/q/80',
        'https://img.piaoniu.com/misc/3e1fda5aa5a32568280ce5892b2160179806ef0f.jpg?                 imageView2/2/w/750/h/350/format/jpg/q/80',
        'https://img.piaoniu.com/misc/63b4cf0da77efcf59480b1023180c76feeaa9f42.png?                 imageView2/2/w/750/h/350/format/jpg/q/80'


      ]
    }
  }
};
</script>
<style>
.banner {
   
    width: 100%;
    
}

.banner .banner-wrap img{
  margin-left: 16px;
  height: 104px;
  
}
</style>

