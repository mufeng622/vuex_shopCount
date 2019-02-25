
const actions = {
  addCount: ({commit}, id) => {
    commit('ADD_COUNT', id)
  },
  reduceCount: ({commit}, id) => {
    commit('REDUCE_COUNT', id)
  }
}

export default actions
