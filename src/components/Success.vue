<template>
   <div class="wrap">
    <div class="menu">
      <div v-for="(item, index) in menuItems" :key="index" class="menu-item">{{item}}</div>
    </div>
    <div class="congrat-wrap">
      <h2>Поздравляем с успешной оплатой!</h2>
      <div class="bill-number">
              <span class="operation-details payment-info">Номер счета</span>
              <span>{{billNumber}}</span>
            </div>
            <div>
              <span class="operation-details payment-info">Сумма платежа</span>
              <span>
                {{paymentSum}}
              </span>
            </div>
            <div>
              <span class="operation-details payment-info">Имя и фамилия плательщика</span>
              <span>
                {{cardholderName}}
              </span>
            </div>
    </div>
   </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: "Success",
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      menuItems: state => state.menuItems,
      billNumber: state => state.billNumber,
      paymentSum: state => state.paymentSum,
      cardholderName: state => state.cardholderName
    })
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style';
</style>

