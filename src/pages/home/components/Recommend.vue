<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1409/16/1f41f64cbe3c64294e20ff6782f9017a.jpg_200x200_d6a62b3b.jpg',
          title: '国际大巴扎歌舞大剧院',
          desc: '新疆乌鲁木齐市天山区南端二道桥商业圈'
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1804/27/27390665a17dfb30a3.img.jpg_200x200_6a9d04b7.jpg',
          title: '新疆古生态园（野马美术馆）',
          desc:
            '新疆省乌鲁木齐市高新区昆明路158号野马国际大厦副楼4L新疆古生态园'
        },
        {
          id: '0003',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1804/c6/c6314468523a1c36a3.img.jpg_200x200_8acfda8d.jpg',
          title: '丝路秀',
          desc:
            '新疆维吾尔自治区乌鲁木齐市天山区龙泉街68号乌鲁木齐君邦天山饭店内'
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
.item
  overflow hidden
  display flex
  height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding 0.1rem
  .item-info
    flex 1
    padding 0.1rem
    // 防止文字溢出显示省略号失效
    min-width 0
    .item-title
      line-height 0.54rem
      font-size 0.32rem
      ellipsis()
    .item-desc
      line-height 0.4rem
      color #cccccc
      ellipsis()
    .item-button
      line-height 0.44rem
      margin-top 0.16rem
      background #ff9300
      border-radius 0.06rem
      color #ffffff
      width 1.5rem
</style>
