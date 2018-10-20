<template>
  <div>
    <div class="title">周末去哪儿 </div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1606/9c/d601bd634c8d50.jpg_r_640x214_909d1d4a.jpg',
          title: '银川必游TOP10',
          desc: '西夏王朝的首都，历史悠久的塞上古城'
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/b8/c42368761ac6c9.jpg_r_640x214_d76a2bd5.jpg',
          title: '兰州必游TOP5',
          desc: '初到兰州，必游圣地'
        },
        {
          id: '0003',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1511/14/1cf5dc2ecbfc16.jpg_r_640x214_b4b3a58a.jpg',
          title: '最美丝路行',
          desc: '情系西北，中国梦丝路行'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
// 文字溢出显示省略号
@import '~styles/mixins.styl'
.title
  margin-top 0.2rem
  line-height 0.8rem
  background #eeeeee
  text-indent 0.2rem
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 33.9%
  .item-img
    width 100%
.item-info
  padding 0.1rem
  .item-title
    line-height 0.54rem
    font-size 0.32rem
    ellipsis()
  .item-desc
    line-height 0.4rem
    color #cccccc
    ellipsis()
</style>
