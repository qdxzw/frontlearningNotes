import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const actions = {
  jiaOdd (context, n) {
    if (context.state.sum % 2) context.commit('jia', n)
  },
  jiaWait (context, n) {
    setTimeout(() => {
      context.commit('jia', n)
    }, 1000)
  }
}
const mutations = {
  jia (state, n) {
    state.sum += n
  },
  jian (state, n) {
    state.sum -= n
  }
}
const state = {
  sum: 0
}
export default new Vuex.Store({
  actions,
  mutations,
  state
})
