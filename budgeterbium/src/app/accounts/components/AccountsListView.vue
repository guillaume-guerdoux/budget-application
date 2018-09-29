<template>
  <div id="accounts-list-view">
    I'm a list of accounts!

    <router-link :to="{ name: 'createEditAccount' }">Add an account</router-link>

    <ul>
      <li v-for="account in accounts"
          :key="account.index">
        {{ account.name }}
        <span class="tag is-small is-info">{{ categories[account.category] }}</span>
        ${{ account.balance }}

        <a v-on:click="confirmDeleteAccount(account)">Delete</a>
        <router-link :to="{ name: 'editAccount', params: { accountId: account.id }}">
          Edit
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { CATEGORIES } from '../../../consts'

export default {
  name: 'accounts-list-view',

  data () {
    return {
      categories: CATEGORIES
    }
  },

  methods: {
    ...mapActions([
      'deleteAccount'
    ]),

    confirmDeleteAccount (account) {
      // note that these are backticks and not quotation marks
      if (confirm(`Are you sure you want to delete ${account.name}?`)) {
        this.deleteAccount(account)
      }
    }
  },

  computed: {
    ...mapState({
      'accounts': state => state.accounts.accounts
    })
  }
}
</script>

<style scoped lang='scss'>
#accounts-list-view {
}
</style>
