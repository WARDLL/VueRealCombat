<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <!-- 父组件通过属性的方式传递给子组件List.vue -->
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <!-- 监听change事件 -->
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>

</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      // 父组件通过属性的方式传递给子组件List.vue
      letter: ''
    }
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange(letter) {
      this.letter = letter
    }
  },
  mounted() {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
