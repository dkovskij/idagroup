<template>
<div>
<div class="wrap" v-if="!isSuccess">

    <Menu></Menu>

    <div class="card">
      <div class="card__content">
          <div class="card__data">
            <p class="operation-details">Информация об оплате</p>
            <div class="bill-number">
              <span class="operation-details payment-info">Номер счета</span>
              <span>
                <input
                  v-model.number="billNumber"
                  type="number"
                  @blur="setBillNumber($event)"
                  class="inp--border-none"
                  placeholder="Введите номер счета"
                >
              </span>
            </div>
            <div class="payment-sum">
              <span class="operation-details payment-info">Сумма платежа</span>
              <span>
                <input v-model.number="paymentSum" placeholder="Введите сумму платежа" @blur="setPaymentSum($event)" @input="setPaymentSum($event)" type="number" class="inp--border-none">
              </span>
            </div>

            <h2 class="caption--font">Данные банковской карты</h2>

            <div class="card-front">
              <p class="operation-details">Номер карты</p>
              <span v-for="(n, index) in 4" :key="index" class="card-input-wrap">
                <input
                :key="'inp' + index"
                type="text"
                  maxlength="4"
                  class="card-input"
                  @blur="setCardNumber($event)"
                  v-model.number="cardNumber[index]">
              </span>

              <p class="operation-details active-period">Срок действия</p>
              <span>
                <select name="card-month" id="card-month" v-model="selectedCardMonth">
                  <option v-for="(n, index) in 12" :key="index" :value="n">{{n < 10 ? '0' + n : n}}</option>
                </select>
                <label for="card-month" id="card-month-label"></label>
              </span>
              <span>
                <select name="card-year" id="card-year" v-model="selectedCardYear">
                  <option
                    v-for="(item, index) in cardYear"
                    :key="index"
                    :value="item"
                    :selected="index === 10"
                  >{{item}}</option>
                </select>
                <label for="card-year" id="card-year-label"></label>
              </span>

              <div class="cardholder-input-wrap">
                <input
                  type="text"
                  id="cardholder-input"
                  v-model="cardholderName"
                  placeholder="Держатель карты"
                  :class="{error : isError }"
                  @blur="setCardholderName"
                  @input="setCardholderName"
                >
                <div v-if="showMsg" class="info-msg">{{infoMsg}}</div>
              </div>
            </div>

            <div class="card-back">
              <div class="magnetic-strip"></div>
              <p class="operation-details cvv-text">Код CVV2/CVC2</p>
              <div class="cvv-input-wrap">
                <input
                  type="text"
                  required
                  maxlength="3"
                  id="cvv-input"
                  v-model="cvvNumber"
                  @input="setCvvNumber($event)"
                >
              </div>
            </div>
            <button id="pay-btn" @click="sendForm">Оплатить</button>
          </div>
        <div class="card-information">
          <p>
            Исходя из астатической системы координат Булгакова, соединение стабильно.
            Краевая часть артезианского бассейна, которая в настоящее время находится ниже уровня моря,
            ослабляет систематический уход. Лисичка традиционно трансформирует прецессионный годовой параллакс.
          </p>
          <p
            class="card-information__text"
          >Выклинивание абсолютно аккумулирует твердый pадиотелескоп Максвелла.</p>
          <p
            class="card-information__text"
          >Алмаз слагает горст. Делювий длительно колеблет лазерный подвижный объект.</p>
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

  <Success v-if="isSuccess" :payment="payment" @on-close="closeSuccess"></Success>

</div>

</template>

<script>
import axios from "axios";
import Menu from './Menu'
import Success from './Success'

