<template>
  <div class="wrap">
    <div class="menu">
      <div v-for="(item, index) in menuItems" :key="index" class="menu-item">{{item}}</div>
    </div>
    <div class="card">
      <div class="card__content">
        <div class="card__data">
        <p class="operation-details">Информация об оплате</p>
        <div class="bill-number">
          <span class="operation-details payment-info">Номер счета</span>
          <span>
            <input v-model.number="billNumber" type="number" class="inp--border-none">
          </span>
        </div>
        <div class="payment-sum">
          <span class="operation-details payment-info">Сумма платежа</span>
          <span>
            <input v-model.number="paymentSum" type="number" class="inp--border-none">
          </span>
        </div>
        <h2 class="caption--font">Данные банковской карты</h2>
        <div class="card-front">
          <p class="operation-details">Номер карты</p>
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
          <p class="operation-details active-period">Срок действия</p>
          <span>
            <select name="card-month" id="card-month">
              <option v-for="(n, index) in 12" :key="index" :value="n">{{n}}</option>              
            </select>
            <label for="card-month" id="card-month-label"></label>
          </span>
          <span>
            <select name="card-year" id="card-year">
              <option v-for="(item, index) in cardYear" :key="index" :value="item" :selected="index === 10">{{item}}</option>
            </select>
            <label for="card-year" id="card-year-label"></label>
          </span>
          <div class="cardholder-input-wrap">
            <input type="text" id="cardholder-input" placeholder="Держатель карты">
          </div>
        </div>
        <div class="card-back">
          <div class="magnetic-strip"></div>
          <p class="operation-details cvv-text">Код CVV2/CVC2</p>
          <div class="cvv-input-wrap">
            <input type="number" id="cvv-input">
          </div>          
        </div>
        <button>Оплатить</button>
      </div>
        <div class="card-information">
          Исходя из астатической системы координат Булгакова, соединение стабильно. 
          Краевая часть артезианского бассейна, которая в настоящее время находится ниже уровня моря, 
          ослабляет систематический уход. Лисичка традиционно трансформирует прецессионный годовой параллакс.
          Выклинивание абсолютно аккумулирует твердый pадиотелескоп Максвелла.
          Алмаз слагает горст. Делювий длительно колеблет лазерный подвижный объект.
          Устойчивость, например, параллельна. Аргумент перигелия определяет боксит. Проекция вертикально дает уходящий диабаз. 
          Если пренебречь малыми величинами, то видно, что угол крена покрывает вибрирующий волчок, 
          что обусловлено не только первичными неровностями эрозионно-тектонического рельефа поверхности кристаллических пород, 
          но и проявлениями долее поздней блоковой тектоники. Засветка неба заставляет иначе взглянуть на то, что такое волчок.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Payment",
  data() {
    return {
      menuItems: [
        "Личный кабинет",
        "Платежи",
        "История платежей",
        "Настройки",
        "Выйти"
      ],
      billNumber: 0,
      paymentSum: 0,
      cardYear: []           
    };
  },
  computed: {
        getYear() {
          let date = new Date()
          return date.getFullYear()                 
        }
      },
  created() {
    let startYear = this.getYear - 10
        for (let i = 0; i < 20; i++) {
          this.cardYear.push(startYear + i)
      }
  }
};
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
  font-size: 18pt;
  background-color: #1f2229;
}
/* .lk, .payments, .payments-history {
} */
.settings,
.logout {
  background-color: #191c24;
}
.card__content {
  position: relative;
}
.card__data {
  height: 570px;
  background-color: #f7f8f8;
  background-clip: border-box;
  padding: 45px 45px 25px 29px;
}
.operation-details {
  font-family: Arial, sans-serif;
  font-size: 16pt;
  color: #535864;
}
.inp--border-none {
  border: none;
  background-color: #f7f8f8;
  font-family: Arial, sans-serif;
  font-size: 16pt;
  color: #bec6cf;
}
.payment-info {
  width: 160px;
  display: inline-block;
  margin-top: 10px;
}
.caption--font {
  font-family: 'Open Sans', sans-serif;
  color: #383d43;
  margin: 17px 0 12px;
}
.card-front {  
  border: 1px solid rgb(228, 233, 238);
  border-radius: 10px;
  background-color: #f7f8f8;
  width: 318px;
  height: 201px;
  padding: 25px 15px 15px;
}
#card-first-input, #card-scnd-input, #card-third-input, #card-frth-input {
  width: 64px;
  height: 42px;
  border: 1px solid #e4e9ee;
}
#card-scnd-input, #card-third-input, #card-frth-input {
  margin-left: 3px;
}
.active-period {
  margin-top: 10px;
}
#card-month, #card-year {
  width: 69px;
  height: 42px;
  border: 1px solid #e4e9ee;
  appearance: none;
  padding-left: 15px;
  margin-top: 6px;
}
#card-month-label::after {
  content: '';
  display: inline-block;
  position: relative;
  width: 8px;
  height: 8px;
  border-left: 1px solid #c9d0d7;
  border-bottom: 1px solid #c9d0d7;
  top: -2px;
  left: -25px;
  transform: rotate(-45deg);
}
#card-year-label::after {
  content: '';
  display: inline-block;
  position: relative;
  width: 8px;
  height: 8px;
  border-left: 1px solid #c9d0d7;
  border-bottom: 1px solid #c9d0d7;
  top: -2px;
  left: -20px;
  transform: rotate(-45deg);  
}
.cardholder-input-wrap {
  margin-top: 9px;
}
#cardholder-input {
  width: 305px;
  height: 42px;
  border: 1px solid #e4e9ee;
  padding-left: 11px;
}
.card-back {
  position: relative;
  top: -216px;
  left: 193px;
  width: 369px;
  height: 235px;
  border: 1px solid rgb(228, 233, 238);
  border-radius: 10px;
  z-index: 0;
}
.magnetic-strip {
  width: 215px;
  height: 42px;
  background-color: #c9d0d7;
  margin-left: 155px;
  margin-top: 25px;
}
.cvv-text {
  margin-left: 190px;
  margin-top: 13px;
}
.cvv-input-wrap {
  margin-left: 216px;
}
#cvv-input {
  width: 137px;
  height: 42px;
  padding-left: 10px;
}

</style>
