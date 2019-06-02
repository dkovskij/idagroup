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
                <input
                  v-model.number="billNumber"
                  required
                  type="number"
                  class="inp--border-none"
                  @input="setBillNumber($event)"
                >
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
                <input
                  type="text"
                  maxlength="4"
                  required
                  id="card-first-input"
                  class="card-input"
                  @input="setCardNumber($event)"
                  v-model.number="cardFirstInp"
                >
              </span>
              <span>
                <input
                  type="text"
                  maxlength="4"
                  required
                  id="card-scnd-input"
                  class="card-input"
                  @input="setCardNumber($event)"
                  v-model.number="cardScndInp"
                >
              </span>
              <span>
                <input
                  type="text"
                  maxlength="4"
                  required
                  id="card-third-input"
                  class="card-input"
                  @input="setCardNumber($event)"
                  v-model.number="cardThirdInp"
                >
              </span>
              <span>
                <input
                  type="text"
                  maxlength="4"
                  required
                  id="card-frth-input"
                  class="card-input"
                  @input="setCardNumber($event)"
                  v-model.number="cardFrthInp"
                >
              </span>
              <p class="operation-details active-period">Срок действия</p>
              <span>
                <select name="card-month" id="card-month" v-model="selectedCardMonth">
                  <option v-for="(n, index) in 12" :key="index" :value="n">{{n}}</option>
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
                  required
                  placeholder="Держатель карты"
                  @input="setCardholderName"
                  :class="{error : isError }"
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
                  @input="setCvvNumber($event)"
                  v-model="cvvNumber"
                >
              </div>
            </div>
            <button id="pay-btn" @click.prevent="sendForm">Оплатить</button>
          </div>
        </form>
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
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex';

export default {  
  name: "Payment",  
  data() {
    return {                  
      cardYear: [],
      cardFirstInp: '',
      cardScndInp: '',
      cardThirdInp: '',
      cardFrthInp: '',
      cardNumber: [],           
      showMsg: false,
      infoMsg: 'Пожалуйста, проверьте корректность введенных данных',
      regexp: /[A-Za-z]/,
      isError: false,
      selectedCardMonth: '',
      selectedCardYear: '',          
    };
  },
  methods: {
    sendForm() {
      let billNumber = this.billNumber
      let paymentSum = this.paymentSum
      let cardNumber = +this.cardNumber.join('')
      let cardholderName = this.cardholderName
      let cvvNumber = +this.cvvNumber
      let selectedCardMonth = this.selectedCardMonth
      let selectedCardYear = this.selectedCardYear

      let formObj = {
        billNumber,
        paymentSum,
        cardNumber,
        cardholderName,
        cvvNumber,
        selectedCardMonth,
        selectedCardYear
      }
      
      for (let key in formObj) {        
        if (formObj[key].length == 0 ) {
          alert('Пожалуйста, проверьте правильность введенных данных')
          break
        }
      }
      if ( this.cardNumber.join('').length < 16 || cvvNumber < 3 || !cardholderName.match(this.regexp)) {
        alert('Пожалуйста, проверьте правильность введенных данных')
      } else {
        this.$router.push('success')
        axios.get('server', JSON.stringify(formObj))
      .then(function(response) {        
          // console.log(response)
      })
      }                          
      
    },
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
      if (event.target.value.length < 4 || event.target.value < 0 || event.target.value.match(/[A-Za-zА-Яа-яЁё]/)) {
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
    ...mapState({
      billNumber: state => state.billNumber,
      paymentSum: state => state.paymentSum,
      cvvNumber: state => state.cvvNumber,
      cardholderName: state => state.cardholderName,
      menuItems: state => state.menuItems
      }),
      billNumber: {
        get () {
          return this.$store.state.billNumber
        },
        set (value) {
          this.$store.commit('updateBillNumber', value)
        }
      },
      paymentSum: {
        get () {
          return this.$store.state.paymentSum
        },
        set (value) {
          this.$store.commit('updatePaymentSum', value)
        }
      },
      cvvNumber: {
        get () {
          return this.$store.state.cvvNumber
        },
        set (value) {
          this.$store.commit('updateCvvNumber', value)
        }
      },
      cardholderName: {
        get () {
          return this.$store.state.cardholderName
        },
        set (value) {
          this.$store.commit('updateCardholderName', value)
        }
      },
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
    // console.log(this.cardNumber)
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/style';
.cvv-input-wrap::after {
    content: "";
    width: 30px;
    height: 30px;
    position: relative;
    top: -37px;
    left: 104px;
    background: url('../assets/ask.png') no-repeat;
    display: block;
}
</style>

