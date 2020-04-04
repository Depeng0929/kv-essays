<template>
  <div class="home">
    测试全局store
  </div>
</template>

<script>

export default {
  name: 'Home',

  inject: ['store'],
  mounted () {
    this.$on('add', (text) => {
      console.log(text)
    })
  }
}
</script>

<style lang="scss">
</style>
