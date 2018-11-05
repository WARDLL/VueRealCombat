<template>
  <ul class="list">
    <!-- .prevent为时间修饰符，可以阻止touchstart的默认行为 -->
    <li class="item" v-for="item of letters" :key="item" :ref="item" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" @click="handleLetterClick">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  //   把cities转化为数组
  computed: {
    letters() {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  //   data里定义标识位置
  // 触发start才可以触发move
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  // 当页面被更新，同时页面完成渲染后
  updated() {
    // Header栏底部离A字母的距离
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick(e) {
      // 点击向外触发事件
      //   父组件City.vue来监听事件
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        // 节流,大大节省handleTouchMove执行频率
        if (this.timer) {
          // 如果已经存在了，就去除掉
          clearTimeout(this.timer)
        }
        // 否则创建一个timer
        this.timer = setInterval(() => {
          // Header栏底部离A字母的距离
          // const startY = this.$refs['A'][0].offsetTop
          // Header栏底部离离手指得距离=手指离最顶部的距离-Header栏高度79
          const touchY = e.touches[0].clientY - 79
          // 当前手指滑动位置对应字母的下标
          // 13为line-height
          const index = Math.floor((touchY - this.startY) / 13)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width 0.4rem
  .item
    line-height 0.26rem
    text-align center
    color $bgColor
</style>
