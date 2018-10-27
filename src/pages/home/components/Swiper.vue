<template>
  <div class="wrapper">
    <!-- 解决轮播图首图顺序问题 -->
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <!-- 循环图片 并绑定图片地址 -->
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- 轮播图页码点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 让轮播插件支持循环轮播
        loop: true,
        autoplay: 3000
      }
    }
  },
  // 解决轮播图首图顺序问题
  computed: {
    showSwiper() {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
// 样式穿透 不受scoped限制
.wrapper>>>.swiper-pagination-bullet-active
  background #ffffff
// 包裹div 撑开元素 防止网速过慢时排版错误
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 26.66%
  background #cccccc
  .swiper-img
    width 100%
</style>
