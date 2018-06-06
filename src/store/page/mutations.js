export const setState = (state, data) => {
  for(let key of data) {
    state[key] = data[key]
  }
}