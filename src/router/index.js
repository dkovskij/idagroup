import Vue from 'vue'
import Router from 'vue-router'
import Payment from '@/components/Payment'
import Success from '@/components/Success'
import History from '@/components/History'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    },
    {
      path: '/history',
      name: 'History',
      component: History
    }
  ]
})
