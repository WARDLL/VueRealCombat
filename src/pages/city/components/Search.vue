<template>
  <div>
    <div class="search">
      <!-- v-model双向绑定 -->
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <!-- keyword有值时显示，无值时隐藏 -->
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">
          {{item.name}}
        </li>
        <!-- 如果list长度为0，才显示内容 【 v-show="!list.length"】-->
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配城市
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    //   如果list长度为0，才显示内容
    hasNoData() {
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      //   如果搜索不存在，让list变成空数组
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setInterval(() => {
        const result = []
        // 如果能在spell或name里面搜索到关键词就把这项添加到result中
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    // 改变城市内容并跳转
    // handleCityClick(city) {
    //   this.$store.commit('changeCity', city)
    //   // 编程式导航
    //   this.$router.push('/')
    // },
    handleCityClick(city) {
      //   this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    // 把名为changeCity的mutations映射到名为changeCity的方法里
    ...mapMutations(['changeCity'])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height 0.72rem
  background $bgColor
  padding 0 0.1rem
  .search-input
    box-sizing border-box
    width 100%
    height 0.62rem
    padding 0 0.1rem
    line-height 0.62rem
    text-align center
    border-radius 0.06rem
    color #666666
.search-content
  z-index 1
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #eeeeee
  .search-item
    line-height 0.62rem
    padding-left 0.2rem
    color #666666
    background #ffffff
</style>
