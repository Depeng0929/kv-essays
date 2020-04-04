<template>
  <div class="form">
    <v-form ref="form" :rules="rules" :model="form">
      <v-form-item prop="name" label="姓名">
        <v-input v-model="form.name"></v-input>
      </v-form-item>

      <button @click="submit">验证</button>
    </v-form>
  </div>
</template>

<script>
import VForm from '../components/form/index'
import VFormItem from '../components/form/item'
import VInput from '../components/input/index'

export default {
  name: 'Form',
  components: {
    VForm,
    VFormItem,
    VInput
  },
  data () {
    return {
      form: {
        name: 'kdp'
      },
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    submit (e) {
      e.preventDefault()
      this.$refs.form.validator((valid) => {
        console.log(23)
        if (valid) {
          console.log('成功')
        } else {
          console.log('失败')
        }
      })
    }
  }
}
</script>

<style lang="scss">

</style>
