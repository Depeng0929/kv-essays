<template>
  <div class="app-check">
    <input
        key="group"
        class="app-check-checkbox"
        v-if="group"
        type="checkbox"
        :disabled="disabled"
        :value="label"
        v-model="model"
        @change="handleChange">
    <input
      v-else
      key="check"
      type="checkbox"
      class="app-check-checkbox"
      @change="handleChange"
      :checked="current"
      >
    <label class="app-check-label">{{label}}</label>
  </div>
</template>

<script>
import { findComponentUp } from '../../utils/index'
export default {
  name: 'VCheck',
  props: {
    value: {
      type: [String, Boolean, Number],
      default: false
    },
    trueValue: {
      type: [String, Boolean, Number],
      default: true
    },
    falseValue: {
      type: [String, Boolean, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number, Boolean]
    }
  },
  data () {
    return {
      current: this.value,
      group: false,
      model: []
    }
  },
  watch: {
    value (val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateModel()
      } else {
        throw new Error('invalid value')
      }
    }
  },

  mounted () {
    this.parent = findComponentUp(this, 'VCheckGroup')
    if (this.parent) {
      this.group = true
    }

    // checkgroup
    if (this.group) {
      this.parent.updateModel(true)
    } else {
      this.updateModel()
    }
  },

  methods: {
    handleChange (e) {
      if (this.disabled) return false

      const checked = e.target.checked
      this.current = checked

      const value = checked ? this.trueValue : this.falseValue
      this.$emit('input', value)

      // checkgroup
      if (this.group) {
        this.parent.change(this.model)
      }
    },

    updateModel () {
      this.current = this.value === this.trueValue
    }
  }
}

</script>
<style lang='scss'>
.app-check {
  display: inline-block;
  width: 22px;
  height: 22px;
  position: relative;
  &-label {
    display: inline-block;
    width: 100%;
    height: 100%;
    border: 1px solid grey;
    border-radius: 50%;
  }
  &-checkbox{
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  &-checkbox:checked + &-label {
    background-color: skyblue;
    border-color: transparent;
  }
}
</style>
