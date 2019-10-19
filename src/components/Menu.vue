<template>
  <div class="menu">
      <div :class="['menu-item', item.active ? 'active-menu-item' : '']" v-for="(item, index) in menuItems" :key="index" @click="setActive(item, index)" :to="item.itemPath" >
        <span> {{ item.itemText }} </span>
      </div>
    </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  computed: {
    menuItems() {
      return this.$store.state.menuItems
    }
  },
  methods: {
    setActive(item, index) {
      this.$store.dispatch('setActiveMenuItem', index)
      this.$router.push(item.itemPath)
    },
  },
}
</script>
