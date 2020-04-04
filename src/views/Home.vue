<template>
  <div class="home">
    <button>点我</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  inject: ['store'],
  created () {
    console.log(this.store.state.name)
  }
}
</script>

<style lang="scss">
</style>
