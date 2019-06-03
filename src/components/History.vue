<template>
  <div class="wrap">
    <div class="menu">
      <div v-for="(item, index) in menuItems" :key="index" class="menu-item">{{item}}</div>
    </div>
    <div class="congrat-wrap">
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
      
    }
  }
}
</script>