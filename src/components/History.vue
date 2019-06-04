<template>
  <div class="wrap">
    <div class="menu">
      <router-link :to="item.itemPath" v-for="(item, index) in menuItems" :key="index">
      <div class="menu-item">
        {{item.itemText}}
        </div>
        </router-link>
    </div>
    <div class="history-wrap">
      <h2>История платежей</h2>
      <table>
        <tr>
          <th>№ п/п</th>
          <th>Дата платежа</th>
          <th>Номер счета</th>
          <th>Сумма платежа</th>
        </tr>       
        <tr v-for="(item, index) in allData" :key="index">
          <td style="text-align:center;">{{index + 1}}</td>
          <td>{{item.payment.paymentDate}}</td>
          <td>{{item.payment.billNumber}}</td>
          <td>{{item.payment.paymentSum}}</td>
        </tr>                            
      </table>
    </div>
  </div>  
</template>


<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "History",
  data() {
    return {            
      allData: []
    }
  },
  methods: {
    getData() {
      let bill = this;

    axios.get('http://localhost:80/hh_test/idagroup/test/server/history.json')
     .then(function(response) {
      //  console.log(response.data)       

       if (response.data) {         
         response.data.forEach(element => {
           if (element.payment !== null) {
             bill.allData.push(element)             
           }           
         });
       } else {
         console.log('no response data')
       }      
     })
     .catch(function (error) {        
       console.log(error)   
     })
    }
  },
  mounted() {
    this.getData()
  },
  computed: {
    ...mapState({
      menuItems: state => state.menuItems
    })
  },
}
</script>
