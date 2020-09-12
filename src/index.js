const snakeToCamelCase = (s) => s.replace(/(\_\w)/g, (m) => m[1].toUpperCase())

// Change object keys format for camel case from snake case
const normalizeObject = (obj) => {
  const keys = Object.keys(obj)
  return keys.reduce((acc, key) => {
    const value = obj[key]
    if(Object.prototype.toString.call(value) !== '[object Object]') {
      return { ...acc, [snakeToCamelCase(key)]: value }
    }
    return { ...acc, [snakeToCamelCase(key)]: normalizeObject(value) }
  }, {})
}

export default {
    normalizeObject,
}