<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-carousel triger="change" height="150px">
      <el-carousel-item class="carousel-item" v-for="(item, index) in list" :key="index">
        <a :href="item.link"><img :src="item.image" alt="" /></a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "SwiPer",
  data() {
    return {};
  },
  created() {},
  props: ["list"],
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.carousel-item img {
    width: 100%;
}
</style>
