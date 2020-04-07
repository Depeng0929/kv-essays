import Alert from './index'

let instance

function instanceRefactory () {
  instance = instance || Alert.newInstance()
  return instance
}

function notice ({ content = '', duration = 1.5 }) {
  const instance = instanceRefactory()

  instance.add({
    content,
    duration
  })
}

export default {
  info (options) {
    return notice(options)
  }
}
