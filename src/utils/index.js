import request from './request'

export const actionWrap = (params, method = 'get') => cb => async ({commit, state}) => {
  const res = await request[method](params)
  commit('setState', cb(res, state))
}

export { request }