export default {
  name: "Payment",
  components: {
    Menu,
    Success
  },
  data() {
    return {
      billNumber: null,
      paymentSum: null,
      cardholderName: "",
      cardYear: [],
      cardNumber: [],
      cvvNumber: "",
      showMsg: false,
      infoMsg: "Пожалуйста, проверьте корректность введенных данных",
      regexp: /[A-Za-z]/,
      isError: false,
      selectedCardMonth: "",
      selectedCardYear: "",
      payment: {
        card: {}
      },
      isSuccess: false
    };
  },
  methods: {
    sendForm() {
      let isCardNumber = true,
        cardNum;

      cardNum = this.cardNumber.join('')
      if (cardNum.length < 16) {
        isCardNumber = false
      }

      if (this.billNumber && this.paymentSum && isCardNumber && this.selectedCardMonth && this.selectedCardYear && this.cardholderName && this.cvvNumber) {
        console.log(typeof this.cvvNumber);
        if ( this.cvvNumber.search(/[A-zА-яЁё]/g) != -1 ) {
          alert('Пожалуйста, проверьте правильность введенных данных!')
          return
        }
        if (this.cardholderName.search(/[0-9]/) != -1  ) {
          alert('Пожалуйста, проверьте правильность введенных данных!')
          return
        }
        this.payment.billNumber = this.billNumber
        this.payment.paymentSum = this.paymentSum
        this.payment.card.number = cardNum
        this.payment.card.cardMonth = this.selectedCardMonth
        this.payment.card.cardYear = this.selectedCardYear
        this.payment.card.cardholderName = this.cardholderName
        this.payment.card.cvvNumber = this.cvvNumber
        this.payment.date = this.getDate
        this.$store.dispatch('setPayment', this.payment)

        this.isSuccess = true
      } else {
        alert('Пожалуйста, проверьте правильность введенных данных!')
      }

    },
    setCvvNumber(event) {
      if (event.target.value.length < 3 || event.target.value.match(/[A-Za-zА-Яа-яЁё]/)) {
        event.target.style.outline = "1px solid red";
      } else {
        event.target.style.outline = "";
      }
    },
    setBillNumber(event) {
      if (event.target.value.length === 0) {
        event.target.style.border = "1px solid red";
        event.target.style.borderRadius = "10px";
      } else {
        event.target.style.border = "";
      }
    },
    setPaymentSum(event) {
      if (event.target.value.length === 0) {
        event.target.style.border = "1px solid red";
        event.target.style.borderRadius = "10px";
      } else {
        event.target.style.border = "";
      }
    },
    setCardNumber(event) {
      if (
        event.target.value.length < 4 ||
        event.target.value < 0 ||
        event.target.value.match(/[A-Za-zА-Яа-яЁё]/)
      ) {
        event.target.style.outline = "1px solid red";
      } else {
        event.target.style.outline = "";
      }
    },
    setCardholderName() {
      if (this.cardholderName.length === 0) {
        this.showMsg = true;
        this.isError = true;
      } else if (
        this.cardholderName.length < 4 ||
        !this.cardholderName.match(this.regexp)
      ) {
        this.showMsg = true;
        this.isError = true;
      } else {
        this.showMsg = false;
        this.isError = false;
      }
    },
    closeSuccess(e) {
      console.log('asdf');
      this.isSuccess = e
      this.billNumber = null
      this.paymentSum = null
      this.cardholderName = ""
      this.cardYear = []
      this.cardNumber = []
      this.cvvNumber = ""
      this.showMsg = false
      this.selectedCardMonth = ""
      this.selectedCardYear = ""
      this.payment = {
        card: {}
      }
    }
  },
  computed: {
    getYear() {
      let date = new Date();
      return date.getFullYear();
    },
    getDate() {
      let date = new Date().toJSON().slice(0, 10);
      let d = date.split('-').reverse().join('.')
      return d;
    }
  },
  created() {
    let startYear = this.getYear - 10;
    for (let i = 0; i < 20; i++) {
      this.cardYear.push(startYear + i);
    }
  }
};
</script>

<style lang="scss" scoped>
.cvv-input-wrap::after {
  content: "";
  width: 30px;
  height: 30px;
  position: relative;
  top: -37px;
  left: 104px;
  background: url("../assets/ask.png") no-repeat;
  display: block;
}
</style>
