import { guid } from '../../../utils'
import { saveAccount, removeAccount, fetchAccounts } from '../api'

export const addAccount = ({ commit }, data) => {
  let id = guid()
  let account = Object.assign({id: id}, data)
  commit('ADD_ACCOUNT', { account: account })
  saveAccount(account).then((value) => {
    // we've saved the accound ,what now
  })
}

export const updateAccount = ({ commit }, data) => {
  commit('UPDATE_ACCOUNT', { account: data })
  saveAccount(data)
}

export const deleteAccount = ({ commit }, data) => {
  commit('DELETE_ACCOUNT', { account: data })
  removeAccount(data)
}

export const loadAccounts = (state) => {
  // load accoutns only if they are not already loaded
  // later we might to be able to force reaload theom
  if (!state.accounts || Object.keys(state.accounts).length === 0) {
    return fetchAccounts().then((res) => {
      let accounts = {}
      Object.keys(res).forEach((key) => { accounts[res[key].id] = res[key] })
      state.commit('LOAD_ACCOUNTS', accounts)
    })
  }
}
