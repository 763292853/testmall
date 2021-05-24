<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swi-per :list="banners"></swi-per>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabclick"
    ></tab-control>
   <goods-list :goods="goods[clickType].list"></goods-list>
  </div>
</template>

<script>
//轮播区域
import SwiPer from "components/common/swiper/SwiPer";
//展示区域
import RecommendView from "./childComps/RecommendView";
// 图片展示
import FeatureView from "./childComps/FeatureView";
//---------------------------------------
//头部导航区域
import NavBar from "components/common/navbar/NavBar";
//带有tab功能的展示页组件
import TabControl from "components/content/tabControl/TabControl.vue";
//大模块展示
import GoodsList from '../../components/content/goods/GoodsList'

//获取数据
import { getHomeMultidata ,getHomeGoods} from "network/home";


export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      clickType:'pop'
    };
  },
  created() {
    //请求多个数据
    this.getHomeMultidata();
    // //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    
  },
  methods: {
    //事件监听相关事件
    tabclick(index){
      switch(index){
        case 0:
          this.clickType='pop';
          break
        case 1:
          this.clickType='new';
          break
          case 2:
          this.clickType='sell';
          break
      }
    },
    //网络请求相关的方式
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        let {data} =res;
        this.goods[type].list.push(...data.list)
        this.goods[type].page=page
      });
    },
  },
  components: {
    NavBar,
    SwiPer,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
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
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 999;
}
</style>
