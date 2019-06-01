<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #101114;
}
#app {
  font-family: 'Open Sans', sans-serif;
  margin: 0 auto;
  padding-top: 79px;
  width: 960px;
}
</style>
