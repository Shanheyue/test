<template>
  <div class="asideMenu">
    <el-menu style="border: 0 ;min-height:100%" :router="true" :default-active="$route.path" :collapse="!hiddenMenu" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
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
export default {
  name: 'asideMenu',
  data() {
    return {
      menu: [
        {
          id: '1',
          name: '表格',
          icon: 'v-icon-biaoge',
          path: '/dashboard/table'
        },
        {
          id: '2',
          name: '图表',
          icon: 'v-icon-chart',
          path: '/dashboard/chart',
          children: [
            {
              id: '2-1',
              name: '基本图表',
              path: '/dashboard/basicChart'
            },
            {
              id: '2-2',
              name: '动态图表',
              path: '/dashboard/activedChart'
            }
          ]
        },
        {
          id: '3',
          name: '拖拽',
          icon: 'v-icon-drag',
          path: '/dashboard/drag'
        }
      ]
    }
  },
  computed: { ...mapState(['hiddenMenu']) }
}
</script>
<style lang="less" scoped>
.asideMenu {
  width: 100%;
  height: 100%;
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
</style>
