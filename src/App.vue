<template>
  <div id="app">
    <!-- 路由被加载过一次后，就把路由放入内存之中 -->
    <!-- 下次再执行路由的时候不需要重新渲染该组件 -->
    <!-- 直接从内存掉数据，不会发送ajax请求 -->
    <!-- 除了Deatil组件，其他的组件都会被缓存 -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
