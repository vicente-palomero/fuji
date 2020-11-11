const initialState = {
  notificationsGranted: false
}

const state = () => (
  initialState
)

const getters = {}

const actions = {
  grantNotification({ commit }, isGranted) {
    commit('grantNotification', isGranted)
  }
}

const mutations = {
  grantNotification(state, isGranted) {
    state.notificationsGranted = isGranted
  }
}

const hydrate = function(module) {
  return module
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  hydrate
}
