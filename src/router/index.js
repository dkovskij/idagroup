import Vue from 'vue'
import Router from 'vue-router'
import Payment from '@/components/Payment'
import Success from '@/components/Success'

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
    }
  ]
})
