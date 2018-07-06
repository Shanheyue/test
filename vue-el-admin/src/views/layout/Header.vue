<template>
  <div class="main-header">
    <i :class="['v-icon', 'v-icon-menu',hiddenSidebar?'close':'open']" style="font-size:25px" @click="toggle"></i>
    <el-dropdown class="dropdown">
      <div>
        <img src="@/assets/image/timg.jpg" />
        <i class="v-icon v-icon-jiantouxia"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <router-link to="/dashboard">
          <el-dropdown-item>
            <span class="dropdown-item">首页</span>
          </el-dropdown-item>
        </router-link>
        <a href="" target="_blank">
          <el-dropdown-item>
            <span class="dropdown-item">GitHub</span>
          </el-dropdown-item>
        </a>
        <router-link to="/">
          <el-dropdown-item divided>
            <span class="dropdown-item divided">退出</span>
          </el-dropdown-item>
        </router-link>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      showRightMenu: false
    }
  },
  computed: {
    ...mapState({
      hiddenSidebar: state => state.hiddenMenu
    })
  },
  methods: {
    ...mapMutations(['toggle']),
    lostFocus() {
      this.showRightMenu = false
    }
  }
}
</script>

<style lang="less" scoped>
.main-header {
  position: relative;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgb(218, 216, 216);
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .dropdown {
    height: 50px;
    width: 50px;
    position: relative;
    margin: auto 30px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10%;
    }
    i {
      position: absolute;
      margin: 0;
      right: -15px;
      bottom: 0;
      font-size: 12px;
    }
  }
  i {
    margin: auto 20px;
    transition: all .2s;
    &.open {
      transform: rotate(90deg);
    }
    &.close {
      transform: rotate(0deg);
    }
  }
}
a {
  text-decoration: none;
  color: black;
}
</style>
