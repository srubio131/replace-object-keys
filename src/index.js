const snakeToCamelCase = (s) => s.replace(/(\_\w)/g, (m) => m[1].toUpperCase())

// Change object keys format for camel case from snake case
export const normalizeObject = (obj) => {
  const keys = Object.keys(obj)
  return keys.reduce((acc, key) => {
    const value = obj[key]
    const isObject = Object.prototype.toString.call(value) === '[object Object]'
    return { ...acc, [snakeToCamelCase(key)]: (!isObject) ? value : normalizeObject(value) }
  }, {})
}

export default {
    normalizeObject,
}