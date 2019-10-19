import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    menuItems: [
      {itemText: "Личный кабинет", itemPath: '/', active: false},
      {itemText: "Платежи", itemPath: '/', active: true},
      {itemText: "История платежей", itemPath: '/history', active: false},
      {itemText: "Настройки", itemPath: '/', active: false},
      {itemText: "Выйти", itemPath: '/', active: false}
    ],
    payments: []
  },

  getters: {
  },

  mutations: {
    SET_ACTIVE_MENU_ITEM: (state, index) => {
      state.menuItems.forEach(el => {
        el.active = false
      })
      state.menuItems[index].active = true
    },
    SET_PAYMENT: (state, payment) => {
      state.payments.push(payment)
    }
  },
  actions: {
    setActiveMenuItem ({commit}, index) {
      commit('SET_ACTIVE_MENU_ITEM', index)
    },
    setPayment ({commit}, payment) {
      commit('SET_PAYMENT', payment)
    }
  }
});
