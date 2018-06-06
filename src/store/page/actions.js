import { actionWrap, request } from '@/utils'

export const getBanner = actionWrap('/api/banner')(res => ({ banner: res.body }))
export const getHotnews = actionWrap('/api/hotnews')(res => ({ hotnews: res.body }))
export const getHotkeys = actionWrap('/api/hotkeys')(res => ({ hotkeys: res.body }))
export const getDailycoin = actionWrap('/api/dailycoin')(res => ({ dailycoin: res.body }))

export const getNews = actionWrap('/api/news')((res, state) => ({
  news: [
    ...state.news,
    ...res.body
  ]
}))
