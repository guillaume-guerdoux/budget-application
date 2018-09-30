import * as components from './components'

export default [
  {
    path: '/',
    component: components.AccountsListView,
    name: 'accountsListView'
  },
  {
    path: '/accounts/create',
    component: components.CreateUpdateAccount,
    name: 'createEditAccount'
  },
  {
    path: '/accounts/:accountId/update',
    component: components.CreateUpdateAccount,
    name: 'updateAccount'
  }
]
