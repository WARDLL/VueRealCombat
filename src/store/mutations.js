export default {
  // 当用户改变城市时，还要存储localStorage
  changeCity(state, city) {
    state.city = city
    // 防止用户隐身模式导致浏览器报错
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
