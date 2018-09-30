import { guid } from '../../../utils'
import { saveBudget, fetchBudgets } from '../api'
import moment from 'moment'

const verifyUniqueMonth = (budgets, budget) => {
  // accepts a list of budgets and the budget being updated
  // return true if thre is no date collision
  // return false is a budget already exists in budgets with the same month as budget
  let month = moment(budget.month)
  return !Object.values(budgets).find((o) => {
    return month.isSame(o.month, 'month')
  })
}

export const createBudget = ({ commit, state }, data) => {
  let unique = verifyUniqueMonth(state.budgets, data)
  if (!unique) {
    return Promise.reject(new Error('A budget already exists for this month'))
  }
  let id = guid()
  let budget = Object.assign({ id: id }, data)
  commit('CREATE_BUDGET', { budget: budget })
  saveBudget(budget).then((value) => {
    // we saved the budget ,what's next
  })
}

export const updateBudget = ({ commit }, data) => {
  commit('UPDATE_BUDGET', { budget: data })
  saveBudget(data)
}

export const loadBudgets = (state) => {
  if (!state.budgets || Object.keys(state.budgets).length === 0) {
    return fetchBudgets().then((res) => {
      state.commit('LOAD_BUDGETS', res)
    })
  }
}
