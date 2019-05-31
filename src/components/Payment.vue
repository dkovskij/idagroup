<template>
  <div class="wrap">
    <div class="menu">
      <div v-for="(item, index) in menuItems" :key="index" class="menu-item">{{item}}</div>      
    </div>
    <div class="card">
      <div class="card__content">
        <p>Информация об оплате</p>
        <div class="bill-number">
        <span>Номер счета</span>
        <span>
          <input v-model.number="billNumber" type="number">
        </span>
        </div>
        <div class="payment-sum">
          <span>Сумма платежа</span>
          <span>
            <input v-model.number="paymentSum" type="number">
          </span>
        </div>
        <h2>Данные банковской карты</h2>
        <div class="card-front">
          <p>Номер карты</p>
          <span>
            <input type="number" id="card-first-input">
          </span>
          <span>
            <input type="number" id="card-scnd-input">
          </span>
          <span>
            <input type="number" id="card-third-input">
          </span>
          <span>
            <input type="number" id="card-frth-input">
          </span>
        </div>
        <div class="card-back">
          saf
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Payment',
  data () {
    return {
      menuItems: ['Личный кабинет', 'Платежи', 'История платежей', 'Настройки', 'Выйти'],
      billNumber: 0,
      paymentSum: 0
    }
  }
}
</script>

<style scoped>

.wrap {
  color: white;
  display: grid;
  grid-template-columns: 320px 1fr;
}

.menu-item {
  height: 75px;
  padding-left: 28px;
  line-height: 75px;
  cursor: pointer;
  font-size: 24px;
  background-color: #1f2229;
}
/* .lk, .payments, .payments-history {
} */
.settings, .logout {
  background-color: #191c24;
}
</style>
