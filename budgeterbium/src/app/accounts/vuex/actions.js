import { guid } from '../../../utils'
import { saveAccount, deleteAccount as deleteAccountFromAPI, fetchAccounts } from '../api'

export const createAccount = ({ commit }, data) => {
  let id = guid()
  let account = Object.assign({id: id}, data)
  commit('CREATE_ACCOUNT', { account: account })
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
  deleteAccountFromAPI(data)
}

export const loadAccounts = (state) => {
  // load accoutns only if they are not already loaded
  // later we might to be able to force reaload theom
  if (!state.accounts || Object.keys(state.accounts).length === 0) {
    return fetchAccounts().then((res) => {
      state.commit('LOAD_ACCOUNTS', res)
    })
  }
}
