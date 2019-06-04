import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    menuItems: [
      {itemText: "Личный кабинет", itemPath: '/'},
      {itemText: "Платежи", itemPath: '/'},
      {itemText: "История платежей", itemPath: '/history'},
      {itemText: "Настройки", itemPath: '/'},
      {itemText: "Выйти", itemPath: '/'}
    ],
  },
  
  getters: {
  },
  
  mutations: {    
  },  
  actions: {
  }
});
