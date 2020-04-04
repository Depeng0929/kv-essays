<template>
  <input
    type="text"
    :value="value"
    @input="handleInput"
    @blur="handleBlur"
    >
</template>

<script>
import mixinEmitter from '../../mixins/emitter'
export default {
  name: 'VInput',
  mixins: [mixinEmitter],
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      current: this.value
    }
  },
  methods: {
    handleInput (e) {
      const value = e.target.value

      this.current = value
      this.$emit('input', value)
      this.dispatch('VFormItem', 'on-form-change', value)
    },
    handleBlur () {
      this.dispatch('VFormItem', 'on-form-blur', this.current)
    }
  }
}

</script>
<style lang='less'>
</style>
