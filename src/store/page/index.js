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
    },
    search: {
      word: '',
      list: []
    },
    keyword: {
      id: 0,
      list: []
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
    },
    setSearch(state, data) {
      for(let key in data) {
        state.search[key] = data[key]
      }
    },
    setKeyword(state, data) {
      for(let key in data) {
        state.keyword[key] = data[key]
      }
    },
  },
  actions,
}