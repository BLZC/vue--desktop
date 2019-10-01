<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data () {
    return {

    };
  }
};
</script>
<style>
.vue-grid-item.vue-grid-placeholder {
  background: none !important;
  transition-duration: 100ms;
  z-index: 2;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.vue-grid-item {
  cursor: default !important;
}
.el-dialog {
  overflow: hidden;
  resize: both;
}
.el-dialog__header {
  background-color: #eee;
}
</style>
