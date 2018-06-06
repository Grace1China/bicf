import Vue from 'vue'
import Vuex from 'vuex'

import common from './common'
import page from './page'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    common,
    page,
  }
})

export default store