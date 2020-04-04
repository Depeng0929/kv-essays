<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { findComponentsDown } from '../../utils/index'
export default {
  name: 'VCheckGroup',
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      current: this.value,
      childrens: []
    }
  },

  watch: {
    value () {
      this.updateModel(true)
    }
  },

  mounted () {
    this.updateModel(true)
  },

  methods: {
    updateModel (update) {
      this.childrens = findComponentsDown(this, 'VCheck')
      if (this.childrens.length) {
        this.childrens.forEach(child => {
          child.model = this.value
          if (update) {
            child.current = this.value.indexOf(child.label) >= 0
            child.group = true
          }
        })
      }
    },

    change (data) {
      this.current = data
      this.$emit('input', data)
      this.$emit('on-change', data)
    }
  }
}

</script>
<style lang='less'>
</style>
