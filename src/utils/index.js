import request from './request'

export const actionWrap = mutationType => (params, method = 'get') => cb => async ({commit, state}) => {
  const res = await request[method](params)
  commit(mutationType, cb(res, state))
}

export { request }