export default {
  CREATE_BUDGET (state, payload) {
    state.budgets[payload.budget.id] = payload.budget
  },

  UPDATE_BUDGET (state, payload) {
    state.budgets[payload.budget.id] = payload.budget
  },

  LOAD_BUDGET (state, payload) {
    state.budgets = payload
  }
}
