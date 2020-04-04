<template>
  <div>
      <label>{{label}}</label>
    <div>
      <slot></slot>
      <div v-if="validateState === 'error'" class="i-form-item-message">{{ validateMessage }}</div>
    </div>
  </div>
</template>

<script>
import mixinEmitter from '../../mixins/emitter'
import AsyncValidator from 'async-validator'

export default {
  name: 'VFormItem',
  mixins: [mixinEmitter],
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data () {
    return {
      validateState: '',
      validateMessage: ''
    }
  },
  computed: {
    fieldValue () {
      return this.form.model[this.prop]
    }
  },

  mounted () {
    if (this.prop) {
      this.dispatch('VForm', 'item-add', this)
      this.initialValue = this.fieldValue

      this.setRules()
    }
  },

  beforeDestroy () {
    this.dispatch('VForm', 'item-delelte', this)
  },

  methods: {
    getRules () {
      let formRule = this.form.rules
      formRule = formRule ? formRule[this.prop] : []

      return formRule
    },
    filterRules (trigger) {
      const rules = this.getRules()
      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1)
    },
    validator (trigger, callback = {}) {
      const rules = this.filterRules(trigger)

      if (!rules || rules.length === 0) {
        return true
      }

      this.validateState = 'validating'

      // 以下为 async-validator 库的调用方法
      const descriptor = {}
      descriptor[this.prop] = rules

      const validator = new AsyncValidator(descriptor)
      const model = {}

      model[this.prop] = this.fieldValue

      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? 'success' : 'error'
        this.validateMessage = errors ? errors[0].message : ''

        callback(this.validateMessage)
      })
    },

    setRules () {
      this.$on('on-form-change', this.fieldChange)
      this.$on('on-form-blur', this.fieldBlur)
    },
    fieldChange () {
      this.validator('change')
    },
    fieldBlur () {
      this.validator('blur')
    },

    // 重置数据
    resetField () {
      this.validateState = ''
      this.validateMessage = ''

      this.form.model[this.prop] = this.initialValue
    }
  }
}

</script>
<style lang='less'>
</style>
