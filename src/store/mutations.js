import * as types from './mutation-type'

const mutations = {
  [types.SET_GOODS] (state, goods) {
    state.goods = goods
  }
}
export default mutations
