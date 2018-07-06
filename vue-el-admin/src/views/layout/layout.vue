<template>
  <el-container class="container">
    <el-aside :width="hiddenMenu?'200px':'64px'" style="transition: width .2s">
      <aside-menu></aside-menu>
    </el-aside>
    <el-container>
      <el-header style="padding: 0">
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Header from './Header.vue'
import AsideMenu from './AsideMenu.vue'
import { mapState } from 'vuex'
export default {
  name: 'layout',
  components: {
    Header,
    AsideMenu
  },
  computed: { ...mapState(['hiddenMenu']) }
}
</script>
<style lang="less" scoped>
.container {
  height: 100%;
}
</style>
