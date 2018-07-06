import { getToken, setToken, removeToken } from '@/utils/token.js'

const user = {
  state: {
    token: getToken(),
    name: ''
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    }
  }
}
export default user
