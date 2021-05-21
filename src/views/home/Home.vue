<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swi-per :list="banners"></swi-per>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
//头部导航区域
import NavBar from "components/common/navbar/NavBar";
//轮播区域
import SwiPer from "components/common/swiper/SwiPer"
//展示区域
import RecommendView from './childComps/RecommendView'

//获取数据
import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners:[],
      recommends:[]
    };
  },
  created() {
    getHomeMultidata().then((res)=>{
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list
    });
  },
  components: {
    NavBar,
    SwiPer,
    RecommendView
  
  },
};
</script>
<style>
.home-nav {
  background-color: #ea7e9f;
  color: #fff;
}
</style>
