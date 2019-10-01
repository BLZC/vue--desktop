<template>
  <div class="basic-footer">
    <div class="item">
      <i class="iconfont iconwindows"></i>
    </div>
    <div class="item-list"
         v-for="(item, index) in List"
         :key="index">
      <i :class="item"></i>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    };
  },
  computed: {
    List () {
      return this.$store.state.list;
    }
  }
};
</script>
<style lang="scss" scoped>
.basic-footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 50px;
  background-color: #000;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .item,
  .item-list {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    .iconfont {
      font-size: 24px;
      color: #fff;
    }
  }
  .item:hover,
  .item-list:hover {
    background-color: rgb(73, 62, 62);
  }
}
</style>
