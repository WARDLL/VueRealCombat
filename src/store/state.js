let defaultCity = '青岛'
// 防止用户隐身模式导致浏览器报错
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {

}

export default {
  //   公用城市数据
  // 优先取localStorage.city的值
  city: defaultCity
}
