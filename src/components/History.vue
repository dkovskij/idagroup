<template>
  <div class="wrap">
    <Menu></Menu>
    <div class="history-wrap">
      <h2>История платежей</h2>
      <table>
        <tr>
          <th v-for="(value, index) in tableHeader" :key="'header' + index" class="table-header">
            {{value}}
            </th>
        </tr>
        <tr v-for="(item, index) in payments" :key="index">
          <td style="text-align:center;">{{index + 1}}</td>
          <td>{{item.date}}</td>
          <td>{{item.billNumber}}</td>
          <td>{{item.paymentSum}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
import Menu from './Menu'

export default {
  name: "History",
  components: {
    Menu
  },
  data() {
    return {
      tableHeader: {
        index: '№ п/п',
        date: 'Дата платежа',
        billNumber: 'Номер счета',
        paymentSum: 'Сумма платежа'
      }
    }
  },
  mounted() {
  },
  computed: {
    ...mapState({
      payments: state => state.payments
    })
  },
}
</script>
