<template>
  <div class="home">
    <Main></Main>
    <basic-footer></basic-footer>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  computed: {

  },
  components: {
    BasicFooter: () => import('./BasicFooter'),
    Main: () => import('./Main')
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  background-image: url(../../public/images/main.jpg);
  background-size: 100% 100%;
}
</style>
