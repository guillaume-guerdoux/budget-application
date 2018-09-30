import Vue from 'vue'

// THIS FILE IS FOR FUNCTION WITH DATABASE (ADD, EDIT, etc.)
export default {
  CREATE_ACCOUNT (state, payload) {
    state.accounts[payload.account.id] = payload.account
  },
  UPDATE_ACCOUNT (state, payload) {
    state.accounts[payload.account.id] = payload.account
  },
  DELETE_ACCOUNT (state, payload) {
    Vue.delete(state.accounts, payload.account.id)
  },
  LOAD_ACCOUNTS (state, payload) {
    state.accounts = payload
  }
}
