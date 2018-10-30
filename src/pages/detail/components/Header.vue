<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont hander-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop
      if (top > 50) {
        let opacity = top / 140
        // opacity最大值只能是1
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  // 每一次页面展示的时候会执行
  activated() {
    // 对window做事件的绑定
    window.addEventListener('scroll', this.handleScroll)
  },
  // 页面即将被隐藏或即将被替换成新页面的时候执行
  deactivated() {
    // 页面隐藏时再把全局事件解绑
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position absolute
  left 0.2rem
  top 0.2rem
  width 0.8rem
  height 0.8rem
  line-height 0.8rem
  border-radius 0.4rem
  text-align center
  background rgba(0, 0, 0, 0.8)
  .hander-abs-back
    color #ffffff
    font-size 0.4rem
.header-fixed
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #ffffff
  background $bgColor
  font-size 0.32rem
  .header-fixed-back
    position absolute
    top 0
    left 0
    width 0.64rem
    text-align center
    font-size 0.4rem
    color #ffffff
</style>
