<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">
                            <!-- {{this.$store.state.city}} -->
                            <!-- 映射 -->
                            {{this.currentCity}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hotCities" :key="item.id" @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <!-- 对象循环 key值=key来定义-->
            <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <!-- 二次循环 -->
                    <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscoll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    // 把city组件映射到city计算属性里
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick(city) {
      //   this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    // 把名为changeCity的mutations映射到名为changeCity的方法里
    ...mapMutations(['changeCity'])
  },
  mounted() {
    this.scroll = new Bscoll(this.$refs.wrapper)
  },
  //   监听letter的变化
  watch: {
    letter() {
      if (this.letter) {
        //   如果letter不为空调用⬇️
        // 让better-scroll滚动区域自动滚动到某一元素上
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
    &:before
        border-color #cccccc
    &:after
        border-color #cccccc
.border-bottom
    &:before
        border-color #cccccc
.list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
        line-height 0.54rem
        background #eeeeee
        padding-left 0.2rem
        color #666666
    .button-list
        overflow hidden
        padding 0.1rem 0.6rem 0.1rem 0.1rem
        .button-wrapper
            float left
            width 33.33%
            .button
                margin 0.1rem
                padding 0.1rem 0
                text-align center
                border 0.02rem solid #cccccc
                border-radius 0.06rem
    .item-list
        .item
            line-height 0.76rem
            padding-left 0.2rem
</style>
