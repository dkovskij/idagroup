<template>
   <div class="wrap">
    <Menu></Menu>
    <div class="congrat-wrap">
      <div class="close-success" @click="closeSuccess">
        Закрыть
      </div>
      <h2>Поздравляем с успешной оплатой!</h2>
      <div class="bill-number">
              <span class="operation-details payment-info">Номер счета</span>
              <span>{{payment.billNumber}}</span>
            </div>
            <div>
              <span class="operation-details payment-info">Сумма платежа</span>
              <span>
                {{payment.paymentSum}}
              </span>
            </div>
            <div>
              <span class="operation-details payment-info">Имя и фамилия плательщика</span>
              <span>
                {{payment.card.cardholderName}}
              </span>
            </div>
            <div>
              <span class="operation-details payment-info">Дата платежа</span>
              <span>
                {{payment.date}}
              </span>
            </div>
    </div>
   </div>
</template>
<script>
import { mapState } from 'vuex';
import axios from 'axios'
import Menu from './Menu'

export default {
  name: "Success",
  components: {
    Menu
  },
  props: {
    payment: {
      type: Object
    }
  },
  data() {
    return {
    }
  },
  methods: {
    closeSuccess() {
      this.$emit('on-close', false)
    }
  },
}
</script>
