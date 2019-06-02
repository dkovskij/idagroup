<template>
  <div class="wrap">
    <div class="menu">
      <div v-for="(item, index) in menuItems" :key="index" class="menu-item">{{item}}</div>
    </div>
    <div class="card">
      <div class="card__content">
        <form>
        <div class="card__data">
        <p class="operation-details">Информация об оплате</p>
        <div class="bill-number">
          <span class="operation-details payment-info">Номер счета</span>
          <span>
            <input v-model.number="billNumber" required type="number" class="inp--border-none" @input="setBillNumber($event)">
          </span>
        </div>
        <div class="payment-sum">
          <span class="operation-details payment-info">Сумма платежа</span>
          <span>
            <input v-model.number="paymentSum" required type="number" class="inp--border-none">
          </span>
        </div>
        <h2 class="caption--font">Данные банковской карты</h2>
        <div class="card-front">
          <p class="operation-details">Номер карты</p>
          <span>
            <input type="text" maxlength="4" required id="card-first-input" class="card-input" @input="setCardNumber($event)" v-model.number="cardFirstInp">
          </span>
          <span>
            <input type="text" maxlength="4" required id="card-scnd-input" class="card-input" @input="setCardNumber($event)" v-model.number="cardScndInp">
          </span>
          <span>
            <input type="text" maxlength="4" required id="card-third-input" class="card-input" @input="setCardNumber($event)" v-model.number="cardThirdInp">
          </span>
          <span>
            <input type="text" maxlength="4" required id="card-frth-input" class="card-input" @input="setCardNumber($event)" v-model.number="cardFrthInp">
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
            <input type="text" id="cardholder-input" v-model="cardholderName" required placeholder="Держатель карты" @input="setCardholderName" :class="{error : isError }">
            <div v-if="showMsg" class="info-msg">{{infoMsg}}</div>
          </div>
        </div>
        <div class="card-back">
          <div class="magnetic-strip"></div>
          <p class="operation-details cvv-text">Код CVV2/CVC2</p>
          <div class="cvv-input-wrap">
            <input type="text" required maxlength="3" id="cvv-input" @input="setCvvNumber($event)">
          </div>          
        </div>
        <button id="pay-btn">Оплатить</button>
      </div>
      </form>
        <div class="card-information">
          <p>Исходя из астатической системы координат Булгакова, соединение стабильно. 
          Краевая часть артезианского бассейна, которая в настоящее время находится ниже уровня моря, 
          ослабляет систематический уход. Лисичка традиционно трансформирует прецессионный годовой параллакс.</p>
          <p class="card-information__text">Выклинивание абсолютно аккумулирует твердый pадиотелескоп Максвелла.</p>
          <p class="card-information__text">
          Алмаз слагает горст. Делювий длительно колеблет лазерный подвижный объект.
          </p>
          <p class="card-information__text">
          Устойчивость, например, параллельна. Аргумент перигелия определяет боксит. Проекция вертикально дает уходящий диабаз. 
          Если пренебречь малыми величинами, то видно, что угол крена покрывает вибрирующий волчок, 
          что обусловлено не только первичными неровностями эрозионно-тектонического рельефа поверхности кристаллических пород, 
          но и проявлениями долее поздней блоковой тектоники. Засветка неба заставляет иначе взглянуть на то, что такое волчок.
          </p>
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
      billNumber: 1234,
      paymentSum: 100,
      cardYear: [],
      cardFirstInp: '',
      cardScndInp: '',
      cardThirdInp: '',
      cardFrthInp: '',
      cardNumber: [],
      cardholderName: '',
      showMsg: false,
      infoMsg: 'Пожалуйста, проверьте корректность введенных данных',
      regexp: /[a-z]/,
      isError: false
    };
  },
  methods: {
    setCvvNumber(event) {
      if (event.target.value.length < 3) {
        event.target.style.outline = '1px solid red'
      } else {
        event.target.style.outline = ''
      }
    },
    setBillNumber(event) {
      if (event.target.value.length === 0) {
        event.target.style.outline = '1px solid red'
      } else {
        event.target.style.outline = ''
      }
    },
    setCardNumber(event) {
      if (event.target.value.length < 4) {
        event.target.style.outline = '1px solid red'
      } else {
        event.target.style.outline = ''
      }
    },
    setCardholderName() {
      if (this.cardholderName.length === 0) {
        this.showMsg = false
        this.isError = false
      } else if ( this.cardholderName.length < 4 || !this.cardholderName.match(this.regexp) ) {
        this.showMsg = true
        this.isError = true
      } else {
        this.showMsg = false
        this.isError = false
      }
    }
  },
  computed: {
        getYear() {
          let date = new Date()
          return date.getFullYear()                 
        },

      },
  created() {
    let startYear = this.getYear - 10
        for (let i = 0; i < 20; i++) {
          this.cardYear.push(startYear + i)
      }
  },
  updated() {
    this.cardNumber = [this.cardFirstInp, this.cardScndInp, this.cardThirdInp, this.cardFrthInp]
    this.cardNumber.join('')
    // console.log(this.cardNumber)
  },
};
</script>

<style scoped>
.wrap {
  color: white;
  display: grid;
  grid-template-columns: 320px 1fr;
}
input {
  outline: none;
}

.menu-item {
  height: 75px;
  padding-left: 28px;
  line-height: 75px;
  cursor: pointer;
  font-size: 15pt;
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
  height: 500px;
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
  width: 200px;
  display: inline-block;
  margin-top: 10px;
}
.caption--font {
  font-family: 'Open Sans', sans-serif;
  color: #383d43;
  margin: 17px 0 12px;
}
.card-front {
  position: relative;
  border: 1px solid rgb(228, 233, 238);
  border-radius: 10px;
  background-color: #f7f8f8;
  width: 318px;
  min-height: 201px;
  padding: 25px 15px 15px;
  z-index: 1;
}
.card-input {
  width: 64px;
  height: 42px;
  border: 1px solid #e4e9ee;
  text-align: center;
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
  position: absolute;
  top: 229px;
  left: 221px;
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
.cvv-input-wrap::after {
  content: '';
  width: 30px;
  height: 30px;
  position: relative;
  top: -37px;
  left: 104px;
  background: url('../assets/ask.png') no-repeat; 
  display: block;

}
#cvv-input {
  width: 125px;
  height: 42px;
  padding-left: 10px;
  border: 1px solid #e4e9ee;
  appearance: none;
  -webkit-appearance: none;  
}
#pay-btn {
  font-size: 11pt;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  width: 133px;
  height: 40px;
  border-radius: 20px;
  background-color: #0056b7;
  color: #fff;
  background: linear-gradient( to bottom, #005abf, #004ca2); 
  border: none;  
  margin-top: 40px;
  margin-left: 15px; 
  outline: none;
  cursor: pointer;
}

.card-information {
  padding: 30px;
  font-size: 9pt;
  color: #89909d;
  background-color: #373c43;
}
.card-information__text {
  margin-top: 10px;
}
.info-msg {
  color: #89909d;
  font-size: 10px;
}
.error {
  outline: 1px solid red;
}

</style>
