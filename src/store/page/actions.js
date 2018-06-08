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

// export const getRelateNews = ({commit}, id) => request.get(`${APIHOST}/api/news/${id}/similarity_news`).then(res => {
//   commit('setDetail', {
//     post: res.data.data,
//   })
// })