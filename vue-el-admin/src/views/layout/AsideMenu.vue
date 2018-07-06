<template>
  <div class="asideMenu">
    <div class="logo-area">
      <img src="@/assets/image/logo.jpg" width="180px" height="60px" />
    </div>
    <el-menu class="nav-menu" :router="true" :default-active="$route.path" :collapse="!hiddenMenu" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <template v-for="item in menu">
        <el-submenu v-if="item.children" :key="item.id" :index="item.path">
          <template slot="title">
            <i :class="['v-icon',item.icon]"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item v-for="child in item.children" :key="child.id" :index="child.path">
            <i :class="['v-icon',child.icon]"></i>
            <span slot="title">{{child.name}}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :key="item.id" :index="item.path">
          <i :class="['v-icon',item.icon]"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import NavItems from '@/router/NavItems'
export default {
  name: 'asideMenu',
  data() {
    return {
      menu: NavItems
    }
  },
  computed: { ...mapState(['hiddenMenu']) }
}
</script>
<style lang="less" scoped>
.asideMenu {
  width: 100%;
  height: 100%;
  .logo-area {
    display: block;
    width: 100%;
    height: 60px;
    padding-left: 2px;
  }
  .nav-menu {
    border: 0;
    min-height: calc(100% - 60px);
    i {
      position: absolute;
      left: 20px;
      font-size: 18px;
      color: white;
    }
    span {
      position: absolute;
      left: 64px;
    }
  }
}
</style>
