import VNotice from './index.vue'
import Vue from 'vue'

VNotice.newInstance = (properties) => {
  const props = properties || {}

  const instance = new Vue({
    data: props,
    render (h) {
      return h(VNotice, {
        props: props
      })
    }
  })
  const compoent = instance.$mount()
  document.body.appendChild(compoent.$el)

  const alert = instance.$children[0]

  return {
    add (props) {
      alert.add(props)
    },
    remove (name) {
      alert.remove(name)
    }
  }
}

export default VNotice
