<template>
  <div class="goodsitem">
    <a :href="goodsItem.link">
        <img :src="goodsItem.show.img" alt="" />
    <div class="goodsinfo">
      <p>
        {{ goodsItem.title }}
      </p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.goodsitem {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goodsitem a{
    color: #000;
}
.goodsitem img {
  width: 100%;
  border-radius: 5px;
}
.goodsinfo {
  font-size: 12px;
  position: absolute;
  bottom: 1px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goodsinfo p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodsinfo .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goodsinfo .collect {
  position: relative;
}
.goodsinfo .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.51miz.com%2FElement%2F00%2F37%2F06%2F44%2Fb5806198_E370644_86748549.png%21%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Fformat%2Fpng&refer=http%3A%2F%2Fimg.51miz.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624437299&t=8e189da13f697280da28a53048ba27eb")
    no-repeat;
  background-size: cover;
}
</style>
