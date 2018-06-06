import * as actions from './actions'

console.log(actions)

export default {
  state: {
    home: {
      hotkeys: [],
      hotnews: [],
      dailycoin: [],
      banner: {},
      news: []
    },
    detail: {
      post: {},
      relatenews: [],
      relateobj: [],
      timeline: [],
    }
  },
  mutations: {
    setState(state, data) {
      for(let key of data) {
        state[key] = data[key]
      }
    }
  },
  actions,
}