export function findComponentUp (context, componentName) {
  let parent = context.$parent
  let name = parent.$options.name

  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent
    if (parent) {
      name = parent.$options.name
    }
  }

  return parent
}

export function findComponentsUp (context, componentName) {
  const parents = []
  const parent = context.$parent
  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent)
    return parents.concat(findComponentUp(parent, componentName))
  } else {
    return []
  }
}

export function findComponentDown (context, componentName) {
  const childrens = context.$children
  let children = null
  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name
      if (name === componentName) {
        children = child
        break
      } else {
        children = findComponentDown(child, componentName)
        if (children) break
      }
    }
  }

  return children
}

export function findComponentsDown (context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name) components.push(child)
    const foundChilds = findComponentsDown(child, componentName)
    return components.concat(foundChilds)
  }, [])
}

export function findBrotherComponents (context, componentName, exceptMe = true) {
  const resultWithMe = context.$parent.$children.filter(item => item.$options.name === componentName)
  const index = resultWithMe.findIndex(item => item._uid === context._uid)
  if (exceptMe) resultWithMe.splice(index, 1)

  return resultWithMe
}
