import { actionWrap, request } from '@/utils'
import { APIHOST } from '@/config'

const wrapHome = actionWrap('setHome')

export const getBanner = wrapHome(`${APIHOST}/api/reports`)(res => ({ banner: res.data.data }))
export const getHotnews = wrapHome(`${APIHOST}/api/hot_news`)(res => ({ hotnews: res.data.data }))
export const getHotkeys = wrapHome(`${APIHOST}/api/hot_keywords`)(res => ({ hotkeys: res.data.data }))
export const getDailycoin = wrapHome(`${APIHOST}/api/today_market`)(res => ({ dailycoin: res.data.data }))

// export const getNews = wrapHome(`${APIHOST}/api/news`)((res, state) => ({
//   news: [
//     ...state.news,
//     ...res.data.data
//   ]
// }))

export const getNews = ({commit, state}, data) => {
  return request.get(`${APIHOST}/api/news`, {
    params: data
  }).then(res => {
    commit('setHome', {
      news: {
        list: [
          ...state.home.news.list,
          ...res.data.data.data
        ]
      }
    })
    window.dispatchEvent(new Event('resize'))
  })
}


const wrapDetail = actionWrap('setDetail')

export const getDetail = ({commit}, id) => request.get(`${APIHOST}/api/news/${id}`).then(res => {
  commit('setDetail', {
    post: res.data.data,
  })
})

export const getRelateNews = ({commit}, id) => request.get(`${APIHOST}/api/news/${id}/similarity_news`).then(res => {
  commit('setDetail', {
    relatenews: res.data.data,
  })
})

export const getRelateObj = ({commit}, id) => request.get(`${APIHOST}/api/news/${id}/related_event`).then(res => {
  commit('setDetail', {
    relateobj: res.data.data,
  })
})

export const getTimeLine = ({commit}, id) => request.get(`${APIHOST}/api/news/${id}/time_line`).then(res => {
  commit('setDetail', {
    timeline: res.data.data,
  })
})

export const searchNews = ({commit, state}, data) => {
  return request.get(`${APIHOST}/api/search`, {
    params: data
  }).then(res => {
    commit('setSearch', {
      word: data.word,
      list: [
        ...state.search.list,
        ...res.data.data.data
      ]
    })
  })
}

export const keywordNews = ({commit, state}, {id, ...data}) => {
  return request.get(`${APIHOST}/api/keywords/${id}`, {
    params: data
  }).then(res => {
    commit('setKeyword', {
      id: id,
      list: [
        ...state.keyword.list,
        ...res.data.data.data
      ]
    })
  })
}

export const getCoins = ({commit, state}, data) => {
  return request.get(`${APIHOST}/api/coins`, {
    params: data
  }).then(res => {
    commit('setCoin', {
      list: [
        ...state.coin.list,
        ...res.data.data.data
      ]
    })
  })
}

export const getCoinDetail = ({commit}, {id, ...params}) => request.get(`${APIHOST}/api/coins/${id}`, { params }).then(res => {
  commit('setCoinDetail', {
    detail: res.data.data,
  })
})

export const getCoinNews = ({commit}, id) => request.get(`${APIHOST}/api/coins/${id}/news`).then(res => {
  commit('setCoinDetail', {
    news: res.data.data,
  })
})