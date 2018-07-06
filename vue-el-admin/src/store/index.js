import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    hiddenMenu: false
  },
  mutations: {
    toggle() {
      this.state.hiddenMenu = !this.state.hiddenMenu
    }
  },
  modules: {
    user
  }
})

export default store
