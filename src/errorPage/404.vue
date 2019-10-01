<template>
  <div class="Page">
    <div class="h1">404</div>
    <div class="h2">页面丢了</div>
    <div class="h3">
      <router-link to="/index">返回首页</router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.Page {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  margin-top: 100px;
  .h1 {
    font-size: 120px;
    font-weight: 600;
    color: #999;
  }
  .h2 {
    font-size: 24px;
    font-weight: 600;
  }
  .h3 {
    font-size: 20px;
    margin-top: 40px;
    color: blue;
  }
}
</style>
