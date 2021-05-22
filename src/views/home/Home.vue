<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swi-per :list="banners"></swi-per>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>
    <ul>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
    </ul>
  </div>
</template>

<script>
//头部导航区域
import NavBar from "components/common/navbar/NavBar";
//轮播区域
import SwiPer from "components/common/swiper/SwiPer";
//

//展示区域
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
//带有tab功能
import TabControl from "components/content/tabControl/TabControl.vue";
//获取数据
import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
  components: {
    NavBar,
    SwiPer,
    RecommendView,
    FeatureView,
    TabControl,
  },
};
</script>
<style>
#home {
  padding: 44px 0 39px 0;
}
.home-nav {
  background-color: #ea7e9f;
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}
.tab-control{
  position: sticky;
  top: 44px;
}
</style>
