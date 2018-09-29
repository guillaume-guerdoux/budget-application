import * as actions from './actions'
import getters from './getters'
import mutations from './mutations'

// The VUEX enables to store ojects
const state = {
  accounts: {}
}

export default {
  state,
  actions,
  mutations,
  getters
}
