import * as actions from './actions'

export default {
  state: {
    home: {
      hotkeys: [],
      hotnews: [],
      dailycoin: [],
      banner: {},
      news: {
        list: [],
      }
    },
    detail: {
      post: {},
      relatenews: [],
      relateobj: [],
      timeline: [],
    }
  },
  mutations: {
    setHome(state, data) {
      for(let key in data) {
        state.home[key] = data[key]
      }
    },
    setDetail(state, data) {
      for(let key in data) {
        state.detail[key] = data[key]
      }
    },
    resetDetail(state) {
      state.detail.post = {}
      state.detail.relatenews = []
      state.detail.relateobj = []
      state.detail.timeline = []
    }
  },
  actions,
}