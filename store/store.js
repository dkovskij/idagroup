import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    menuItems: [
      "Личный кабинет",
      "Платежи",
      "История платежей",
      "Настройки",
      "Выйти"
    ],
  },
  
  getters: {
    // Here we will create a getter
  },
  
  mutations: {
    updateBillNumber (state, number) {
      state.billNumber = number
    },
    updatePaymentSum (state, number) {
      state.paymentSum = number
    },
    updateCvvNumber (state, number) {
      state.cvvNumber = number
    },
    updateCardholderName (state, number) {
      state.cardholderName = number
    },
  },  
  actions: {
  }
});
