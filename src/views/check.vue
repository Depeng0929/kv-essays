<template>
  <div>
    <v-check-group v-model="value">
      <v-check label="1"></v-check>
      <v-check label="3"></v-check>
      <v-check label="4"></v-check>
    </v-check-group>

  </div>
</template>

<script>
import VCheck from '../components/check/index'
import VCheckGroup from '../components/check/checkGroup'
export default {
  name: 'Check',
  components: {
    VCheck,
    VCheckGroup
  },
  data () {
    return {
      value: ['1']
    }
  }
}

</script>
<style lang='less'>
</style>
