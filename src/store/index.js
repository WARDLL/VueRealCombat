import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
// 使用Vuex插件
Vue.use(Vuex)
// 创建仓库
export default new Vuex.Store({
  // 存放公用数据
  state,
  mutations,
  // getters对应的是一个对象
  getters: {
    doubleCity(state) {
      return state.city + ' ' + state.city
    }
  }
})
