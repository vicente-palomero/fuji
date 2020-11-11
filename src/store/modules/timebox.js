import Timebox from '../../models/Timebox.js'
import TimeboxState from '../../models/TimeboxState.js'

const initialState = new TimeboxState()

const state = () => (
  initialState
)

const getters = {
  countdownType: (state) => {
    if (!state.isRunning) {
      return 'stop'
    }
    if (state.type === 'wip') {
      return 'wip'
    }
    return 'rest'
  },
  minutes: (state) => {
    return String(Math.floor(state.ms / 60000))
  },
  seconds: (state) => {
    return String((Math.floor(state.ms / 1000)) % 60).padStart(2, '0')
  }
}

const actions = {
  clean({ commit }) {
    commit('clean')
  },
  run({ commit }) {
    commit('run')
  },
  secondPassed({ commit }) {
    commit('secondPassed')
  },
  setTimebox({ commit }, minutes) {
    commit('setMinutes', {box: 'timebox', minutes})
  },
  setShortRest({ commit }, minutes) {
    commit('setMinutes', {box: 'shortRest', minutes})
  },
  setLongRest({ commit }, minutes) {
    commit('setMinutes', {box: 'longRest', minutes})
  }
}

const mutations = {
  clean(state) {
    const newState = new TimeboxState()
    newState.set('shortRest', state.shortRest)
    newState.set('longRest', state.longRest)
    newState.set('timebox', state.timebox)

    state = newState
    state.initialMs = state.timebox.toMs()
    state.ms = state.initialMs
      console.log({state})
/*
    state.type = 'wip'
    state.current = 0,
    state.end = 0,
    state.cycle = 4,
    state.count = 0,
    state.isRunning = false,
    state.isEnded = false,
    state.countRests = 0
*/
  },
  run(state) {
    state.isRunning = !state.isRunning
    state.isEnded = false
    if (!state.isRunning) {
      state.ms = state.initialMs
    } else {
      const start = Date.now()
      state.end = start + state.initialMs
      state.current = start
    }
  },
  secondPassed(state) {
    state.current = Date.now()
    state.ms = state.end - state.current

    if (state.ms <= 0) {
      state.isRunning = false
      state.isEnded = true
      const rest = (state.count % state.cycle) ? state.shortRest : state.longRest
      if (state.count == state.countRests || 0) {
        state.count++
        state.initialMs = rest.toMs()
        state.ms = state.initialMs
        state.type = 'rest'
      } else {
        state.countRests++
        state.initialMs = rest.toMs()
        state.ms = state.initialMs
        state.type = 'wip'
      }
    }
  },
  setMinutes(state, { box, minutes }) {
    const timebox = new Timebox(minutes)
    state[box] = timebox
    if (box == 'timebox') {
      state.initialMs = state.timebox.toMs()
      state.ms = state.initialMs
    }
  }
}

const hydrate = function(module) {
  if (!module.history) {
    return
  }
  module.history = module.history.map((tick) => {
    return Object.assign(TickFactory.build(), tick)
  })
  return module
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
