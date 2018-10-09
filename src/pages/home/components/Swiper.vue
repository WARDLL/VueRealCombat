<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 让轮播插件支持循环轮播
        loop: true
      },
      // 循环轮播
      swiperList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1809/8a/ef38d29f2791f02.jpg_750x200_c2defee1.jpg'
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1809/bb/3796236479c84d02.jpg_750x200_57d68258.jpg'
        }
      ]
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
