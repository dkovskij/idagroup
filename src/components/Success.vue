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
            <div>
              <span class="operation-details payment-info">Дата платежа</span>
              <span>
                {{paymentDate}}
              </span>
            </div>
    </div>
   </div>
</template>
<script>
import { mapState } from 'vuex';
import axios from 'axios'

export default {
  name: "Success",
  data() {
    return {      
      paymentSum: '',
      cardholderName: '',
      billNumber: '', 
      paymentDate: ''
    }
  },
  methods: {
    getData() {
      let bill = this;

    axios.get('http://localhost:80/hh_test/idagroup/test/server/history.json')
     .then(function(response) {  
       let dataLength = response.data.length - 1                  
       bill.billNumber = response.data[dataLength].payment.billNumber
       bill.paymentSum = response.data[dataLength].payment.paymentSum
       bill.cardholderName = response.data[dataLength].payment.cardholderName             
       bill.paymentDate = response.data[dataLength].payment.paymentDate             
     })
     .catch(function (error) {        
       console.log(error)   
     })
    }
  },
  computed: {
    ...mapState({
      menuItems: state => state.menuItems,       
    }),     
  },
  mounted() {
    setTimeout(() => {
      this.getData()
    }, 100);    
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style';
</style>

