import Vue from 'vue'
import Router from 'vue-router'
import Payment from '@/components/Payment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Payment',
      component: Payment
    }
  ]
})
