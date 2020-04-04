<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'VForm',
  provide () {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      default () {
        return {}
      }
    },
    rules: {
      type: Object
    }
  },
  data () {
    return {
      childrenList: []
    }
  },
  created () {
    this.$on('item-add', (instance) => {
      this.childrenList.push(instance)
    })
    this.$on('item-delelte', (instance) => {
      this.childrenList.splice(this.childrenList.indexOf(instance), 1)
    })
  },

  methods: {
    resetField () {
      this.childrenList.forEach(child => child.resetField())
    },

    validator (callback) {
      let valid = true
      let count = 0
      return new Promise((resolve, reject) => {
        this.childrenList.forEach(child => {
          child.validator('', (errors) => {
            if (errors) {
              valid = false
            }
            if (++count === this.childrenList.length) {
              resolve(valid)
              if (typeof callback === 'function') {
                callback(valid)
              }
            }
          })
        })
      })
    }
  }
}

</script>
<style lang='less'>
</style>
