import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    hiddenMenu: false
  },
  mutations: {
    toggle() {
      this.state.hiddenMenu = !this.state.hiddenMenu
    }
  }
})

export default store
